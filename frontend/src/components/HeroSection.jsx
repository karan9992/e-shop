import Image from 'next/image'
import headPhoneOmg from '../../public/pngwing.com.png'
import { LucideHeadphones, Repeat, ShieldCheck, Van } from 'lucide-react'
const heroElements = [{
  title: 'Responsive',
  description: 'Customer service available 24x7',
  icon: 'LucideHeadphones'
},
{
  title: 'Secure',
  description: 'Certified Marketplace',
  icon: 'ShieldCheck'
}, {
  title: 'Shipping',
  description: 'Free Fast and Reliable',
  icon: 'Van'
}, {
  title: 'Transparent',
  description: 'Hassle free return policy',
  icon: 'Repeat'
},

]

const IconMap = {
  LucideHeadphones: LucideHeadphones,
  ShieldCheck: ShieldCheck,
  Van: Van,     
  Repeat: Repeat 
};


const HeroSection = () => {
  return (<>
    <div className="relative flex h-[70vh] w-full overflow-hidden rounded-3xl border-b border-neutral-300 bg-linear-to-b from-neutral-100 to-gray-300 shadow-neutral-400 shadow-xl">


      <div className="flex flex-1 flex-col justify-center p-12 lg:p-20">

        <h1 className="text-5xl font-black text-neutral-900 lg:text-7xl">
          Premium <br /> Headphones
        </h1>
        <p className="mt-6 max-w-md text-lg text-neutral-600">
          Experience studio-quality sound with our latest noise-cancelling technology.
        </p>
        <button className="mt-10 w-fit rounded-xl bg-(--brand-primary) px-8 py-4 font-bold text-white  transition-all hover:bg-neutral-800 active:scale-95">
          Shop Now
        </button>
      </div>


      <div className="relative flex-1">
        <Image
          src={headPhoneOmg}
          alt="Headphones"
          fill
          priority // Ensures the hero image loads fast
          className="object-contain p-8" // Use 'object-cover' if you want it to bleed to edges
        />
      </div>

    </div>

    <div className='flex mt-10'>



      {
        heroElements.map((i) => {
          const IconComponent = IconMap[i.icon];
          return (<div key={i.title} className="flex-1  flex items-center gap-4 justify-center cursor-pointer hover:bg-gray-100 transition ease-in-out p-4 rounded-xl">

            <div className=""><IconComponent width={40} height={40} strokeWidth={1} className='text-neutral-700 ' /></div>
            <div className="flex flex-col">
              <span className='text-xl '>{i.title}</span>
              <span className='text-neutral-500 text-sm'>{i.description}</span>
            </div>
          </div>
          )
        })
      }



    </div>
  </>


  )
}

export default HeroSection