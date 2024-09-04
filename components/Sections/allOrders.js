import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { Loader } from "@googlemaps/js-api-loader"
import Link from "next/link";

export default function AllOrders({watchboxes, query, sortOption, loading}){
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    const [map, setMap] = useState(null);
    const markers = useRef([]);

    const createInfoWindowContent = (item) => {
        const content = `
            <div style="color: black">
                <p><b>Watchbox ID: </b>${item.id}</p>
                <p><b>Product: </b>${item.prod}</p>
                <br/>
                <br/>
                <p>Click to open</p>
            </div>
        `;
        return content;
    };

    useEffect(() => {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          version: "weekly",
        });
      
        loader.load().then(async () => {
            const { google } = window;
            if (!google) {
                console.error("Google Maps API not loaded");
                return;
            }
      
            const mapInstance = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 47.6061, lng: -122.3328 }, // Seattle coordinates
                zoom: 3,
                streetViewControl: false
            });
      
            setMap(mapInstance);
        });
    }, []);

    useEffect(() => {
        if (!map || !watchboxes) return; // Check if map or watchboxes are not ready

        markers.current.forEach((marker) => {
            marker.setMap(null); // Remove marker from map
          });
          markers.current = [];

        
        const filteredWatchboxes = watchboxes.filter((watchbox) => {
            const { id, prod, region, status } = watchbox;
            const values = [id, prod, region, status].join(" ").toLowerCase();
            const words = query.toLowerCase().split(" ");
            return words.every((word) => values.includes(word));
        });

        filteredWatchboxes.forEach((item) => {
            const marker = new google.maps.Marker({
                position: { lat: item.cntr.lat, lng: item.cntr.lng },
                map: map,
            });
            markers.current.push(marker);
    
            marker.addListener('click', () => {
                viewWB(`/account/view/watchbox?id=${item.id}&product=${item.prod}&lat=${item.cntr.lat}&lng=${item.cntr.lng}&region=${item.region}${item.dims.lat ? `&height=${item.dims.lat}&width=${item.dims.lng}` : `&radius=${item.dims.rad}`}&interval=${item.interval}&start=${item.start}&stop=${item.end}&status=${item.status}&files=${encodeURIComponent(btoa(JSON.stringify(item.files)))}`);
            });

             // Create custom info window content
            const infoWindowContent = createInfoWindowContent(item);

            const infoWindow = new google.maps.InfoWindow({
                content: infoWindowContent,
            });

            marker.addListener("mouseover", () => {
                infoWindow.open(map, marker);
            });

            marker.addListener("mouseout", () => {
                infoWindow.close();
            });
        });
      }, [map, watchboxes, query]);

    useEffect(() => {
        if(watchboxes && watchboxes.length !== 0){
            setSuccess(true);
        }

    }, [watchboxes]);

    const filteredWatchboxes = watchboxes.filter(watchbox => {
        const { id, prod, region, status } = watchbox;
        const values = [id, prod, region, status].join(' ').toLowerCase();
        const words = query.toLowerCase().split(' ');
        return words.every(word => values.includes(word));
    }).sort((a, b) => {
        if (sortOption === "recent") {
            return b.id.localeCompare(a.id);
        } else if (sortOption === "prod") {
            return a.prod.localeCompare(b.prod);
        } else if (sortOption === "region") {
            return a.region.localeCompare(b.region);
        } else if (sortOption === "status") {
            return a.status.localeCompare(b.status);
        } else if (sortOption === "start") {
            return new Date(b.start) - new Date(a.start);
        } else if (sortOption === "end") {
            return new Date(b.end) - new Date(a.end);
        }
        return 0;
    });
    
    function handleOpenLinks(links) {
        links.forEach((link) => {
            window.open(link, '_blank');
        });
    }

    function viewWB(query) {
        window.open(query, '_blank')
    }

    return (
        <div className={`${loading ? 'animate-pulse' : ''} p-8 rounded-lg flex flex-col bg-wr_gray border border-accent w-100`}>
            <label htmlFor="dimensions" className="pt-8 block mb-2 text-xl text-white py-2 font-extrabold">Watchbox Locations</label>
            <div id="map" style={{ width: "100%", height: "70vh" }} className='mb-8'></div>
            <div className="text-white bold text-3xl mb-6">
                All Orders:
            </div>
        
            <div className="flex flex-col text-wr_text text-lg overflow-x-auto overflow-y-hidden">
                {success &&  (
                <table className="border-collapse border border-accent text-md">
                    <thead>
                        <tr>
                            <th className="border border-accent px-4 py-2">ID</th>
                            <th className="border border-accent px-4 py-2">Product</th>
                            <th className="border border-accent px-4 py-2">Center</th>
                            <th className="border border-accent px-4 py-2">Region</th>
                            <th className="border border-accent px-4 py-2">Dimensions</th>
                            <th className="border border-accent px-4 py-2">Interval</th>
                            <th className="border border-accent px-4 py-2">Start</th>
                            <th className="border border-accent px-4 py-2">Stop</th>
                            <th className="border border-accent px-4 py-2">Status</th>
                            <th className="border border-accent px-4 py-2">Files</th>
                        </tr>
                    </thead>
                    <tbody className={`text-white text-sm text-center`}>
                            {filteredWatchboxes.map((item) => (
                                <tr key={item.id} className="cursor-pointer" onClick={() => viewWB(`/account/view/watchbox?id=${item.id}&product=${item.prod}&lat=${item.cntr.lat}&lng=${item.cntr.lng}&region=${item.region}${item.dims.lat ? `&height=${item.dims.lat}&width=${item.dims.lng}` : `&radius=${item.dims.rad}`}&interval=${item.interval}&start=${item.start}&stop=${item.end}&status=${item.status}&files=${encodeURIComponent(btoa(JSON.stringify(item.files)))}`)}>
                                    <td className="border border-accent px-4 py-2">
                                        {item.id}
                                    </td>
                                    <td className="border border-accent px-4 py-2">
                                        <p className="whitespace-no-wrap">{item.prod}</p>
                                    </td>
                                    <td className="border border-accent px-4 py-2">
                                        ({item.cntr.lat.toFixed(5)}, {item.cntr.lng.toFixed(5)})
                                    </td>
                                    <td className="border border-accent px-4 py-2">
                                        {(item.region)}
                                    </td>
                                    <td className="border border-accent px-4 py-2">
                                        {item.dims.lat ? (
                                                `(${item.dims.lat}x${item.dims.lng}km)`
                                            ) : (
                                                `(${item.dims.rad}km²)`
                                            )
                                        }
                                    </td>
                                    <td className="border border-accent px-4 py-2">
                                        <p className="whitespace-no-wrap">{item.interval}</p>
                                    </td>
                                    <td className="border border-accent px-4 py-2">
                                        <p className="whitespace-no-wrap">{item.start}</p>
                                    </td>
                                    <td className="border border-accent px-4 py-2">
                                        <p className="whitespace-no-wrap">{item.end}</p>
                                    </td>
                                    <td className="border border-accent px-4 py-2">
                                        <p className="whitespace-no-wrap">{item.status}</p>
                                    </td>
                                    <td className="border border-accent px-4 py-2">
                                        {item.files && item.files.length > 0 && item.files.map((file, index) => {
                                            const parts = file.split('_');
                                            const datePart = parts[2].substring(0, 8);
                                            const timePart = parts[2].substring(9, 15);
                                            const formattedDate = `${datePart.substring(0, 4)}-${datePart.substring(4, 6)}-${datePart.substring(6, 8)}`;
                                            const formattedTime = `${timePart.substring(0, 2)}:${timePart.substring(2, 4)}:${timePart.substring(4, 6)}Z`;
                                            return (
                                                <div key={index} className="mb-2">
                                                    <button
                                                        className='bg-secondary text-black px-2 py-1 rounded-md'
                                                        onClick={() => handleOpenLinks([file])}
                                                    >
                                                        {formattedDate} {formattedTime}
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                )}
            </div>
            <div className={`text-white text-sm ${success ? 'hidden' : ''}`}>
                {!loading && (success ? "" : "No Data")}
            </div>
        </div>
    );
}