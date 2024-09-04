import { useState, useEffect } from "react";

export default function Recents({watchboxes, loading}){
    const [success, setSuccess] = useState(false)
    useEffect(() => {
        if(watchboxes && watchboxes.length !== 0){
            setSuccess(true);
        }
    }, [watchboxes]);

    return (
        <div className={`${loading ? 'animate-pulse' : ''} p-8 rounded-lg overflow-hidden flex flex-col bg-wr_gray border border-accent mt-8`}>
            <div className="text-white bold text-3xl mb-6">
                Latest Activity:
            </div>
        
            <div className="flex flex-col text-wr_text text-xl overflow-x-auto">
                {success &&  (
                <table className="min-w-full border-collapse border border-accent text-xl">
                    <thead>
                        <tr>
                            <th className="border border-accent px-4 py-2">ID</th>
                            <th className="border border-accent px-4 py-2">Product</th>
                            <th className="border border-accent px-4 py-2">Region</th>
                        </tr>
                    </thead>
                    <tbody className={`text-white text-lg text-center`}>
                        
                            {watchboxes.reverse().slice(0,5).map((item) => (
                                <tr key={item.id}>
                                    <td className="border border-accent px-4 py-2">
                                        {item.id}
                                    </td>
                                    <td className="border border-accent px-4 py-2">
                                        <p className="whitespace-no-wrap">{item.prod}</p>
                                    </td>
                                    <td className="border border-accent px-4 py-2">
                                        {(item.region)}
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