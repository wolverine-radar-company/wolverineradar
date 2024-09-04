import Image from 'next/image';

export default function ProdContainer({ imageUrl, card }) {
    return (
        <div className="rounded-lg flex flex-col lg:flex-row w-full h-full mb-12">
            <div className="flex lg:hidden justify-center items-center w-full">
                {card}
            </div>
            <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
                <div className="flex flex-col justify-center items-center h-full w-full">
                    <div className={`relative w-full h-full aspect-square`}>
                        <Image 
                            src={imageUrl} 
                            alt="Image" 
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                        <p className="absolute bottom-0 left-0 text-xs text-wr_text p-2">Contains modified Copernicus Sentinel data 2023</p>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex justify-center items-center w-full lg:w-1/2">
                <div className="transform lg:scale-150">
                    {card}
                </div>
            </div>
        </div>
    );
}
