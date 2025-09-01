import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useTheme } from "./ThemeContext";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const Theme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button onClick={toggleTheme}>
          {theme === "dark" ? (
            <SunIcon className="h-5 w-5 text-white hover:text-gray-300 hoverEffect" />
          ) : (
            <MoonIcon className="h-5 w-5 text-gray-900 hover:text-gray-600 hoverEffect" />
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </TooltipContent>
    </Tooltip>
  );
};

export default Theme;
