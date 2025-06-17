export default function SectionHeading({ title = "", bgColor = "" }) {
  return (
    <h3 className={`border-top border-3 fw-bolder heading-sm text-uppercase pt-2 mb-4 ${bgColor === "bgDark" ? "text-white border-white" : "border-dark"}`}>{title} <i className="bi bi-caret-right"></i></h3>
  )
}