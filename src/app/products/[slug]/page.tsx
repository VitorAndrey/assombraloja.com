import { PromotionalAlert } from "@/components/PromotionalAlert";
import { sanity } from "@/lib/sanity";
import { Product } from "@/models";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
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
    <main className="relative">
      <button>
        <ArrowLeftIcon color="black" />
      </button>

      <h1>{product.name}</h1>

      <Image
        src={product.imageUrl}
        alt={product.name}
        className="w-64 h-64 object-cover rounded-xl"
        height={0}
        width={0}
        sizes="100vw"
      />

      <PromotionalAlert product={product} />
    </main>
  );
}
