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
  /*
  use when fetching data from an API
  */
  // const [announcementData, setAnnouncementData] = useState<AnnouncementBarProps[]>([]);
  // const [error, setError] = useState<string | null>(null);
  // useEffect(() => {
  //   const fetchAnnouncementData = async () => {
  //     try{
  //       const response = await fetch("/data/announcementBarData.json");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setAnnouncementData(data);
  //     } catch (err) {
  //       setError(String(err));
  //       console.error("Error fetching announcement data:", err);
  //     }
  //   };
  //   fetchAnnouncementData();
  // }, []);
  // if (error) {
  //   return <div className="text-red-500">Error: {error}</div>;
  // }
  return (
    <div
      className={`announcement-bar text-center flex justify-center items-center gap-3 p-5 md:py-2.5 ${className || ""}`}
      aria-label="Announcements"
    >
      <ul role="list" className="flex flex-wrap gap-3">
        {announcementData.map((announcement) => (
          <AnnouncementItem key={announcement.id} announcement={announcement} />
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementBar;