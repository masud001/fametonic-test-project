import React from "react";
import CallToActionButton from "@/components/CallToActionButton";
import Link from "next/link";
import Image from "next/image";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center min-h-screen bg-[#010101] text-white text-center px-6">
      <div className="mb-8">
        <Image
          src="/images/page-not-found-image.svg"
          alt="404 Not Found"
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-400 mb-8">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link href="/">
      <CallToActionButton>Go Back to Homepage</CallToActionButton>
      </Link>
    </div>
  );
};

export default NotFoundPage;