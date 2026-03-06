import { useCart } from '@/store/useCart';
import { Minus, Plus, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({ product }) => {
    const { cart, updateQty, removeFromCart, addToCart } = useCart();

    return (
        <div className="group relative flex flex-col bg-gray-200 border border-neutral-100 rounded-xl p-2 shadow-sm hover:shadow-xl transition-all duration-500"
        >
            {/* 2. Image Section */}
            <div className="relative h-64 w-full bg-neutral-50 rounded-xl overflow-hidden mb-4">
                {product.image ? (
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-4  transition-transform duration-400" //group-hover:scale-110
                    />
                ) : (
                    <div className="h-full w-full animate-pulse bg-neutral-200" />
                )}

                {/* Sale Badge */}
                {/* {product.isNew && (
                                <span className="absolute top-3 left-3 bg-(--brand-primary) text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                                    New
                                </span>
                            )} */}
            </div>

            {/* 3. Product Info */}
            <div className="flex flex-col gap-1 flex-1">
                {/* <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                                {product.category}
                            </p> */}
                <h2 className="text-md font-bold text-neutral-800 line-clamp-1 transition-colors">
                    {product.title}
                </h2>

                {/* Ratings */}
                <div className="flex items-center gap-1 my-1">
                    <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                size={12}
                                className={i < product.rating ? "fill-amber-400 text-amber-400" : "fill-neutral-200 text-neutral-200"}
                                strokeWidth={1.5}
                            />
                        ))}
                    </div>
                    <span className="text-[10px] font-bold text-neutral-400">(4.5)</span>
                </div>

                {/* Price & Add Button */}
                <div className="flex items-center justify-between mt-auto pt-4">
                    <span className="text-xl font-black text-neutral-900">
                        ₹{product.price}
                    </span>

                </div>


                {cart.find((c) => c._id === product._id) ?
                    (<div className="flex items-center  p-1 justify-between px-1  ">
                        <button onClick={() => updateQty(product._id, 'dec')} className="w-16 h-9 rounded-xl bg-white  flex items-center justify-center shadow hover:bg-neutral-50 active:scale-90 transition text-green-500">
                            <Minus size={14} />
                        </button>



                        <span className="font-medium text-sm min-w-2 text-center">{cart.find((c) => c._id === product._id).qty || 1}</span>

                        <button onClick={() => updateQty(product._id, 'inc')} className="w-16 h-9  rounded-xl bg-white  flex items-center justify-center shadow hover:bg-neutral-50 active:scale-90 transition text-red-500">
                            <Plus size={14} />
                        </button>
                    </div>)

                    : <button onClick={() => addToCart(product)} className="bg-neutral-900 my-2 text-white p-2 rounded-xl hover:bg-(--brand-primary) active:scale-90 transition-all shadow-md"> Add to cart  </button>}


            </div>
        </div >
    )
}

export default ProductCard