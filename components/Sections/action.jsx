import Link from "next/link";

export default function Action({ product, link }) {
    return (
        <div className="bg-wr_gray rounded-lg p-4 mb-12">
            <h1 className="text-center text-white text-2xl sm:text-4xl extrabold p-4 mb-4">Ready to Try it Out?</h1>
            <div className="mb-4 flex flex-col items-center">
                <Link href={link} className="px-4 py-2 text-lg sm:text-2xl bg-white text-black rounded-lg sm:w-1/2 w-full block text-center">
                    Create a {product} Watchbox
                </Link>
            </div>
        </div>
    );
}
