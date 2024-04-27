import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import Link from "next/link";

export function NavMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignRight />
      </SheetTrigger>
      <SheetContent className="w-[300px]">
        <SheetHeader>
          <SheetTitle className="w-fit font-semibold text-3xl">Blitz</SheetTitle>
  
        </SheetHeader>
        <div className="flex flex-col gap-12 py-4 mt-16">
          <Link href="/dao" className=" font-medium text-2xl">
            Governance
          </Link>
          <Link href="/whitepaper" className=" font-medium text-2xl">
            Whitepaper
          </Link>
          <Link href="/tokenomics" className=" font-medium text-2xl">
            Tokenomics
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
