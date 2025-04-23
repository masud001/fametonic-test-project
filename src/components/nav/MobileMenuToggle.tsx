import React from "react";

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export const MobileMenuToggle: React.FC<Props> = ({ isOpen, toggle }) => (
  <div className=" md:hidden ml-auto!">
    <button
      onClick={toggle}
      aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
      aria-expanded={isOpen}
      className="relative z-20 flex flex-col gap-y-1.5"
    >
      <span className={`block w-6 h-0.5 bg-text transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
      <span className={`block w-6 h-0.5 bg-text transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
      <span className={`block w-6 h-0.5 bg-text transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
    </button>
  </div>
);
