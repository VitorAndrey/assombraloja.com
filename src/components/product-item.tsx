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
      <div className="bg-white p-4 shadow-lg rounded-xl w-64 h-96">
        {product.name}

        <Image
          src={product.imageUrl}
          alt={product.name}
          height={0}
          width={0}
          sizes="100vw"
        />
      </div>
    </Link>
  );
}
