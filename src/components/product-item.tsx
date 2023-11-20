import { Product } from "@/models";
import Link from "next/link";

type ProductItemProps = {
  product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
  const url = `/products/${product.slug.current}`;

  return <Link href={url}>{product.name}</Link>;
}
