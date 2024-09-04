import Card from "@/components/Items/cardProd";
import allProducts from './catalog/products.json'; // Import products
import betaProducts from './catalog/products.beta.json'
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";


export default function Product() {
    const [products, setProducts] = useState(allProducts);
    const {user, error, isLoading} = useUser();
         
    // Filtered and sorted products based on search query and sort option
    const filteredProducts = new Set(products.map(product => product.name));
    


    return (
        <div>
            <div className="flex justify-center p-3 pt-10 mb-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <Card
                            key={product.name}
                            image={`${process.env.NEXT_PUBLIC_CDN_LINK}${product.imgSrc}`}
                            name={product.name}
                            tagline={product.tagline}
                            price={product.cost}
                            descriptors={product.descriptors}
                            link={product.prod_link}
                            notes={product.notes}
                            release={product.id}
                            bg={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
