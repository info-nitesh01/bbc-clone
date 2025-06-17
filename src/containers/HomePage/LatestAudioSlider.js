import NewsSlider from "@/components/NewsSlider";
import SectionHeading from "@/components/SectionHeading";
import { fetchMockData } from "@/utils/api";

export default async function LatestAudioSlider({ bgColor = "", slidesPerView = 5.2 }) {
    const latestAudio = await fetchMockData("latestAudio");

    return (
        <div className={`py-5 ${bgColor}`}>
            <div className="container-lg mx-auto">
                <SectionHeading title="Latest Audio" bgColor={bgColor}/>
                <NewsSlider data={latestAudio} bgColor={bgColor} slidesPerView={slidesPerView} imageLayout="aspect-sq" savebtn={true}  />
            </div>
        </div>
    )
}