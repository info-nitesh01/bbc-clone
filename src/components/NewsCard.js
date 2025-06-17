import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ data = [], imgHeight = 300, headingSize = "sm", layout = "", uniquqLayout = "", order = "", btn = "", timeplace = "", bgColor = "", imageLayout = "", savebtn = false }) {
    if (!Array.isArray(data)) return null;

    return (
        <>
            {data.map((item, index) => (
                <div className={layout} key={index}>
                    {(uniquqLayout === "ainMainSection" || uniquqLayout === "cultureSection") ?
                        <div className={`card border-0 mb-3 rounded-0 ${bgColor} ${bgColor === "bgDark" ? "text-white" : ""}`}>
                            <div className="row align-items-center">
                                <div className={`col-md-4 ${order === "inverse" ? "order-1" : "order-1 order-md-0"}`}>
                                    <Link href={item.href || "#"} className={`fw-bold text-decoration-none mb-2 ${bgColor} ${bgColor === "bgDark" ? "text-white" : "text-dark"} ${headingSize === "sm"
                                        ? "heading-sm"
                                        : headingSize === "md"
                                            ? "heading-md"
                                            : "heading-lg"
                                        }`}>
                                        {item.title}
                                    </Link>
                                    {item.summary !== "NA" && (
                                        <p className="news-summary">{item.summary}</p>
                                    )}
                                    {btn && <Link href={item.href || "#"} className="btn btn-outline-dark border-2 rounded-0">See More</Link>}
                                    {timeplace !== "NA" && (
                                        <div className="d-flex gap-3 align-items-center mb-2">
                                            <span className="text-muted news-details">{item.time}</span>|
                                            <span className="text-muted news-details">{item.place}</span>
                                        </div>
                                    )}
                                </div>
                                {item.image !== "NA" && (
                                    <div className={`col-md-8 ${order === "inverse" ? "order-0" : "order-0 order-md-1"}`}>
                                        <div className="mb-2 position-relative">
                                            <Image className="w-100 h-auto" src={item.image} alt={item.title || "News image"} width={300} height={imgHeight} />
                                            {item.videoLink && (
                                                <button className="btn btn-dark rounded-0 position-absolute bottom-0 start-0 aspect-sq py-0"><i className="bi bi-play-fill fs-1"></i></button>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        :
                        <div className={`card border-0 mb-3 rounded-0 ${bgColor} ${bgColor === "bgDark" ? "text-white" : "border-bottom"}`}>
                            {item.image !== "NA" && (
                                <div className="mb-2 position-relative">
                                    <Image className={`w-100 h-auto object-fit-cover ${imageLayout}`} src={item.image} alt={item.title || "News image"} width={300} height={imgHeight} />
                                    {item.videoLink && (
                                        <button className="btn btn-dark rounded-0 btn-sm position-absolute bottom-0 start-0 aspect-sq py-0"><i className="bi bi-play-fill fs-4"></i></button>
                                    )}
                                </div>
                            )}
                            <Link href={item.href} className={`fw-bold text-decoration-none ${bgColor === "bgDark" ? "text-white" : "text-dark"} mb-2 ${headingSize === "sm"
                                ? "heading-sm"
                                : headingSize === "md"
                                    ? "heading-md"
                                    : "heading-lg"
                                }`}>
                                {item.title}
                            </Link>
                            {item.summary !== "NA" && (
                                <p className="news-summary">{item.summary}</p>
                            )}
                            {savebtn === true ?
                                <div className="d-flex gap-4 align-items-center mb-2">
                                    <Link href={item.href} className="btn btn-sm btn-outline-dark rounded-circle w-fit"><i className="bi bi-bookmark small"></i></Link>
                                    <span className={`news-details ${bgColor === "bgDark" ? "text-white opacity-50" : "text-muted"}`}>{item.time}</span>
                                </div>
                                :
                                <div className="d-flex gap-3 align-items-center mb-2">
                                    <span className={`news-details ${bgColor === "bgDark" ? "text-white opacity-50" : "text-muted"}`}>{item.time}</span>|
                                    <span className={`news-details ${bgColor === "bgDark" ? "text-white opacity-50" : "text-muted"}`}>{item.place}</span>
                                </div>
                            }
                        </div>
                    }
                </div>
            ))}
        </>
    );
}
