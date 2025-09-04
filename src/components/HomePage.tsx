import AchievementDetails from "./AchievementDetails";
import CookingTable from "./CookingTable";
import CropsTable from "./CropsTable";
import gourmetChef from '/Achievement_Gourmet_Chef.jpg';
import polyculture from '/Achievement_Polyculture.jpg';
import { useRef } from "react";

export default function HomePage() {
    const refCropsTable = useRef<null | HTMLDivElement>(null); 
    const refCookingTable = useRef<null | HTMLDivElement>(null);

    function scrollToCropsTable() {
        refCropsTable.current?.scrollIntoView({behavior: 'smooth'});
    }
    function scrollToCookingTable() {
        refCookingTable.current?.scrollIntoView({behavior: 'smooth'});
    }


    return(
        <div className='px-16 w-full'>

            <div ref={refCookingTable} className='pt-16 '>
                <div className='flex justify-between items-start'>
                    <AchievementDetails name='Gourmet Chef' about='Cook every recipe' image={gourmetChef} />
                    <div className='border-yellow p-1 border inline-block hover:-translate-y-1 transition duration-150 transform'>
                        <button className='bg-yellow px-8 py-1' onClick={scrollToCropsTable}>
                            Show Crops Table
                        </button> 
                    </div>
                </div>

                <div className='mt-10 border-b border-yellow w-full pb-20' >
                    <CookingTable />
                </div>
            </div>
            
            <div ref={refCropsTable} className="pt-16">
                <div className='flex justify-between items-start'>
                    <AchievementDetails name='Polyculture' about='Ship 15 of each crop' image={polyculture} />
                    <div className='border-yellow p-1 border inline-block hover:-translate-y-1 transition duration-150 transform'>
                        <button className='bg-yellow px-8 py-1' onClick={scrollToCookingTable}>
                            Show Cooking Recipes
                        </button> 
                    </div>
                </div>

                <div className='mb-16 mt-10'>
                    <CropsTable />
                </div>
            </div>
            
        </div>
    )
}