import { PromotionalAlert } from "@/components/PromotionalAlert";
import { sanity } from "@/lib/sanity";
import { Product } from "@/models";

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
    <div>
      <h1>{product.name}</h1>

      <PromotionalAlert product={product} />
    </div>
  );
}
