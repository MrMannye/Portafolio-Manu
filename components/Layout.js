import Header from "./Header"

function Layout({children}) {
    return (
        <div className='Layout'>
            <Header></Header>
            {children}
        </div>
    )
}

export default Layout
