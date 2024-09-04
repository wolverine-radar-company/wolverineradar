
// export default function CardImage({ demo }) {
//     return (
//         <div className="relative p-8 h-80">
//             <div className="absolute top-4 left-4 w-full h-full bg-white rounded-lg shadow-md"></div>
//             <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg shadow-lg p-8" style={{ backgroundImage: `url(${demo})` }}>

//             </div>
//         </div>
//     );
// };

import Image from "next/image";

export default function CardImage({ demo }) {
    return (
        <video playsInline autoPlay className="relative top-0 left-0 w-full h-full object-contain rounded-lg"
        src={demo}
        width={400}
        height={200}
        alt="Demo video"/>
    //     <Image
    //     className="relative top-0 left-0 w-full h-full object-contain rounded-lg"
    //     src={demo}
    //     width={400}
    //     height={200}
    //     alt="Demo video"
    // />
    );
}

