import logo from '/Main_Logo.png';
import cookingAchievement from '/public/Achievement_Gourmet_Chef.jpg';

export default function HomePage() {
    return(
        <div className='flex '>
            <img src={logo} alt="logo" className='w-40'/>
            <img src={cookingAchievement} alt="Gourmet Chef Achievement" />
        </div>
    )
}