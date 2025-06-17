import NewsCard from "@/components/NewsCard";
import SectionHeading from "@/components/SectionHeading";
import { fetchMockData } from "@/utils/api";

export default async function CultureSection() {
    const cultureNews = await fetchMockData("cultureNews");

    const mainNews = cultureNews.find((item) => item.type === "main");

    return (
        <div className="container-lg mx-auto">
            <div className="row my-5">
                <SectionHeading title="Culture" />
                {mainNews && (
                    <div className="card border-0">
                        <NewsCard data={[mainNews]} imgHeight={340} headingSize="md" layout="row" uniquqLayout="ainMainSection" order="inverse" btn="seemore" timeplace="NA"/>
                    </div>
                )}
            </div>
        </div>
    )
}