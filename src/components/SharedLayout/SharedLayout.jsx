import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Suspense } from "react"
import Loader from "components/Loader/Loader"
const SharedLayout = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/movies'>Movies</NavLink>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
            
        </div>
    )
}

export default SharedLayout