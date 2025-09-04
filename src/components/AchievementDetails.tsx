interface AchievementDetails {
    name: string, 
    about: string,
    image: string,
}

export default function AchievementDetails({name, about, image}: AchievementDetails) {
    return(
        <div className='flex gap-4 items-center'>
            <img src={image} alt={name}/>
            <div>
                <h2 className='text-3xl'>{name}
                </h2>
                <span className='italic'>{about}
                </span>
            </div>
        </div> 
        
    )
}