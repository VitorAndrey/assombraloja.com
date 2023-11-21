"use client";

import { ShoppingListContext } from "@/contexts/ShoppingList";
import { Product } from "@/models";
import { useContext } from "react";
import { Button } from "./ui/button";

export function AddToCartButton({ product }: { product: Product }) {
  const { addProduct, cartList, removeProduct } =
    useContext(ShoppingListContext);
  const isInCart = cartList.includes(product);

  function handleToggleItem() {
    if (isInCart) removeProduct(product);
    if (!isInCart) addProduct(product);
  }

  return (
    <Button onClick={handleToggleItem}>
      {!isInCart ? "Adicionar ao carrinho" : "Remover do carrinho"}
    </Button>
  );
}
