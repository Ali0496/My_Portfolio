
import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useTheme } from "./ThemeContext";

const Theme = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 text-white hover:text-gray-300 hoverEffect" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-900 hover:text-gray-600 hoverEffect" />
      )}
    </button>
  );
};

export default Theme;
