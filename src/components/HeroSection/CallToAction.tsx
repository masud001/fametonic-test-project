import React from "react";
import CallToActionButton from "../CallToActionButton";

type CallToActionProps = {
  text: string;
  description: string;
};

const CallToAction: React.FC<CallToActionProps> = ({ text, description }) => {
  return (
    <div className="w-full lg:w-[313px] flex justify-center flex-col align-middle text-center gap-y-2.5">
      <CallToActionButton>{text}</CallToActionButton>
      <p className="text-xs font-normal font-figtree text-white">{description}</p>
    </div>
  );
};

export default CallToAction;
