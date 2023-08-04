import { Outlet } from "react-router-dom"
import { useState, useEffect,useRef, Suspense } from "react"
import { useParams, useLocation} from "react-router-dom"
import { getMovieDetails } from "services/services"
import emptyImg from './/..//..//images/Img_empty.png'
import { Link } from "react-router-dom"
import Loader from "components/Loader/Loader"
import { HiArrowNarrowRight } from "react-icons/hi";
import { MovieDitailsContainer, ErrorMessage, IconContainer, MovieDetailsText,LinkEl, MovieDetailsLinkContainer, MovieDetailsButton,MovieDetailsTitle, MovieDetailsH3, MovieDitailsSection, MovieDetailsImg, LoaderContainer, GoBackButton, GoBackIcon } from "./MovieDetails.styled"


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
        <MovieDitailsSection>
            <MovieDitailsContainer className="container" >
                {error && (<ErrorMessage>
                                    <p>There were errors on the server.</p>
                                    <p> We will try to resolve this issue as soon as possible.</p>
                            </ErrorMessage>)}
                {movieInfo && (<>
                                 <div>
                                    <Link to={backLinkHref.current}>
                                        <GoBackButton>  
                                            <GoBackIcon />
                                            Go Back
                                            </GoBackButton>
                                    </Link>
                                    {movieInfo.poster_path
                                    ? <MovieDetailsImg src={`https://image.tmdb.org/t/p/w300/${movieInfo.poster_path}`}
                                                alt={movieInfo.title || movieInfo.name} />
                                    : <MovieDetailsImg src={emptyImg} alt='there are no any img' width={150}/>}           
                                    <div>
                                        <MovieDetailsTitle>{movieInfo.title || movieInfo.name}</MovieDetailsTitle>
                                        <MovieDetailsText><span>User Score:</span> {Math.round(movieInfo.vote_average * 10)} %</MovieDetailsText>
                                        <MovieDetailsH3> Overview </MovieDetailsH3>
                                        <MovieDetailsText> {movieInfo.overview}</MovieDetailsText>
                                        <MovieDetailsH3>Genres</MovieDetailsH3>
                                        <MovieDetailsText>{movieInfo.genres?.map(item=>item.name).join(' ')}</MovieDetailsText>
                                    </div>
                                 </div>
                                
                                <MovieDetailsH3>Addition information</MovieDetailsH3>
                                <MovieDetailsLinkContainer>
                                    <LinkEl to="cast">
                                        <IconContainer>
                                            <HiArrowNarrowRight/>
                                        </IconContainer>
                                        Cast
                                    </LinkEl>
                                    <LinkEl to="reviews">
                                        <IconContainer>
                                            <HiArrowNarrowRight/>
                                        </IconContainer>
                                        Reviews
                                    </LinkEl>
                                </MovieDetailsLinkContainer>
                                <Suspense fallback={<LoaderContainer><Loader/></LoaderContainer>}>
                                    <Outlet />
                                </Suspense>
                                 </>   )}
            </MovieDitailsContainer>
         </MovieDitailsSection>
    )
}

export default MovieDetails