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
      next: { revalidate: 10 },
    },
  );

  return (
    <section className="wrapper flex justify-center flex-wrap gap-8 py-8">
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </section>
  );
}
