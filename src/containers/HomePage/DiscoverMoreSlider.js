import NewsSlider from "@/components/NewsSlider";
import SectionHeading from "@/components/SectionHeading";
import { fetchMockData } from "@/utils/api";

export default async function DiscoverMoreSlider({ bgColor = "", slidesPerView = 5.2 }) {
    const discoverMoreNews = await fetchMockData("discoverMoreNews");

    return (
        <div className={`py-5 ${bgColor}`}>
            <div className="container-lg mx-auto">
                <SectionHeading title="Discover More from thr bbc" bgColor={bgColor}/>
                <NewsSlider data={discoverMoreNews} bgColor={bgColor} slidesPerView={slidesPerView}/>
            </div>
        </div>
    )
}