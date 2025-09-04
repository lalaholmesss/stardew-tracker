import crops from "../data/crops";
import type { Crops } from "../data/crops";

interface CropsTableProps {
    cropsData?: Crops[]
}

export default function CropsTable({cropsData = crops}: CropsTableProps) {

    return(
        <div>
            <table  className='bg-white border-separate border-spacing-1  border-lightblue border max-w-4xl mx-auto '>
                <thead>
                    <tr className='bg-green text-white text-base'>
                        <th className='border-lightblue border py-2 px-8 font-normal'>Name</th>
                        <th className='border-lightblue border py-2 px-8 font-normal'>Growth Time</th>
                        <th className='border-lightblue border py-2 px-8 font-normal'>Amount Sold</th>
                        <th className='border-lightblue border py-2 px-8 font-normal'>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cropsData.map((crop) => (
                            <tr key={crop.id} className="hover:bg-gray-50">
                                <td  className="border border-gray-300 px-4 py-2">
                                    <div className="flex items-center gap-3">
                                        <img src={crop.img} alt={crop.name}  className="w-12 h-12 object-contain"/>
                                        <span className="text-base text-darkblue">{crop.name}</span>
                                    </div>
                                </td>
                                <td  className="border text-center border-gray-300 px-4 py-2">
                                    <span className='text-base'>{crop.growthTime} days</span>
                                </td>
                                <td  className="border border-gray-300 px-4 py-2 text-center">
                                    <input type="number" min={0} max={15} className="border border-gray-400 max-w-16 px-2"/>
                                </td>
                                <td  className="border border-gray-300 px-4 py-2 text-center">
                                    <input type="checkbox" name="COmpleted" className="w-4 h-4"/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}