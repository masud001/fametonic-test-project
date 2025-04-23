import React from "react";
import Link from "next/link";

type MenuItemLinkProps = {
  id: number;
  label: string;
  link: string;
  onClick?: () => void; 
  className?: string; 
  isActive?: boolean; // Optional prop to indicate if the link is active
  tabIndex?: number; // Optional prop for tab index
};

export const MenuItemLink: React.FC<MenuItemLinkProps> = ({
  id,
  label,
  link,
  onClick,
  className = "",
  isActive = false, // Default to false if not provided
  tabIndex = 0, // Default to 0 if not provided
}) => (
  <Link
    key={id}
    href={link}
    onClick={onClick}
    aria-current={isActive ? "page" : undefined} // Use aria-current for active link
    className={`text-menu font-semibold font-figtree text-lg hover:text-text transition-colors duration-300 ${className}`}
    tabIndex={tabIndex} // Set tab index for accessibility
  >
    {label}
  </Link>
);