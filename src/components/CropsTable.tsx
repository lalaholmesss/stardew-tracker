import { useEffect, useState } from "react";
import crops from "../data/crops";
import type { Crops } from "../data/crops";

interface CropsTableProps {
    cropsData?: Crops[]
}

export default function CropsTable({cropsData = crops}: CropsTableProps) {
    const [completed, setCompleted] = useState<Record<string, boolean>>(() => {
        const saved = localStorage.getItem('is-completed');
        return saved? JSON.parse(saved) : {}; // if the obj exists, completed is the obj
    })

    const [cropsSold, setCropsSold] = useState<Record<string, number>>(() => {
        const saved = localStorage.getItem('item-amount');
        return saved? JSON.parse(saved) : {};
    })

    function checkedCompleted(cropId: number) {
        setCompleted((prev) => ({
            ...prev,
            [cropId]: !prev[cropId]
        }))
    }

    function getAmountSold(cropId: number, value:string) {
        setCropsSold((prev) => ({
            ...prev,
            [cropId]: parseInt(value)
        })) ;
    }
    
    useEffect(() => {
        localStorage.setItem('is-completed', JSON.stringify(completed));
    }, [completed]);

    useEffect(() => {
        localStorage.setItem('item-amount', JSON.stringify(cropsSold));
    }, [cropsSold]);

    return(
        <div>
            <table  className='bg-white border-separate border-spacing-1  border-lightblue border max-w-4xl mx-auto '>
                <thead>
                    <tr className='bg-green text-white lg:text-base text-xs'>
                        <th className='border-lightblue border py-2 lg:px-8 px-2  font-normal'>Name</th>
                        <th className='border-lightblue border py-2 px-8 font-normal'>Growth Time</th>
                        <th className='border-lightblue border py-2 lg:px-8 px-2 font-normal'>Amount Sold</th>
                        <th className='border-lightblue border py-2 lg:px-8 px-2 font-normal'>Sold 15</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cropsData.map((crop) => (
                            <tr key={crop.id} className="hover:bg-gray-50">
                                <td  className="border border-gray-300 lg:px-4 px-1 py-2">
                                    <div className="flex items-center gap-3">
                                        <img src={crop.img} alt={crop.name}  className="lg:w-12 lg:h-12 w-8 object-contain"/>
                                        <span className="lg:text-base text-xs text-darkblue">{crop.name}</span>
                                    </div>
                                </td>

                                <td  className="border text-center border-gray-300 px-4 py-2">
                                    <span className='lg:text-base text-xs'>{crop.growthTime} days</span>
                                </td>

                                <td  className="border border-gray-300 px-4 py-2 text-center">
                                    <input type="number" min={0} max={999} className="border border-gray-400 pl-2 focus:outline-yellow lg:text-base text-xs " onChange={(e) => 
                                        {   e.preventDefault(); 
                                            getAmountSold(crop.id, e.target.value);
                                            console.log(typeof(e.target.value))
                                        }} value={cropsSold[crop.id] ?? crop.amountSold ?? 0} aria-label="Amount of crops sold"/>
                                </td>

                                <td  className="border border-gray-300 px-4 py-2 text-center">
                                    <input type="checkbox" name="Completed" className="w-4 h-4"
                                    onChange={() => checkedCompleted(crop.id)}
                                    checked={completed[crop.id] ?? crop.isCompleted ?? false}
                                    aria-label="Mark crops completed if the amount is more or equal to 15"/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}