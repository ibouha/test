import React from "react";
import { PiListFill } from "react-icons/pi";
import logo from "../../public/assets/images/eventify.svg"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import NavItems from "./NavItems";

function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <PiListFill className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 Ibg-white md:hidden">
            <Image src={logo} alt="Eventify" width={178} height={38} />
            <Separator className="border border-gray-50" />
            <NavItems/>
         
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
