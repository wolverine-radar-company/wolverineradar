import Link from "next/link";
import { useState, useEffect } from "react";
import productData from '../../pages/products/catalog/products.beta.json'

export default function QuickOrder({ finances, loading }) {
    const [products, setProducts] = useState(productData); // Product data
    const [success, setSuccess] = useState(false)
    useEffect(() => {
        if(finances && finances.length !== 0 && !finances.error){
            setSuccess(true);
        }

    }, [finances]);

    return (
        <div className={`${loading ? 'animate-pulse' : ''} p-8 rounded-lg overflow-hidden flex flex-col bg-wr_gray border border-accent mt-8 w-100`}>
            <div className="text-white bold text-3xl mb-6">
                Quick Order:
            </div>
            <div className="flex flex-col text-wr_text text-lg">
            {finances && (
                Object.entries(finances).map(([product, amount]) => {
                const productData = products.find(prod => prod.name === product);
                if (productData && parseFloat(amount) > 0.00 || !productData) {
                    return (
                        <div key={product} className="w-full">
                            <Link href={`/products/purchase/${productData ? `beta/${product.toLowerCase()}` : product.toLowerCase()}`} target="_blank" className="px-4 py-2 text-md bg-white text-black rounded-lg w-full block text-center mb-4">
                                {product}
                            </Link>
                        </div>
                    );
                }
                return null; // Don't render if product not found or amount is not greater than 0.00
            })
            )}
            <div className={`text-white text-sm ${success ? 'hidden' : ''}`}>
                {!loading && (success ? "" : "No Data")}
            </div>
            </div>
        </div>
    );
}
