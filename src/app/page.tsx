import AnnouncementBar from "@/components/AnnouncementBar/AnnouncementBar";
import HeaderNav from "@/components/nav/HeaderNav";
import HeroSection from "@/components/HeroSection/HeroSection";
import heroData from "@/data/heroData.json";
import HeroSectionTwo from "@/components/HeroSection/HeroSectionTwo";

const Home = async () => {
  let data = null;

  try {
    // Simulate fetching data (e.g., from an API or JSON file)
    data = heroData;
    if (!data) {
      throw new Error("Hero data is missing or invalid.");
    }
  } catch (error) {
    console.error("Failed to load hero data:", error);
  }

  return (
    <main className="min-h-screen bg-background font-[family-name:var(--font-geist-sans)]">
      <AnnouncementBar className="w-full bg-gradient-to-r from-[#FC004E] to-[#10CBE0] text-white font-figtree" />
      <HeaderNav />
      <HeroSection data={data} />
      {/* with context api  */}
      <HeroSectionTwo className="bg-background" />
    </main>
  );
};

export default Home;
