import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import noImg from '..//..//images/noImg.png'
import {
  Link,
  MoviesListComp,
  UserScore,
  MoviesItem,
  MovieName,
  MovieImg,
} from './MoviesList.styled';
const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesListComp>
      {movies?.map(item => {
        return (
          <MoviesItem key={item.id}>
             <Link to={`/movies/${item.id}`} state={{ from: location }}>
             {item.poster_path 
            ?
              <MovieImg
                width="264px"
                height="384px"
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt={item.title}
                loading="lazy"
              />
              :<MovieImg
              width="264px"
              height="384px"
              src={`${noImg}`}
              alt='No image'
              loading="lazy"
            />
             }
              <MovieName>{item.title || item.name}</MovieName>
              <UserScore>
                User Scrore: {Math.round(item.vote_average * 10)}%
              </UserScore>
            </Link>
          </MoviesItem>
        );
      })}
    </MoviesListComp>
  );
};
export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
