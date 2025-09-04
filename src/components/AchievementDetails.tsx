interface AchievementDetails {
    name: string, 
    about: string,
    image: string,
}

export default function AchievementDetails({name, about, image}: AchievementDetails) {
    return(
        <div className='flex gap-4 items-center'>
            <img src={image} alt={name} className='w-10 lg:w-16'/>
            <div>
                <h2 className='lg:text-3xl text-base'>{name}
                </h2>
                <span className='italic text-xs lg:text-base'>{about}
                </span>
            </div>
        </div> 
        
    )
}