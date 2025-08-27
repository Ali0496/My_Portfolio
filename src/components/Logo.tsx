import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-xl md:text-2xl text-green-600 font-black uppercase hover:text-green-500 hoverEffect group",
          className
        )}
      >
        Muhammad
        <span className="text-green-500 group-hover:text-green-600 hoverEffect">
          Ali&trade;
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
