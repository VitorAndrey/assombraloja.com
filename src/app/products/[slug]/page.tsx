import { PromotionalAlert } from "@/components/PromotionalAlert";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { BackButton } from "@/components/back-button";
import { sanity } from "@/lib/sanity";
import { Product } from "@/models";
import Image from "next/image";

type ProductProps = {
  params: {
    slug: string;
  };
};

export default async function Product({ params }: ProductProps) {
  const { slug } = params;

  const product = await sanity.fetch<Product>(
    `
  *[_type == "product" && slug.current == "${slug}"][0]{
    _id,
    "imageUrl":image.asset->url,
    name,
    "slug": slug.current,
    description,
    basePrice,
    discountPercentage,
    halloweenPromotional
  }
  `,
    {
      next: { revalidate: 1000 },
    },
  );

  return (
    <main className="relative flex items-center justify-center flex-col pt-20">
      <div className="absolute top top-0 left-4">
        <BackButton />
      </div>

      <div className="bg-white flex flex-wrap wrapper p-4 rounded-xl">
        <div className="flex-1 flex justify-center">
          <Image
            src={product.imageUrl}
            alt={product.name}
            className="w-64 h-64 object-cover rounded-xl"
            height={0}
            width={0}
            sizes="100vw"
          />
        </div>

        <div className="flex-1 flex flex-col gap-2 px-6">
          <h3 className="font-semibold text-lg">{product.name}</h3>

          <p>{product.basePrice}</p>

          <p>{product.description}</p>
        </div>

        <div className="flex-1 flex justify-center items-center border rounded-xl">
          <AddToCartButton product={product} />
        </div>
      </div>

      <PromotionalAlert product={product} />
    </main>
  );
}
