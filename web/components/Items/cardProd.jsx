import Image from "next/image";
import Link from "next/link";

export default function CardProd({ image, name, tagline, price, descriptors, link, notes, id, bg=true }) {
    return (
        <div className={`p-4 rounded-lg w-80 h-114 overflow-hidden flex flex-col justify-between ${bg ? 'bg-wr_gray' : '' }`}>
            <div>
                <div className="mb-4 flex items-center">
                    <div className="h-15 w-15">
                        <Image src={image} alt={name} height={20} width={20} className="w-15 h-15 rounded-full mr-2 object-cover" />
                    </div>
                    <span className="text-2xl font-semibold text-white">{name}</span>
                </div>
                <div className="mb-2 text-wr_text text-md">
                    {tagline}
                </div>
                <div className="mb-2 text-md font-bold text-white">
                    {"$"}{price}{"/km²"}
                </div>
                <ul className="mb-4 text-xs list-disc list-inside text-wr_text h-64 overflow-y-auto">
                    {descriptors.map((feature, index) => (
                        <li key={index} className="mb-1">{feature}</li>
                    ))}
                    {descriptors.length === 0 && (
                        <div>
                            <li key={"beta"} className="mb-1">{"THIS PRODUCT IS CURRENTLY IN DEVELOPEMENT"}</li>
                            <li key={"check"} className="mb-1">{"PLEASE CHECK BACK SOON FOR MORE INFORMATION"}</li>
                        </div>
                    )}
                </ul>
            </div>
            <div>
                <div className="mb-4">
                    {bg && descriptors.length > 0 ? (
                        <Link href={`/products/${name.toLowerCase()}`} className="px-4 py-2 text-md bg-white text-black rounded-lg w-full block text-center">
                            Expore {name}
                        </Link>
                    ) : (
                        <Link href={link} className="px-4 py-2 text-md bg-white text-black rounded-lg w-full block text-center">
                            Create a {name} Watchbox
                        </Link>
                    )}
                </div>
                <div className="text-xs text-wr_text">
                    {notes}
                </div>
                <p className="hidden">{id}</p>
            </div>
        </div>
    );
}
