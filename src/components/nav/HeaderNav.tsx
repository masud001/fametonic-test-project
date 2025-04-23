"use client";

import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NavigationMenu } from "./NavigationMenu";
import { MobileMenu } from "./MobileMenu";
import { MobileMenuToggle } from "./MobileMenuToggle";
import menuData from "@/data/menuData.json";

export type MenuItem = {
  id: number;
  label: string;
  link: string;
};

const HeaderNav: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMenuItems(menuData); // Load menu data
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full flex justify-center bg-background shadow-md relative">
      <div className="container lg:max-w-[992px] flex justify-between items-center pt-5 lg:pt-9 px-5 md:px-0 relative">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <NavigationMenu menuItems={menuItems} />

        {/* Mobile Menu Toggle */}
        <MobileMenuToggle isOpen={isMenuOpen} toggle={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} menuItems={menuItems} closeMenu={closeMenu} />
    </header>
  );
};

export default HeaderNav;
