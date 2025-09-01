"use client";
import React from "react";
import { navLinks } from "../lib/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Theme from "./Theme";

const HeaderMenu = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:inline-flex items-center  gap-2 md:gap-4 lg:gap-6 font-medium">
      {navLinks?.map((item) => (
        <Link
          key={item?.label}
          href={item?.href}
          className={`hover:text-blue-500 hoverEffect relative group ${
            pathname === item?.href && "text-blue-500"
          }`}
        >
          {item?.label}
          <span className="absolute -bottom-0.5 left-1/2  w-0 h-0.5 bg-blue-500 group-hover:w-1/2 hoverEffect group-hover:left-0" />
          <span className="absolute -bottom-0.5 right-1/2  w-0 h-0.5 bg-blue-500 group-hover:w-1/2 hoverEffect group-hover:right-0" />
        </Link>
      ))}
      <Theme />
    </div>
  );
};

export default HeaderMenu;
