import React from "react";
import announcementData from "@/data/announcementBarData.json";
import { AnnouncementItem } from "./AnnouncementItem";

interface AnnouncementBarProps {
  className?: string;
}

/**
 * AnnouncementBar Component
 * Displays a list of announcements with optional links.
 */
const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ className }) => {
  return (
    <div
      className={`announcement-bar text-center flex justify-center items-center gap-3 p-5 md:py-2.5 ${className || ""}`}
      role="region"
      aria-label="Announcements"
    >
      {announcementData.map((announcement) => (
        <AnnouncementItem key={announcement.id} announcement={announcement} />
      ))}
    </div>
  );
};

export default AnnouncementBar;