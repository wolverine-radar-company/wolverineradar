import { useState, useEffect } from "react";
import { handleOpenLinks } from "/utils/handleOpenLinks.js";

export default function CardWbDetails({id, product, lat, lng, radius, region, height, width, interval, start, stop, status, files, loading}){
    const [success, setSuccess] = useState(false);
    const [links, setLinks] = useState([]);
    
    useEffect(() => {
        if(id && lat && lng){
            setSuccess(true);
            setLinks(JSON.parse(atob(decodeURIComponent(files))))
        }
    }, [id, lat, lng, files]);

    return (
        <div className={`${loading ? 'animate-pulse' : ''} p-8 rounded-lg overflow-hidden flex flex-col bg-wr_gray border border-accent`}>
            <div className="text-white bold text-3xl mb-6">
                Watchbox details:
            </div>
        
            <div className="flex flex-col text-wr_text text-xl overflow-x-auto">
                {success &&  (
                <table className="min-w-full border-collapse border border-accent text-xl">
                    <tbody className={`text-white text-lg text-center`}>
                        <tr>
                            <th className="border border-accent px-4 py-2">ID</th>
                            <td className="border border-accent px-4 py-2">
                                {id}
                            </td>
                        </tr>    
                        <tr>
                            <th className="border border-accent px-4 py-2">Product</th>
                            <td className="border border-accent px-4 py-2">
                                <p className="whitespace-no-wrap">{product}</p>
                            </td>
                        </tr>    
                        <tr>
                            <th className="border border-accent px-4 py-2">Center</th>
                            <td className="border border-accent px-4 py-2">
                                ({lat}, {lng})
                            </td>
                        </tr>    
                        <tr>
                            <th className="border border-accent px-4 py-2">Region</th>
                            <td className="border border-accent px-4 py-2">
                                {region}
                            </td>
                        </tr>    
                        <tr>
                            <th className="border border-accent px-4 py-2">Dimensions</th>
                            <td className="border border-accent px-4 py-2">
                                {height && width ? (
                                        `(${height}x${width}km)`
                                    ) : (
                                        `(${radius}km²)`
                                    )
                                }
                            </td>
                            </tr>    
                        <tr>
                            <th className="border border-accent px-4 py-2">Interval</th>
                            <td className="border border-accent px-4 py-2">
                                <p className="whitespace-no-wrap">{interval}</p>
                            </td>
                        </tr>    
                        <tr>
                            <th className="border border-accent px-4 py-2">Start</th>
                            <td className="border border-accent px-4 py-2">
                                <p className="whitespace-no-wrap">{start}</p>
                            </td>
                        </tr>    
                        <tr>
                            <th className="border border-accent px-4 py-2">Stop</th>
                            <td className="border border-accent px-4 py-2">
                                <p className="whitespace-no-wrap">{stop}</p>
                            </td>
                        </tr>    
                        <tr>
                            <th className="border border-accent px-4 py-2">Status</th>
                            <td className="border border-accent px-4 py-2">
                                <p className="whitespace-no-wrap">{status}</p>
                            </td>
                            </tr>    
                        <tr>
                            <th className="border border-accent px-4 py-2">Files</th>
                            <td className="border border-accent px-4 py-2">
                                {links && links.length > 0 && links.map((file, index) => {
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