import NewsSlider from "@/components/NewsSlider";
import SectionHeading from "@/components/SectionHeading";
import { fetchMockData } from "@/utils/api";

export default async function MustWatchSlider({ bgColor = "", slidesPerView = 5.2 }) {
    const mustWatchNews = await fetchMockData("mustWatchNews");

    return (
        <div className={`py-5 ${bgColor}`}>
            <div className="container-lg mx-auto">
                <SectionHeading title="Must Watch" bgColor={bgColor}/>
                <NewsSlider data={mustWatchNews} bgColor={bgColor} slidesPerView={slidesPerView}/>
            </div>
        </div>
    )
}