import { Product } from "@/models";

export function CartItem({ product }: { product: Product }) {
  return <div>{product.name}</div>;
}
