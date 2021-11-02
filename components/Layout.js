import Header from "./Header"
import Footer from "./Footer"

function Layout({children}) {
    return (
        <div className='Layout'>
            <Header></Header>
            {children}
            <div className='px-8'>
                <hr />
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Layout
