import { Product } from "@/models";
import { sanity } from "@/lib/sanity";

export default async function Home() {
  const products = await sanity.fetch<Product[]>(`*[_type == "produto"]`, {
    next: {
      revalidate: 3600,
    },
  });

  console.log(products);

  return (
    <main>
      {products.map((product) => (
        <p key={product._id}>{product.name}</p>
      ))}
    </main>
  );
}
