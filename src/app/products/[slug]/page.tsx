import { sanity } from "@/lib/sanity";
import { Product } from "@/models";

type ProductProps = {
  params: {
    slug: string;
  };
};

export default async function Product({ params }: ProductProps) {
  const { slug } = params;

  console.log(slug);

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

  return <h1>{product.name}</h1>;
}
