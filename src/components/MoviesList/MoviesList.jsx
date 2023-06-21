import { Link, useLocation } from "react-router-dom"
const MoviesList = ({ movies }) => {
     const location = useLocation()
   
    return (<ul>
                {movies?.map(item => {
                            return(<li key={item.id}><Link to={`/movies/${item.id}`} state={{from:location}}>{item.title || item.name}</Link></li>)
                        })}
            </ul>
        
    )
}
export default MoviesList