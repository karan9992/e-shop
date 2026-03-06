'use client'
import { Star, ShoppingCart, Plus } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

const FeaturedProducts = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapiserver.reactbd.org/api/products')
            .then(res => res.json())
             .then(resData => setData(resData.data)) // The API returns an array directly or under a key
            .catch((err) => console.log("Error ", err))
    }, [])

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">Featured Products</h1>
                <span className="text-sm font-bold text-neutral-900 cursor-pointer hover:underline">View All</span>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {data?.slice(0, 5).map((product) => (
                    <li key={product._id || product.id} className="list-none">
                        <ProductCard product={product} />
                    </li>
                ))}
            </div>


        </div>
    )
}

export default FeaturedProducts
