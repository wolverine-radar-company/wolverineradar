import CardWb from "../Items/cardWb";

export default function Overview({active, inactive, next, loading}){
    return (
        <div className={`grid grid-cols-1 gap-8 sm:grid-cols-3`}>
            <CardWb title={"Active Watchboxes:"} number={active} loading={loading} />
            <CardWb title={"Inactive Watchboxes:"} number={inactive} loading={loading} />
            {/* <CardWb title={"Next Expected Delivery:"} number={"June 5th, 2024"} detail={"WB #A100D7F93"} loading={loading} /> */}
        </div>
    );
}