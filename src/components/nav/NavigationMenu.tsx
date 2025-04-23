import React from "react";
import { MenuItemLink } from "./MenuItemLink";
import { MenuItem } from "./HeaderNav";

type Props = {
  menuItems: MenuItem[];
};

export const NavigationMenu: React.FC<Props> = ({ menuItems }) => (
  <nav className="hidden md:flex gap-x-10 items-center" aria-label="Main navigation" role="navigation">
    {menuItems.map((item) => (
      <MenuItemLink key={item.id} id={item.id} label={item.label} link={item.link} />
    ))}
  </nav>
);
