import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Logo: React.FC = () => (
  <>
    {/* Mobile Logo */}
    <div className="md:hidden !ml-auto">
      <Link href="/" aria-label="Navigate to the homepage">
        <Image
          src="/images/mobile-logo.svg"
          alt="Fametonic Logo - Mobile View"
          width={120}
          height={40}
          loading="lazy"
        />
      </Link>
    </div>

    {/* Desktop Logo */}
    <div className="hidden md:block">
      <Link href="/" aria-label="Navigate to the homepage">
        <Image
          src="/images/desktop-logo.svg"
          alt="Fametonic Logo - Desktop View"
          width={174}
          height={74}
          loading="lazy"
        />
      </Link>
    </div>
  </>
);
