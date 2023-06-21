import { Outlet } from "react-router-dom"
import { useState, useEffect,useRef, Suspense } from "react"
import { useParams, useLocation} from "react-router-dom"
import { getMovieDetails } from "services/services"
import emptyImg from './/..//images/Img_empty.png'
import { Link } from "react-router-dom"
import Loader from "components/Loader/Loader"


const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState(null)
    const [error, setError] = useState(null)

    const { id } = useParams();
    const location = useLocation()
    const backLinkHref=useRef(location.state?.from ?? '/')
    
    useEffect(() => {
   
        const fetchMovieDetails = async () => {
            try {
                const data = await getMovieDetails(id)
                setMovieInfo(data)
            } catch (error) {
                setError(error)
            }

        }
        fetchMovieDetails()
    }, [id])
    
  
    return (
        <div>
           
            {error && <div>{error}</div>}
            {movieInfo && (<section>
                                <div >
                                
                                    <Link to={backLinkHref.current}>
                                        <button>Go Back</button>
                                    </Link>
                                    {movieInfo.poster_path
                                    ? <img src={`https://image.tmdb.org/t/p/w300/${movieInfo.poster_path}`}
                                                alt={movieInfo.title || movieInfo.name} />
                                    : <img src={emptyImg} alt='there are no any img' width={150}/>}           
                                    <div>
                                        <h3>{movieInfo.title || movieInfo.name}</h3>
                                        <h4>User Score: {Math.round(movieInfo.vote_average * 10)} %</h4>
                                        <h4> Overview </h4>
                                        <p> {movieInfo.overview}</p>
                                        <h4>Genres</h4>
                                        <p>{movieInfo.genres?.map(item=>item.name).join(' ')}</p>
                                    </div>
                                </div>
                                <h4>Addition information</h4>
                                <Link to="cast">Cast</Link>
                                <Link to="reviews">Reviews</Link>
                                <Suspense fallback={<Loader/>}>
                                    <Outlet />
                                </Suspense>
                                    
                            </section>)}
        </div>
    )
}

export default MovieDetails