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
    className={`text-menu text-lg hover:text-white transition-colors duration-300 ${className}`}
  >
    {label}
  </Link>
);