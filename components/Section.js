function Section({children , title}) {
    return (
        <div className='mb-20 px-12'>
            <h1 className='mb-1 italic text-3xl font-black font bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text'>{title}</h1>
            <div className=' h-2 w-2/6 rounded-full bg-gradient-to-r from-blue-500 to-green-400'>
                <span className='text-transparent'>Hola</span>
            </div>
            {children}
        </div>
    )
}

export default Section
