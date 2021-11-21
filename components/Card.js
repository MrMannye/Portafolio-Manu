function Card({image, title, lenguage,text}) {
    return (
        <figure className="bg-gray-100 dark:bg-black rounded-xl p-8">
            <img className="w-32 h-32 rounded-full mx-auto" src={image} alt="" width="384" height="512" />
            <div className="pt-6 text-center space-y-4">
                <blockquote>
                    <p className="text-lg font-semibold">
                        “{text}.”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-cyan-600">
                        <a href="#" className='outline-none hover:text-sm transition-all'>{title}</a>
                    </div>
                    <div className="text-blue-600 dark:text-green-600">
                        {lenguage}
                    </div>
                </figcaption>
            </div>
        </figure>
    )
}

export default Card;