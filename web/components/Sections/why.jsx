import CardStack from "../Items/cardStack";
import CardImage from "../Items/cardImage";

export default function Why({ product, cost, use, demo }) {
    const fast = "Stay ahead of the curve with technology designed to provide fast and reliable updates on critical developments. Our advanced imagery processing capabilities allow for image delivery in as little as 3 hours* after collection, enabling you to make informed decisions quickly."
    const effective = `Unlike traditional monitoring methods, ${product} offers a cost-effective solution for continuous surveillance, helping you save time and money. ${product}, like all our products, comes at an unmatched pricing model of only $${cost}, a fraction of the cost of dedicated tasking solutions.`
    return (
        <div className="w-full rounded-lg mb-12">
            <h1 className="text-center text-white text-4xl sm:text-6xl extrabold p-4 mb-8">Why {product}?</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <CardStack title={"Simple. Intuitive. Seamless."} content={use}/>
                <CardImage demo={demo}/>
                <CardStack title={"Fast, Reliable Updates"} content={fast} note={"*subject to Sentinel-1 collection scheduling"}/>
                <CardStack title={"Cost Effective"} content={effective}/>
            </div>
        </div>
    );
}
