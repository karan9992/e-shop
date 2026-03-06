'use client'
import { useCart } from "@/store/useCart";
import { LucideShoppingCart, Menu, Search, User, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
    const router = useRouter()
    const { cart, updateQty, removeFromCart, addToCart } = useCart();
    const totalItems = cart.length

    useEffect(() => {
        console.log(cart);
        console.log(cart.length)
    }, [cart])





    return (
        <nav className="flex flex-col bg-white shadow-sm ">
            {/* --- Upper Header --- */}
            <div className="max-w-[1260px] mx-auto w-full flex items-center justify-between px-6 py-4">

                {/* 1. Logo */}
                <Link href="/" className="text-3xl font-black tracking-tighter text-neutral-900 hover:opacity-80 transition">
                    e-shop<span className="text-[#FE624C]">.</span>
                </Link>


                <div className="hidden md:flex flex-1 max-w-xl mx-8">
                    <div className="relative w-full group">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-neutral-100 border-none rounded-xl py-2.5 pl-4 pr-12 text-sm outline-none focus:ring-2 focus:ring-[#FE624C]/20 transition-all"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-500 hover:text-[#FE624C] transition">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* 3. Icons & Account Section */}
                <div className="flex items-center gap-4">
                    {/* Cart with Divider */}
                    <div className="flex items-center border-r border-neutral-200 pr-4 mr-2 relative group">
                        {/* Trigger Button */}
                        <button className="relative p-2 hover:bg-neutral-100 rounded-full transition active:scale-95" onClick={() => router.push('/cart')}>
                            <LucideShoppingCart className="w-6 h-6 text-neutral-700" strokeWidth={1.5} />
                            <span className="absolute top-1 -right-1 bg-[#FE624C] text-white text-[14px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white">
                                {totalItems}
                            </span>
                        </button>


                        <div className="absolute top-full  pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                            <div className="bg-white border border-neutral-100 rounded-xl shadow-2xl w-64 p-3 flex flex-col gap-2">
                                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider px-1">Recent Items</h3>

                                {
                                    cart.map((c) => (<div className="p-2 hover:bg-neutral-50 rounded-lg cursor-pointer border-b border-neutral-50 flex justify-between ">
                                        <div className="">{c.title} </div>
                                        <div className="text-right text-zinc-600 text-sm">{c.qty}</div>
                                    </div>))
                                }


                                <button className="mt-2 w-full py-2 bg-black text-white text-xs font-bold rounded-lg hover:bg-neutral-800">
                                    Checkout Now
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* User Account */}
                    <button className="flex items-center gap-3 hover:bg-neutral-50 p-1 rounded-xl transition group text-left">
                        <div className="bg-neutral-100 p-2 rounded-full group-hover:bg-neutral-200 transition">
                            <User className="w-6 h-6 text-neutral-700" strokeWidth={1.5} />
                        </div>
                        <div className="hidden lg:flex flex-col leading-tight">
                            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Hello, Sign in</span>
                            <span className="text-sm font-bold text-neutral-800 flex items-center gap-1">
                                My Account <ChevronDown className="w-3 h-3" />
                            </span>
                        </div>
                    </button>
                </div>
            </div>

            {/* --- Lower Category Bar --- */}
            <div className="bg-[#FE624C] text-white overflow-x-auto whitespace-nowrap scrollbar-hide">
                <div className="max-w-[1260px] mx-auto flex items-center justify-between px-6 py-2.5 text-sm font-bold">

                    {/* Left Nav */}
                    <div className="flex items-center gap-8">
                        <button className="flex items-center gap-2 bg-black/10 px-4 py-1.5 rounded-lg hover:bg-black/20 transition">
                            <Menu className="w-4 h-4" /> All Categories
                        </button>
                        <Link href="/products" className="hover:text-black transition">Products</Link>
                        <Link href="/blog" className="hover:text-black transition">Blog</Link>
                        <Link href="/contact" className="hover:text-black transition">Contact</Link>
                    </div>

                    {/* Right Trending Nav */}
                    <div className="hidden xl:flex items-center gap-8 opacity-90">
                        <Link href="/sale" className="hover:text-black transition">Limited Sale</Link>
                        <Link href="/best-seller" className="hover:text-black transition">Best Seller</Link>
                        <Link href="/new" className="hover:text-black transition">New Arrival</Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
