interface ButtonProps {
    showTable: string;
}

export default function Button({showTable}: ButtonProps) {
    return(
        <div className='border-yellow p-1 border inline-block hover:-translate-y-1 transition duration-150 transform'>
            <button className='bg-yellow px-8 py-1' >
                {showTable}
            </button> 
        </div>  
    )
}