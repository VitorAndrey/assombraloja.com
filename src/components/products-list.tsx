import { sanity } from "@/lib/sanity";
import { Product } from "@/models";
import { ProductItem } from "./product-item";

export default async function ProductsList() {
  const products = await sanity.fetch<Product[]>(
    `*[_type == "product"]{
    _id,
    "imageUrl":image.asset->url,
    name,
    "slug": slug.current,
    description,
    basePrice,
    discountPercentage,
    halloweenPromotional
  }`,
    {
      next: { revalidate: 1000 },
    },
  );

  return (
    <section className="wrapper flex flex-wrap gap-4">
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </section>
  );
}
