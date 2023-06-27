import SearchForm from "components/SearchForm/SearchForm"
import { useEffect, useState } from "react";
import { useSearchParams} from "react-router-dom";
import { getSearchMovies } from "services/services";
import MoviesList from "components/MoviesList/MoviesList";
import { MoviesSection, MoviesContainer } from "./Movie.styled";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchMovies, setSearchMovies] = useState('')
    const [noResult, setNoResult] =useState(false)
   
    const queryName = searchParams.get("query") ?? "";
   
    useEffect(() => {
        if (!queryName) {
            return
        }
        setNoResult(false)
        setSearchMovies('')
        const fetchSearchMovies = async()=> {
            const data = await getSearchMovies(queryName)
            if (data.length=== 0) {
                setNoResult(true)
                return
            }
            setSearchMovies(data)
        }
        fetchSearchMovies()
},[queryName])

     const updateQueryString = (name) => {
      const nextParams = name !== "" ? { query: name } : {};
         setSearchParams(nextParams);
  };

    return (
        <MoviesSection>
            <MoviesContainer className="container">
                <SearchForm onSubmit={updateQueryString} />
                {noResult && <div>No results for your request</div>}
                {searchMovies && <MoviesList movies={searchMovies} />}
            </MoviesContainer>
        </MoviesSection>
    )
}

export default Movies