import AlsoInNewsSection from "@/containers/HomePage/AlsoInNewsSection";
import CultureSection from "@/containers/HomePage/CultureSection";
import DiscoverMoreSlider from "@/containers/HomePage/DiscoverMoreSlider";
import LatestAudioSlider from "@/containers/HomePage/LatestAudioSlider";
import MultiCatSection from "@/containers/HomePage/MultiCatSection";
import MultiCatSection2 from "@/containers/HomePage/MultiCatSection2";
import MustWatchSlider from "@/containers/HomePage/MustWatchSlider";
import PrideMonthSection from "@/containers/HomePage/PrideMonthSection";
import ScienceHealthSection from "@/containers/HomePage/ScienceHealthSection";
import TopNews from "@/containers/HomePage/TopNewsSection";
import WeekendReads from "@/containers/HomePage/WeekendReadsSection";


export const metadata = {
  title: "BBC News - Breaking News, Analysis & Features",
  description: "Get the latest news from around the world with in-depth analysis, breaking headlines, and trusted reporting from the BBC News clone.",
  keywords: [
    "BBC News",
    "Breaking News",
    "World News",
    "International News",
    "Top Headlines",
    "News Website",
    "Live News",
    "News Today",
    "Latest Updates"
  ],
  robots: "index, follow",
  openGraph: {
    title: "BBC News - Breaking News, Analysis & Features",
    description: "Stay informed with breaking news, expert reporting, and feature stories from the BBC News clone.",
    siteName: "BBC News Clone",
    type: "website",
  }
};


export default async function Home() {

  return (
    <div className="main-container">
      <TopNews/>
      <WeekendReads/>
      <AlsoInNewsSection />
      <MustWatchSlider bgColor="bgDark" slidesPerView = {5.2}/>
      <CultureSection />
      <PrideMonthSection />
      <ScienceHealthSection />
      <MultiCatSection />
      <LatestAudioSlider slidesPerView = {7.2}/>
      <MultiCatSection2 />
      <DiscoverMoreSlider bgColor="bgDark" slidesPerView = {5.2}/>
    </div>
  );
}
