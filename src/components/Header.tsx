import logo from '/Main_Logo.png';
import star from '/Star.png';

export default function Header() {
    return(
        <div className='flex bg-[url(/Clouds.png)] items-center w-full py-6 px-16 justify-between bg-top shadow-md'>
            <img src={logo} alt="logo" className='w-40'/>
            <div className='flex space-x-4 items-center'>
                <span className='text-3xl font-bold text-yellow text-shadow-blue max-w-xl text-right'>Gourmet Chef &
                PolyCulture Achievements Tracker</span>
                <img src={star} alt="Achievement Star" className='w-10 h-10 hover:-translate-y-2 transition duration-150 transform'/>          
            </div>            
        </div>
    )
}