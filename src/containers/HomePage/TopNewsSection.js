import NewsCard from "@/components/NewsCard";
import SectionHeading from "@/components/SectionHeading";
import { fetchMockData } from "@/utils/api";

export default async function TopNews() {
    const topNews = await fetchMockData("topNews");

    const mainNews = topNews.find((item) => item.type === "main");
    const otherNews = topNews.filter((item) => item.type === "other" && item.image !== "NA");
    const withoutImage = topNews.filter((item) => item.type === "other" && item.image === "NA");

    return (
        <div className="container-lg mx-auto">
            <div className="row mb-5">
                <SectionHeading title="More top stories"/>
                <div className="col-md-4 col-lg-3 order-1 order-md-0">
                    {otherNews && (
                        <NewsCard data={otherNews} imgHeight={170} headingSize="sm" />
                    )}
                </div>
                <div className="col-md-8 col-lg-6 order-0 order-md-1">
                    {mainNews && (
                        <div className="card border-0">
                            <NewsCard data={[mainNews]} imgHeight={340} headingSize="md" />
                        </div>
                    )}
                </div>
                <div className="col-md-12 col-lg-3 col-lg-3 order-2">
                    <div className="card border-0">
                        {withoutImage && (
                            <div className="row">
                                <NewsCard data={withoutImage} imgHeight={170} headingSize="sm" layout="col-md-6 col-lg-12" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}