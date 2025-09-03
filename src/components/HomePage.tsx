import logo from '/Main_Logo.png';
import cookingAchievement from '/public/Achievement_Gourmet_Chef.jpg';
import junimo from '/Junimo.gif'
export default function HomePage() {
    return(
        <div className='flex bg-lightgray/80 items-center '>
            <img src={logo} alt="logo" className='w-40'/>
            <img src={cookingAchievement} alt="Gourmet Chef Achievement" />
        </div>
    )
}