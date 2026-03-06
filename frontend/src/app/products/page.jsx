'use client'
import FilterSection from "@/components/FilterSection"
import ProductCard from "@/components/ProductCard"
import { useCart } from "@/store/useCart"
import { useEffect, useState } from "react"

const Products = () => {
    const [data, setData] = useState([])
    const { cart, updateQty, removeFromCart, addToCart, clearCart } = useCart();


    useEffect(() => {
        console.log(cart);

    }, [cart])

    useEffect(() => {
        fetch('https://fakestoreapiserver.reactbd.org/api/products')
            .then(res => res.json())
            .then(resData => setData(resData.data)) // The API returns an array directly or under a key
            .catch((err) => console.log("Error ", err))
    }, [])
    return (
        <div className=" flex items-start w-full ">
            <div className="sticky top-2 h-screen overflow-y-auto scrollbar-hide ">
                <FilterSection />
            </div>
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">Featured Products</h1>
                    <span className="text-sm font-bold text-neutral-900 cursor-pointer hover:underline">View All</span>
                </div> */}


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data?.map((product) => (
                        <li key={product._id || product.id} className="list-none">
                            <ProductCard product={product} />
                        </li>
                    ))}
                </div>


            </div>
        </div>

    )
}

export default Products