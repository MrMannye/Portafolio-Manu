import  'bootstrap/dist/css/bootstrap.min.css' ;

export default function galeria() {
    return (
        <section id='galeria' className='container p-2'>
            <div className='text-center p-5'>
                <h2>Galeria de Certificados Obtenidos</h2>
            </div>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img src='img/freact.jpg'/>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img src='img/javascript.jpg'/>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img src='img/pjavascript.jpg'/>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 mt-4'>
                    <img src='img/node.jpg'/>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 mt-4'>
                    <img src='img/rrouter.jpg'/>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 mt-4'>
                    <img src='img/cryptos.jpg'/>
                </div>
            </div>
        </section>
    )
}
