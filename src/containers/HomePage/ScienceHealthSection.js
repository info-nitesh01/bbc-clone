import NewsCard from "@/components/NewsCard";
import SectionHeading from "@/components/SectionHeading";
import { fetchMockData } from "@/utils/api";

export default async function ScienceHealthSection() {
    const scienceHealthNews = await fetchMockData("scienceHealthNews");

    const mainNews = scienceHealthNews.find((item) => item.type === "main");

    return (
        <div className="container-lg mx-auto">
            <div className="row mb-5">
                <SectionHeading title="Science & Health" />
                {mainNews && (
                    <div className="card border-0">
                        <NewsCard data={[mainNews]} imgHeight={340} headingSize="md" layout="row" uniquqLayout="ainMainSection" btn="seemore" timeplace="NA" />
                    </div>
                )}
            </div>
        </div>
    )
}