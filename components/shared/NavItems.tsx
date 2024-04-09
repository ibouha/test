"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row text-blue-950">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-[#F2BD00]"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}> {link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
