export default function Avatar({url, className}) {
    return (
        <img 
        loading='lazy'
        src={url}
        className={` h-20 rounded-full ${className}`}
        >
        </img>
    )
}