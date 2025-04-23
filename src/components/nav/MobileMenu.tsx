import React, { useEffect } from "react";
import { MenuItemLink } from "./MenuItemLink";
import { MenuItem } from "./HeaderNav";

type Props = {
  menuItems: MenuItem[];
  closeMenu: () => void;
  isOpen: boolean;
};

export const MobileMenu: React.FC<Props> = ({ menuItems, closeMenu, isOpen }) => {
  // Disable scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ""; // Ensure scrolling is re-enabled
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed top-[150px] inset-0 z-10 bg-background flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex flex-col items-center gap-y-8">
        {menuItems.map((item) => (
          <MenuItemLink
            key={item.id}
            id={item.id}
            label={item.label}
            link={item.link}
            onClick={closeMenu} // Close menu on click
          />
        ))}
      </nav>
    </div>
  );
};
