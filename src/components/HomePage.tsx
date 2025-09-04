import Button from "./Button";
import CookingTable from "./CookingTable";
import CropsTable from "./CropsTable";
import gourmetChef from '/Achievement_Gourmet_Chef.jpg';
// import polyculture from '/Achievement_Polyculture.jpg';

export default function HomePage() {
    return(
        <div className='my-16 px-16'>
            <div className='flex justify-between items-start'>
               <div className='flex gap-4 items-center'>
                    <img src={gourmetChef} alt="Gourmet Chef"/>
                    <div>
                        <h2 className='text-3xl'>Gourmet Chef</h2>
                        <span className='italic'>Cook every recipe</span>
                    </div>
                </div> 
                <div className='space-x-4'>
                    <Button showTable={'Cooking'}/>
                    <Button showTable={'Crops'} />
                </div>
            </div>
            
            <CookingTable />
            <CropsTable />
        </div>
    )
}