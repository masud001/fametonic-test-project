import React, { FC, ReactNode } from "react";

type FeatureItemProps = {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
};


const FeatureItem: FC<FeatureItemProps> = ({ children, className, icon }) => {
  return (
    <div
      className={`flex gap-x-2.5 items-start mb-4 ${className || ""}`}
      role="listitem"
    >
      
      <span
        className=" font-bold flex-shrink-0"
        aria-hidden="true" 
      >
        {icon || "✨"}
      </span>

      <p className="text-white font-semibold font-figtree text-[16px]">{children}</p>
    </div>
  );
};

export default FeatureItem;