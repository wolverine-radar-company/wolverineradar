import Link from "next/link";
import { useState, useEffect } from "react";
import productData from '../../pages/products/catalog/products.beta.json'

export default function Balance({ finances, loading }) {
    const [products, setProducts] = useState(productData); // Product data
    const [success, setSuccess] = useState(false)
    useEffect(() => {
        if(finances &&  finances.length !== 0 && !finances.error){
            setSuccess(true);
        }

    }, [finances]);

    return (
        <div className={`${loading ? 'animate-pulse' : ''} p-8 rounded-lg overflow-hidden flex flex-col bg-wr_gray border border-accent mt-8 w-100`}>
            <div className="text-white bold text-3xl mb-6">
                Balance:
            </div>
            <div className="flex flex-col text-wr_text text-lg">
            {success && (
                <table className="min-w-full border-collapse border border-accent text-md">
                    <thead>
                        <tr>
                            <th className="border border-accent px-4 py-2">Product</th>
                            <th className="border border-accent px-4 py-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(finances).map(([product, amount]) => {
                            const productData = products.find(prod => prod.name === product);
                            if (productData && parseFloat(amount) > 0.00 || !productData) {
                                return (
                                    <tr key={product}>
                                        <td className="border border-accent px-4 py-2">{product}</td>
                                        <td className="border border-accent px-4 py-2">${parseFloat(amount).toFixed(2)}</td>
                                    </tr>
                                );
                            }
                            return null; // Don't render if product not found or amount is not greater than 0.00
                        })}
                    </tbody>
                </table>
            )}
            </div>
            <div className={`text-white text-sm ${success ? 'hidden' : ''}`}>
                {!loading && (success ? "" : "No Data")}
            </div>
            <div className="w-full">
                <Link href="mailto:info@wolverineradar.com?subject=Add Account Balance" className="px-4 py-2 text-md bg-white text-black rounded-lg w-full block text-center mt-6 mb-6">
                    Add Balance
                </Link>
            </div>
        </div>
    );
}