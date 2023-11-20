"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Product } from "@/models";
import { useEffect, useRef } from "react";

export function PromotionalAlert({ product }: { product: Product }) {
  const openRef = useRef<HTMLButtonElement>(null);

  function handleReceiveCandy() {}

  function handleIsPromotional() {
    if (!product || !openRef.current) return;

    openRef.current.click();

    localStorage.setItem(product.slug, "found");
  }

  useEffect(() => {
    if (!product) return;

    if (localStorage.getItem(product.slug)) return;

    if (product.halloweenPromotional) handleIsPromotional();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger ref={openRef} />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Gostosuras ou travessuras!</AlertDialogTitle>
            <AlertDialogDescription>
              Parabéns! Você encontrou um item promocional que faz parte do
              especial de Halloween! Resgate seu doce e junte 10 no total para
              conseguir cashback!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleReceiveCandy}>
              Resgatar!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
