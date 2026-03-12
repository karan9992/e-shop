'use client'
import { useCart } from "@/store/useCart";
import { LucideShoppingCart, Menu, Search, User, ChevronDown, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
    const router = useRouter()
    const { cart } = useCart();
    const totalItems = cart.reduce((acc, item) => acc + (item.qty || 1), 0);

    return (
        <nav className="sticky top-0 z-50 flex flex-col bg-white/80 backdrop-blur-md border-b border-neutral-100">
            {/* --- Upper Header --- */}
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 sm:px-6 py-3">

                {/* 1. Logo */}
                <Link href="/" className="text-2xl font-black tracking-tighter text-neutral-900 hover:scale-105 transition-transform">
                    e-shop<span className="text-[#FE624C]">.</span>
                </Link>

                {/* 2. Search Bar - Polished */}
                <div className="hidden md:flex flex-1 max-w-md mx-10">
                    <div className="relative w-full group">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-neutral-100 border border-transparent rounded-2xl py-2 px-5 text-sm outline-none focus:bg-white focus:border-[#FE624C]/30 focus:ring-4 focus:ring-[#FE624C]/5 transition-all"
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-[#FE624C] transition-colors" />
                    </div>
                </div>

                {/* 3. Action Icons */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Cart with Preview Dropdown */}
                    <div className="relative group">
                        <button 
                            onClick={() => router.push('/cart')}
                            className="p-2.5 hover:bg-neutral-100 rounded-full transition-all relative active:scale-90"
                        >
                            <ShoppingBag className="w-6 h-6 text-neutral-700" strokeWidth={1.5} />
                            {totalItems > 0 && (
                                <span className="absolute top-1 right-1 bg-[#FE624C] text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white animate-in zoom-in">
                                    {totalItems}
                                </span>
                            )}
                        </button>

                        {/* Cart Dropdown Preview */}
                        <div className="absolute top-full right-0 mt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                            <div className="bg-white border border-neutral-100 rounded-2xl shadow-xl w-72 p-4">
                                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">Cart Summary</h3>
                                <div className="max-h-60 overflow-y-auto custom-scrollbar">
                                    {cart.length > 0 ? (
                                        cart.map((item) => (
                                            <div key={item.id} className="flex items-center justify-between py-2 border-b border-neutral-50 last:border-0">
                                                <span className="text-sm font-medium text-neutral-700 truncate mr-4">{item.title}</span>
                                                <span className="text-xs font-bold bg-neutral-100 px-2 py-1 rounded text-neutral-500">x{item.qty}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-sm text-neutral-400 py-4 text-center">Your cart is empty</p>
                                    )}
                                </div>
                                <button onClick={()=>router.push('/cart')} className="mt-4 w-full py-3 bg-[#FE624C] text-white text-xs font-bold rounded-xl hover:shadow-lg hover:shadow-[#FE624C]/30 transition-all active:scale-95">
                                    Checkout Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Clerk Auth Section */}
                   <div className="flex items-center gap-2 border-l border-neutral-300 pl-4">
                        <Show when="signed-out">
                            <SignInButton mode="modal">
                                <button className="text-sm font-bold text-neutral-600 hover:text-black transition">Log In</button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <button className="bg-[#FE624C] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#e0523d] transition-all shadow-md shadow-[#FE624C]/20">
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </Show>

                        <Show when="signed-in">
                            <div className="flex items-center gap-3">
                                <div className="hidden lg:flex flex-col text-right">
                                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none">Member</span>
                                    <span className="text-sm font-bold text-neutral-800">My Account</span>
                                </div>
                                <UserButton afterSignOutUrl="/" />
                            </div>
                        </Show>
                    </div>
                </div>
            </div>

            {/* --- Lower Category Bar --- */}
            <div className="bg-[#FE624C] text-white">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
                    <div className="flex items-center gap-6 text-sm font-bold">
                        <button className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg hover:bg-white/20 transition">
                            <Menu className="w-4 h-4" /> Categories
                        </button>
                        <nav className="hidden md:flex gap-6">
                            <Link href="/products" className="hover:text-black/70 transition">Products</Link>
                            <Link href="/sale" className="hover:text-black/70 transition text-yellow-200">Flash Sale</Link>
                            <Link href="/contact" className="hover:text-black/70 transition">Support</Link>
                        </nav>
                    </div>
                    <div className="hidden sm:block text-[11px] font-black uppercase tracking-tighter opacity-80">
                        Free shipping on orders over ₹500
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
