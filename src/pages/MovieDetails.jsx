import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getMovieDetails } from "services/services"
import { ImgContainer, ImgEl } from "./MovieDetails.styled"
import { Link } from "react-router-dom"
const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState({})
    const [error, setError] = useState(null)
   const {id} = useParams();

    
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
    },[id])
    
console.log(error)

    return (
        <div>
            <div >
                    <ImgContainer>
                    <ImgEl src={`https://image.tmdb.org/t/p/w300/${movieInfo.poster_path}`
                            }
                            alt={movieInfo.title || movieInfo.name} />
                    </ImgContainer>
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
            <Outlet />
        </div>
    )
}

export default MovieDetails