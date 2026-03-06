import { useState } from "react";
import { ChevronDown } from "lucide-react" // npm i lucide-react or use a SVG

const FilterWrapper = ({ name, label, propArray, setFilters, filters }) => {


    const [filterOpen, setFilterOpen] = useState("")
    const isOpen = filterOpen === name;

    const toggle = (name) => setFilterOpen(filterOpen === name ? "" : name)

    const handleFilter = (e) => {
        console.log(e.target.name, e.target.checked)
        const { name, checked } = e.target;

        // Use the functional update to ensure you have the latest state
        setFilters((prev) => ({
            ...prev,
            [name]: checked
        }));
        console.log(filters);
    }

    return (
        <div className="flex flex-col mb-1">
            <button
                onClick={() => toggle(name)}
                className="flex items-center justify-between w-full bg-neutral-50 hover:bg-neutral-100 px-4 py-2.5 rounded-xl text-neutral-700 font-medium transition-all"
            >
                {label}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <div className={`
                    grid transition-all duration-300 ease-in-out
                    ${isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 pointer-events-none"}
                `}>
                <div className="overflow-hidden">
                    <ul className="flex flex-col gap-2 p-3 bg-white border border-neutral-100 rounded-xl shadow-sm">
                        {propArray.map((s) => (
                            <li key={s} className="flex items-center gap-3">
                                <input type="checkbox" name={`${label}-${s}`} checked={!!filters[`${label}-${s}`]}
                                    onChange={handleFilter}
                                    id={s} className="peer appearance-none h-4 w-4 border-2 border-neutral-300 rounded-md checked:bg-(--brand-primary) checked:border-(--brand-primary) transition-all " />
                                <label htmlFor={s} className="text-sm text-neutral-600">{s}</label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FilterWrapper