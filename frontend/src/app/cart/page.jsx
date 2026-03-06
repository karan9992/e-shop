'use client'
import Image from "next/image"
import { Trash2, Plus, Minus } from "lucide-react"
import {useCart} from "@/store/useCart"
import { useEffect } from "react"


const CartPage = () => {
    // Calculate totals
    const { cart, updateQty, removeFromCart, addToCart, clearCart } = useCart();


    const subtotal = cart.reduce((acc, item) => acc + (item.price * (item.qty || 1)), 0);
    const shipping = 40;
    const total = subtotal + shipping;



    return (
        <div className="min-h-screen bg-neutral-50 p-4 md:p-10">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>


            <div className="flex flex-col lg:flex-row gap-8 ">
                {/* 1. Left Side: Cart Items List */}
                <div className="flex-3 flex flex-col gap-4 bg-gray-100 p-8 rounded-xl">
                    {cart.map((item) => (
                        <div key={item._id} className="flex bg-white rounded-2xl p-2 shadow-sm border border-neutral-100 gap-4 group">
                            {/* Image */}
                            <div className="relative  shrink-0 overflow-hidden rounded">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    height={100}
                                    width={100}
                                    className="object-cover transition-transform duration-500"
                                />
                            </div>

                            {/* Details */}
                            <div className="flex-1 flex flex-col justify-between py-1">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg font-semibold text-neutral-800">{item.title}</h3>
                                        <button onClick={()=>removeFromCart(item._id)} className="text-neutral-400 hover:text-red-500 transition-colors">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                    <p className="text-sm text-neutral-500 uppercase tracking-tight">{item.brand} • {item.category}</p>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div className="text-xl font-bold text-neutral-900">₹{item.price}</div>

                                    {/* Quantity Controller */}
                                    <div className="flex items-center bg-neutral-100 rounded-full p-1 gap-3 px-1 border border-neutral-200">
                                        <button onClick={()=>updateQty(item._id,'dec')} className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow hover:bg-neutral-50 active:scale-90 transition text-green-500">
                                            <Minus size={14} />
                                        </button>
                                        <span className="font-medium text-sm min-w-2 text-center">{item.qty || 1}</span>
                                        <button  onClick={()=>updateQty(item._id,'inc')} className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow hover:bg-neutral-50 active:scale-90 transition text-red-500">
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="flex-1">
                    <div className="bg-white rounded-3xl p-6 shadow-md border border-neutral-100 sticky top-24">
                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                        <div className="space-y-4 border-b border-neutral-100 pb-6">
                            <div className="flex justify-between text-neutral-600">
                                <span>Subtotal</span>
                                <span>₹{subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-neutral-600">
                                <span>Shipping Fee</span>
                                <span>₹{shipping}</span>
                            </div>
                            <div className="flex justify-between text-green-600 text-sm">
                                <span>Discount</span>
                                <span>- ₹0</span>
                            </div>
                        </div>



                        <h2 className="text-xl font-semibold mt-2 mb-3">Promo Code</h2>

                        <div className=" border w-full mb-4 rounded border-neutral-400 flex">
                            <input type="text" className="px-2 p-1 w-full" placeholder="Enter Your Code" />
                            <button className="bg-(--brand-primary) text-white px-4 hover:bg-red-500 active:scale-95 transition" >Apply</button>

                        </div>
                        <div className="flex justify-between items-center py-6">
                            <span className="text-lg font-bold">Total Amount</span>
                            <span className="text-2xl font-black text-(--brand-primary)">₹{total.toLocaleString()}</span>
                        </div>

                        <button className="w-full bg-black text-white py-4 rounded-2xl font-bold hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-200 active:scale-[0.98]">
                            Proceed to Checkout
                        </button>



                        <div className="mt-4 text-center">
                            <p className="text-xs text-neutral-400">Secure payment powered by Razorpay</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;
