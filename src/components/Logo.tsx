import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-xl sm:text-2xl text-blue-600 font-bold hover:text-blue-500 hoverEffect group",
          className
        )}
      >
        Muhammad
        <span className="text-blue-500 group-hover:text-blue-600 hoverEffect">
          ali&trade;
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
