import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import Loader from "components/Loader/Loader"
import { Header, HeaderContaner, Link } from "./SharedLayout.styled"
const SharedLayout = () => {
    return (<>
        <Header >
            <HeaderContaner className='container'>
                <Link to='/'>Home</Link>
                <Link to='/movies'>Movies</Link>
            </HeaderContaner>    
        </Header>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
            
        
        </>
    )
}

export default SharedLayout