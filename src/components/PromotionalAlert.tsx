"use client";

import { Product } from "@/models";
import { useEffect } from "react";

export function PromotionalAlert({ product }: { product: Product }) {
  function handleIsPromotional() {
    if (!product) return;

    setTimeout(() => {
      window.alert("Voce encontrou um presente!");
    }, 1000);

    localStorage.setItem(product.slug, "found");
  }

  useEffect(() => {
    if (!product) return;

    if (localStorage.getItem(product.slug)) return;

    if (product.halloweenPromotional) handleIsPromotional();
  }, [product]);

  return <></>;
}
