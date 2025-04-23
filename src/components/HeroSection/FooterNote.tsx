import React from "react";
import Link from "next/link";
const FooterNote: React.FC = () => {
  return (
    <footer className="flex flex-col gap-y-3 mt-6 text-center lg:text-start">
      <p className="text-xs font-medium font-figtree text-[#ababab]">
        {`By clicking "Get Started", you agree with our `}
        <Link href="/terms" className="no-underline hover:underline hover:text-white">
          Terms and Conditions
        </Link>
        ,
        <Link href="/privacy" className="no-underline hover:underline hover:text-white">
          Privacy Policy
        </Link>
        , and {" "}
        <Link href="/subscription" className="no-underline hover:underline hover:text-white">
           Subscription Terms
        </Link>.
      </p>
      <p className="text-xs font-medium font-figtree text-[#ababab]">
        Fametonic &copy; 2025. All Rights Reserved.
      </p>
    </footer>
  );
};

export default FooterNote;
