
import React from "react";
import Image from "next/image";
type FallbackUIProps = {
  message?: string; 
  className?: string; 
};

const FallbackUI: React.FC<FallbackUIProps> = ({
  message = "Error: Unable to load data. Please try again later.",
  className = "",
}) => {
  return (
    <section
      className={`w-full flex flex-col gap-y-10 justify-center items-center min-h-[300px] bg-background text-white ${className}`}
    >
      <div className="mb-8">
        <Image
          src="/images/error-found.svg" 
          alt="Error Illustration"
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>
      <p className="text-2xl font-figtree font-medium">{message}</p>
    </section>
  );
};

export default FallbackUI;