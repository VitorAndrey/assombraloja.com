"use client";

import { ShoppingListContext } from "@/contexts/ShoppingList";
import { useContext } from "react";
import { CartItem } from "./cart-item";

export function SheetCartList() {
  const { cartList } = useContext(ShoppingListContext);

  return (
    <div className="flex flex-col gap-4">
      {cartList.map((product) => (
        <CartItem product={product} key={product._id} />
      ))}
    </div>
  );
}
