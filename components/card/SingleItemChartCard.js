import ArrowIconLoader from "../common/ArrowIconLoader";

export default function SingleItemChartCard({ title, value, fetching }) {
    return (
        <div className="relative">
            <h4 className="text-[#ccc] font-bold text-lg select-none">
                {title}
            </h4>
            <p className="text-center my-16 text-[#ee2970] text-9xl font-extrabold">
                {fetching && <ArrowIconLoader />}
                {value}
            </p>
        </div>
    );
}
