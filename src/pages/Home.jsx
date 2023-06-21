
import { useEffect, useState } from "react"
import { getTrending } from "services/services"
import MoviesList from "components/MoviesList/MoviesList"

const Home = () => {
      const [movies, setMovies] = useState([])
    const [error, setError]= useState(null)
    useEffect(() => {
      
            const fetchMovies = async () => {
                try {
                    const data = await getTrending();
                    console.log(data)
                    setMovies(data);
                } catch (error) {
                    setError(error)
                }
        }
        fetchMovies()
    }, [])

    
   
    return (<>
        
           
            {movies.length>0 && 
                (<div><h2>Trending today</h2>
                    <MoviesList movies={movies} />
                </div>)}
            { error && <div>{error}</div>}    
            </>
    )
}



// const MoviesList = () => {
//     const [movies, setMovies] = useState([])
//     const [error, setError]= useState(null)
//     const [isLoading, setIsLoading]= useState(false)
//     useEffect(() => {
//        setIsLoading(true);
//             const fetchMovies = async () => {
//              try {
//                  const data = await getTrending();
//                  console.log(data)
//                  setMovies(data);
//             } catch (error) {
//             setError(error)
//             } finally {
//                 setIsLoading(false);
//             };
        
//         }
//         fetchMovies()
//     }, [])
// console.log(error, isLoading)
//     return (
//         <ul>
//             {movies?.map(item => {
//                 return(<li key={item.id}><Link to={`/movies/${item.id}`}>{item.title || item.name}</Link></li>)
//             })}
//         </ul>
//     )
// }

export default Home