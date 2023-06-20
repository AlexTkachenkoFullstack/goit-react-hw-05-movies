import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getTrending } from "services/services"
const MoviesList = () => {
    const [movies, setMovies] = useState([])
    const [error, setError]= useState(null)
    const [isLoading, setIsLoading]= useState(false)
    useEffect(() => {
       setIsLoading(true);
            const fetchMovies = async () => {
             try {
                 const data = await getTrending();
                 console.log(data)
                 setMovies(data);
            } catch (error) {
            setError(error)
            } finally {
                setIsLoading(false);
            };
        
        }
        fetchMovies()
    }, [])

    return (
        <ul>
            {movies?.map(item => {
                return(<li key={item.id}><Link to={`/movies/${item.id}`}>{item.title || item.name}</Link></li>)
            })}
        </ul>
    )
}

export default MoviesList