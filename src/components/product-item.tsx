import { Product } from "@/models";
import Image from "next/image";
import Link from "next/link";

type ProductItemProps = {
  product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
  const url = `/products/${product.slug}`;
  return (
    <Link href={url}>
      <div className="bg-white p-5 shadow-lg rounded-xl w-64 h-96 flex flex-col items-center gap-3">
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-[70%] object-cover rounded-xl"
          height={0}
          width={0}
          sizes="100vw"
        />

        <p>{product.name}</p>
        <p>{product.basePrice}</p>
      </div>
    </Link>
  );
}
