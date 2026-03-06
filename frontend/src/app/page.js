import FaqSection from "@/components/FaqSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  font-sans ">

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-[1260px] mt-8 mb-20 animate-in fade-in duration-700">
          <HeroSection />
          <FeaturedProducts />
        </div>
      </div>


      <section className="w-full py-20 bg-neutral-100">
        <div className="container mx-auto max-w-[1260px] px-4 md:px-6 ">
          <FaqSection />
        </div>
      </section>


    </div>
  );
}
