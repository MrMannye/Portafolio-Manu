export default function Frames() {
    return (
        <div className="frames flex flex-col sm:flex-row mt-10 container justify-around">
            <div className="frame__facebook">
                <iframe
                    src="https://www.instagram.com/p/CXTyeFCvlGA/embed"
                    // El elemento HTML <iframe> (de inline frame) representa un contexto de navegación anidado, 
                    // el cual permite incrustrar otra página HTML en la página actual. Con el link del src cambiando solo
                    // el nombre de la pagina podemos agregar cualquiera pagina de Facebook a nuestra pagina
                    min-width='300'
                    width='400'
                    title='Instagram page'
                    height='500'
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling='no'
                    frameBorder='0'
                    allow='encrypted-media'
                    className="rounded-xl"
                />
            </div>
            <div className="frame__instagram">
                <iframe
                    src="https://www.instagram.com/p/CXTqsIpNJ9e/embed"
                    // El elemento HTML <iframe> (de inline frame) representa un contexto de navegación anidado, 
                    // el cual permite incrustrar otra página HTML en la página actual. Con el link del src cambiando solo
                    // el nombre de la pagina podemos agregar cualquiera pagina de Facebook a nuestra pagina
                    min-width='300'
                    width='400'
                    title='Instagram page'
                    height='500'
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling='no'
                    frameBorder='0'
                    allow='encrypted-media'
                    className="rounded-xl"
                />
            </div>
        </div>
    )
}
