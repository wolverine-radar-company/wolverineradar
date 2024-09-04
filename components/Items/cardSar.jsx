import Image from "next/image";
import Link from "next/link";

export default function CardSAR() {
    return (
        <div className={`p-4 sm:p-8 relative rounded-lg flex flex-col justify-between`}>
            <div>
                <h1 className="mb-8 sm:mb-16 text-4xl sm:text-6xl text-left font-bold text-white mt-10">{"Surveyed by Satellites"}</h1>
                <p className="mb-8 sm:mb-16 text-md sm:text-4xl text-left font-semibold text-wr_text">{"Radar satellites are constantly monitoring every square kilometer of Earth's surface to create a better understanding of the intricacies of this dynamic world that we all call home. These satellites use a technology called Synthetic Aperture Radar (SAR) to deliver insights that help decision makers better understand and adapt as the future unfolds before their eyes."}</p>
                <div className="text-white text-left text-sm sm:text-3xl font-semibold mb-20">
                    <div className="grid grid-cols-2 gap-4">
                        <p>Collections every:</p>
                        <p className="text-wr_yellow">12 days*</p>
                        <p>Scenes:</p>
                        <p className="text-wr_yellow">1.72B+</p>
                        <p>Data going back to:</p>
                        <p className="text-wr_yellow">2014</p>
                    </div>
                </div>
            </div>
            <p className="absolute bottom-0 right-0 text-xs text-wr_text">{"*Based on Sentinel 1 constellation design specifications"}</p>
        </div>
    );
}
