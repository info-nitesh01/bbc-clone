import NewsCard from "@/components/NewsCard";
import SectionHeading from "@/components/SectionHeading";
import { fetchMockData } from "@/utils/api";

export default async function WeekendReads() {
    const newsData = await fetchMockData("weekendReads");

    return (
        <div className="container-lg mx-auto mb-5">
            <SectionHeading title="Weekend reads"/>
            <div className="card border-0">
                {newsData && (
                    <div className="row">
                        <NewsCard data={newsData} imgHeight={170} headingSize="sm" layout="col-md-6" />
                    </div>
                )}
            </div>
        </div>
    )
}