'use client'
import { useState } from "react"
import FilterWrapper from "./FilterWrapper"

const categories = ['T-shirt', 'Shirt', 'Pant', 'Hoodies', 'Jeans']
const sizes = ['S', 'M', 'L', 'XL', 'XXL']
const gender = ["Men", "Women", "Unisex"]


const FilterSection = () => {

    const [filters, setFilters] = useState({})



    return (
        <aside className="w-[280px] flex flex-col p-4 gap-2 bg-white border-r min-h-screen mb-18">
            <h2 className="text-xl font-bold mb-4 px-1">Filters</h2>

            <FilterWrapper name="gender" label="Gender" propArray={gender} setFilters={setFilters} filters={filters} />

            <FilterWrapper name="sizes" label="Sizes" propArray={sizes} setFilters={setFilters} filters={filters} />

            <FilterWrapper name="categories" label="Categories" propArray={categories} setFilters={setFilters} filters={filters} />

            <FilterWrapper name="ratings" label="Customer Ratings" propArray={[5, 4, 3, 2, 1]} setFilters={setFilters} filters={filters}/>


            <div className="flex gap-3 ">

                <button className="mt-6 w-full py-2 bg-(--brand-primary) text-white rounded text-sm font-semibold hover:bg-red-500 transition-colors">
                    Apply Filters
                </button>
                <button className="mt-6 w-full py-2 bg-black text-white rounded text-sm font-semibold hover:bg-neutral-800 transition-colors" onClick={()=>setFilters({})}>
                    Clear Filters
                </button>
            </div>
        </aside>
    )
}

export default FilterSection
