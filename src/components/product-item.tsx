import { Product } from "@/models";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";

type ProductItemProps = {
  product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
  const url = `/products/${product.slug}`;
  return (
    <Link href={url}>
      <div className="bg-white shadow-sm hover:shadow-lg hover:scale-[1.001] transition-all rounded-xl w-56 h-96 flex flex-col items-center gap-3">
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-[55%] object-cover rounded-xl p-4"
          height={0}
          width={0}
          sizes="100vw"
        />

        <Separator />

        <div className="flex-1 px-4 w-full">
          <p>{product.name}</p>
          <p>{product.basePrice}</p>
        </div>
      </div>
    </Link>
  );
}
