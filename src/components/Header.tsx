import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="fixed w-full bg-white/95 dark:bg-gray-800/95 z-50 p-4">
      <Container className="flex items-center justify-between ">
        <Logo />
        <nav className="w-auto md:w-1/2 flex items-center justify-end gap-1 md:gap-0">
          <HeaderMenu />
          <MobileMenu />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
