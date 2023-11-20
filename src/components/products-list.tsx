import { sanity } from "@/lib/sanity";
import { Product } from "@/models";
import { ProductItem } from "./product-item";

export default async function ProductsList() {
  const products = await sanity.fetch<Product[]>(`*[_type == "product"]`, {
    next: { revalidate: 1000 },
  });

  return (
    <section className="wrapper">
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </section>
  );
}
