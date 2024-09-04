import { MagnifyingGlassCircleIcon, PaintBrushIcon, ServerStackIcon, MapPinIcon, BuildingOffice2Icon, TruckIcon } from "@heroicons/react/24/outline";
import { PiTree } from "react-icons/pi";
import { GiStoneStack, GiCrane } from "react-icons/gi";
import { TbTexture } from "react-icons/tb";
const iconComponents = {
    MagnifyingGlassCircleIcon: MagnifyingGlassCircleIcon,
    PaintBrushIcon: PaintBrushIcon,
    ServerStackIcon: ServerStackIcon,
    MapPinIcon: MapPinIcon,
    BuildingOffice2Icon: BuildingOffice2Icon,
    TruckIcon: TruckIcon,
    PiTree: PiTree,
    GiStoneStack: GiStoneStack,
    GiCrane: GiCrane,
    TbTexture: TbTexture,
};

export default function Features({ features, icons, descriptions }) {
    return (
        <div className="bg-wr_gray rounded-lg p-4 mb-12">
            <h1 className="text-center text-white text-4xl sm:text-6xl extrabold p-4 mb-4">Features</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((feature, index) => {
                    const IconComponent = iconComponents[icons[index]];
                    return (
                        <div key={index} className="flex flex-col items-center mb-8">
                            {IconComponent && <IconComponent className={`w-20 h-20 text-wr_yellow mb-4`} />}
                            <h2 className="text-wr_text bold text-xl mt-2">{feature}</h2>
                            {/* <p className="text-wr_text text-sm text-center mt-2">{descriptions[index]}</p> */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
