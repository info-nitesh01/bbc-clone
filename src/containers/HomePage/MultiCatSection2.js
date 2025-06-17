import NewsCard from "@/components/NewsCard";
import SectionHeading from "@/components/SectionHeading";
import { fetchMockData } from "@/utils/api";

export default async function MultiCatSection2() {
    const multiCatNews = await fetchMockData("multiCatNews2");

    return (
        <div className="container-lg mx-auto main-container mb-5">
            <div className="row">
                {Object.keys(multiCatNews).map((catKey, index) => {
                    const categoryNews = multiCatNews[catKey];
                    if (!Array.isArray(categoryNews) || categoryNews.length === 0) return null;

                    const heading = categoryNews[0].heading;

                    return (
                        <div key={index} className="col-md-6 col-lg-3">
                            <SectionHeading title={heading} />

                            <div className="row">
                                <NewsCard data={categoryNews} imgHeight={200} headingSize="sm" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}