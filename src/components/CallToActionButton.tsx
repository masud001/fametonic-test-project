import React, { FC, ReactNode } from "react";

type CallToActionButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};


const CallToActionButton: FC<CallToActionButtonProps> = ({
  children,
  className = "",
  onClick,
  ariaLabel,
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-text flex gap-2.5 justify-center items-center px-10 py-2 bg-primary rounded-xl w-full cursor-pointer  drop-shadow-(--my-drop-shadow)
        ${className}`}
      aria-label={ariaLabel || "Call to action"} 
    >
      {children}
    </button>
  );
};

export default CallToActionButton;