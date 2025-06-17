import NewsCard from "@/components/NewsCard";
import SectionHeading from "@/components/SectionHeading";
import { fetchMockData } from "@/utils/api";

export default async function AlsoInNewsSection() {
    const alsoInNews = await fetchMockData("alsoInNews");

    const mainNews = alsoInNews.find((item) => item.type === "main");
    const otherNews = alsoInNews.filter((item) => item.type === "other1");
    const withoutImage = alsoInNews.filter((item) => item.type === "other2");

    return (
        <div className="container-lg mx-auto">
            <div className="row mb-5">
                <SectionHeading title="Also In News" />
                <div className="col-md-9">
                    {mainNews && (
                        <div className="card border-0">
                            <NewsCard data={[mainNews]} imgHeight={340} headingSize="md" layout="row" uniquqLayout="ainMainSection" />
                        </div>
                    )}
                    <div className="row">
                        {otherNews && (
                            <NewsCard data={otherNews} imgHeight={170} headingSize="sm" layout="col-md-6 col-lg-4"/>
                        )}
                    </div>
                </div>
                <div className="col-md-3">
                    {withoutImage && (
                        <NewsCard data={withoutImage} imgHeight={170} headingSize="sm" />
                    )}
                </div>
            </div>
        </div>
    )
}