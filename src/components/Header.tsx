import logo from '/Main_Logo.png';
import star from '/Star.png';

export default function Header() {
    return(
        <div className='flex bg-[url(/Clouds.png)] items-center py-6 lg:px-16 px-4 justify-between bg-top shadow-md bg-cover bg-no-repeat bg-center"'>
            <img src={logo} alt="logo" className='lg:w-40 w-20'/>
            <div className='flex space-x-4 items-center'>
                <span className='lg:text-3xl font-bold text-yellow text-shadow-blue max-w-xs lg:max-w-xl text-right text-sm'>Gourmet Chef &
                Polyculture Achievements Tracker</span>
                <img src={star} alt="Achievement Star" className='w-10 h-10 hover:-translate-y-2 transition duration-150 transform'/>          
            </div>            
        </div>
    )
}