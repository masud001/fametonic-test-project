import React from "react";
import Link from "next/link";

type MenuItemLinkProps = {
  id: number;
  label: string;
  link: string;
  onClick?: () => void; 
  className?: string; 
};

export const MenuItemLink: React.FC<MenuItemLinkProps> = ({
  id,
  label,
  link,
  onClick,
  className = "",
}) => (
  <Link
    key={id}
    href={link}
    onClick={onClick}
    className={`text-menu font-semibold font-figtree text-lg hover:text-text transition-colors duration-300 ${className}`}
  >
    {label}
  </Link>
);