import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCartIcon } from "lucide-react";
import { SheetCartList } from "./sheet-cart-list";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="items-center h-16 border-b border-b-gray-300">
      <nav className="justify-between flex items-center h-full px-8">
        <Link href="/">Assombraloja</Link>

        <div>
          <Sheet>
            <SheetTrigger>
              <Button size="icon" variant="secondary">
                <ShoppingCartIcon color="black" size={18} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Carrinho</SheetTitle>
                <SheetDescription>Finalize suas compras!</SheetDescription>
              </SheetHeader>

              <SheetCartList />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
