import React from "react";
import FeatureItem from "./FeatureItem";

type FeaturesListProps = {
  features: string[];
};

const FeaturesList: React.FC<FeaturesListProps> = ({ features }) => {
  return (
    <ul
      className="flex text-start flex-col gap-y-[13px] pt-4 pb-[30px] mb-8"
      aria-label="Key features"
      role="list"
    >
      {features.map((feature, index) => (
        <FeatureItem key={index}>{feature}</FeatureItem>
      ))}
    </ul>
  );
};

export default FeaturesList;
