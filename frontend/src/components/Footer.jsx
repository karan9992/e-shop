import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-neutral-100 pt-16 pb-8">
            <div className="max-w-[1260px] mx-auto px-6">

                {/* 1. Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="text-3xl font-black tracking-tighter text-neutral-900">
                            e<span className="text-[#FE624C]">-</span>shop
                        </Link>
                        <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                            Elevate your lifestyle with our curated collection of premium goods.
                            Quality you can trust, delivered to your doorstep.
                        </p>
                        <p className="text-neutral-400 text-xs font-medium">
                    © {currentYear} <span className="font-bold text-neutral-900">e-shop</span>. All rights reserved.
                </p> 
                        <div className="flex gap-4">
                            <SocialIcon Icon={Facebook} />
                            <SocialIcon Icon={Instagram} />
                            <SocialIcon Icon={Twitter} />
                            <SocialIcon Icon={Youtube} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <FooterColumn title="Shopping">
                        <FooterLink href="/products">All Products</FooterLink>
                        <FooterLink href="/best-sellers">Best Sellers</FooterLink>
                        <FooterLink href="/new-arrivals">New Arrivals</FooterLink>
                        <FooterLink href="/sale">Limited Sale</FooterLink>
                    </FooterColumn>

                    {/* Customer Support */}
                    <FooterColumn title="Support">
                        <FooterLink href="/contact">Contact Us</FooterLink>
                        <FooterLink href="/shipping">Shipping Policy</FooterLink>
                        <FooterLink href="/returns">Returns & Exchanges</FooterLink>
                        <FooterLink href="/faq">FAQs</FooterLink>
                    </FooterColumn>

                    {/* Contact Info */}
                    <FooterColumn title="Get in Touch">
                        <div className="flex flex-col gap-4">
                            <ContactItem Icon={MapPin} text="123 Commerce St, New York, NY" />
                            <ContactItem Icon={Phone} text="+1 (555) 000-1234" />
                            <ContactItem Icon={Mail} text="support@e-shop.com" />
                        </div>
                    </FooterColumn>
                </div>
            </div>

            {/* 2. Newsletter & Bottom Bar */}
            <div className=" px-6 border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-neutral-400 text-xs font-medium">
                    © {currentYear} <span className="font-bold text-neutral-900">e-shop</span>. All rights reserved.
                </p>               
            </div>

        </footer >
    );
};

// --- Helper Components for Clean Code ---

const FooterColumn = ({ title, children }) => (
    <div className="flex flex-col gap-6">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-900">{title}</h3>
        <div className="flex flex-col gap-3">{children}</div>
    </div>
);

const FooterLink = ({ href, children }) => (
    <Link href={href} className="text-sm text-neutral-500 hover:text-[#FE624C] hover:translate-x-1 transition-all duration-300">
        {children}
    </Link>
);

const SocialIcon = ({ Icon }) => (
    <button className="p-2 rounded-full bg-neutral-50 text-neutral-600 hover:bg-[#FE624C] hover:text-white transition-all active:scale-90">
        <Icon size={18} strokeWidth={1.5} />
    </button>
);

const ContactItem = ({ Icon, text }) => (
    <div className="flex items-start gap-3 text-sm text-neutral-500">
        <Icon size={18} className="text-[#FE624C] shrink-0" strokeWidth={1.5} />
        <span>{text}</span>
    </div>
);

export default Footer;
