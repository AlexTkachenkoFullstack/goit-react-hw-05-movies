import { useLocation } from "react-router-dom"
import PropTypes from 'prop-types';
import { Link } from "./MoviesList.styled";
import { IconContainer } from "./MoviesList.styled";
import { BiMoviePlay } from "react-icons/bi";
const MoviesList = ({ movies }) => {
     const location = useLocation()
   
    return (<ul>
                {movies?.map(item => {
                    return (<li key={item.id}>
                                <Link to={`/movies/${item.id}`} state={{ from: location }}>
                                <IconContainer>
                                    <BiMoviePlay/>
                                </IconContainer> 
                                    {item.title || item.name}
                                </Link>
                            </li>)
                        })}
            </ul>
        
    )
}
export default MoviesList

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
    id: PropTypes.number.isRequired,
        title: PropTypes.string,
    name: PropTypes.string,
  }),)
}