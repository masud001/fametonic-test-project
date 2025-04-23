import React from "react";
import Link from "next/link";
import { stripHtml } from "./utils";

interface Announcement {
  id: number;
  message: string; // Message can contain HTML (e.g., <span> tags)
  link?: string; // Optional link
  icon?: string; // Optional icon (e.g., emoji or image URL)
}

interface AnnouncementItemProps {
  announcement: Announcement;
}

/**
 * AnnouncementItem Component
 * Renders a single announcement with optional link, icon, and HTML content.
 */
export const AnnouncementItem: React.FC<AnnouncementItemProps> = ({
  announcement,
}) => {
  const { message, link, icon } = announcement;

  return (
    <div
      className="announcement-item md:text-[22px] md:leading-[26px] font-extrabold text-[16px] leading-[19px] flex items-center gap-2"
      role="listitem"
    >
      {/* Optional Icon */}
      {icon && <span className="announcement-icon">{icon}</span>}

      {/* Announcement Content */}
      {link ? (
        <Link
          href={link}
          className="no-underline text-white hover:underline focus:underline"
          dangerouslySetInnerHTML={{ __html: message }}
          aria-label={`Announcement: ${stripHtml(message)}`}
        ></Link>
      ) : (
        <span
          dangerouslySetInnerHTML={{ __html: message }}
          aria-label={`Announcement: ${stripHtml(message)}`}
        ></span>
      )}
    </div>
  );
};