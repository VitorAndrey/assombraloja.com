import { Product } from "@/models";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
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

        <div className="flex-1 px-4 gap-2 w-full flex flex-col">
          <p className="truncate">{product.name}</p>

          <div className="flex items-center">
            <span className="text-sm mr-2 text-gray-600">5.0</span>

            <StarIcon color="black" fill="" size={14} />
            <StarIcon color="black" fill="" size={14} />
            <StarIcon color="black" fill="" size={14} />
            <StarIcon color="black" fill="" size={14} />
            <StarIcon color="black" fill="" size={14} />

            <span className="text-xs ml-2 text-gray-600">(80)</span>
          </div>

          <p>R$ {product.basePrice.toFixed(2).replace(".", ",")}</p>

          <Button>Adicionar</Button>
        </div>
      </div>
    </Link>
  );
}
