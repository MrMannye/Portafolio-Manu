function Card({image, title, lenguage,text}) {
    return (
        <figure class="bg-gray-100 dark:bg-[#212121] rounded-xl p-8">
            <img class="w-32 h-32 rounded-full mx-auto" src={image} alt="" width="384" height="512" />
            <div class="pt-6 text-center space-y-4">
                <blockquote>
                    <p class="text-lg font-semibold">
                        “{text}.”
                    </p>
                </blockquote>
                <figcaption class="font-medium">
                    <div class="text-cyan-600">
                        {title}
                    </div>
                    <div class="text-blue-600 dark:text-green-600">
                        {lenguage}
                    </div>
                </figcaption>
            </div>
        </figure>
    )
}

export default Card;