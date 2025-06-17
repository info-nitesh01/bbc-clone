import NewsCard from "@/components/NewsCard";
import SectionHeading from "@/components/SectionHeading";
import { fetchMockData } from "@/utils/api";

export default async function PrideMonthSection() {
    const prideMonthNews = await fetchMockData("prideMonthNews");

    const otherNews = prideMonthNews.filter((item) => item.type === "pmNews");

    return (
        <div className="container-lg mx-auto">
            <div className="row mb-5">
                <SectionHeading title="Pride Month" />
                <div className="row mx-auto px-0">
                    {otherNews && (
                        <NewsCard data={otherNews} imgHeight={170} headingSize="sm" layout="col-md-6 col-lg-4" />
                    )}
                </div>
            </div>
        </div>
    )
}