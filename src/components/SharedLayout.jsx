import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
const SharedLayout = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/movies'>Movise</NavLink>
            <Outlet/>
        </div>
    )
}

export default SharedLayout