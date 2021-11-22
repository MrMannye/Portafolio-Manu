function Section({children , title, id}) {
    return (
        // Agregamos un padding top a cada seccion para que el scroll link apunte al lugar adecuado
        <div className='px-12 w-full pt-[7rem] pb-16' id={id}>
            <h1 className='mb-1 italic text-3xl font-black font bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text'>{title}</h1>
            <div className=' h-2 w-2/6 rounded-full bg-gradient-to-r from-blue-500 to-green-400'>
                <span className='text-transparent'>Hola</span>
            </div>
            {children}
        </div>
    )
}

export default Section
