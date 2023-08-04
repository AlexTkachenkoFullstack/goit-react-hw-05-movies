import SearchForm from "components/SearchForm/SearchForm"
import { useEffect, useState } from "react";
import { useSearchParams} from "react-router-dom";
import { getSearchMovies } from "services/services";
import MoviesList from "components/MoviesList/MoviesList";
import { MoviesSection, MoviesContainer, MoviesPageInstuction, NoResultText } from "./Movie.styled";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchMovies, setSearchMovies] = useState('')
    const [noResult, setNoResult] =useState(false)
    const [loading, setLoading]=useState(false)
   
    const queryName = searchParams.get("query") ?? "";
   
    useEffect(() => {
        if (!queryName) {
            return
        }
        setLoading(true)
        setNoResult(false)
        setSearchMovies('')
        const fetchSearchMovies = async()=> {
            const data = await getSearchMovies(queryName)
            if (data.length=== 0) {
                setNoResult(true)
                setLoading(false)
                return
            }
            setSearchMovies(data)
            setLoading(false)
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
                {noResult && <NoResultText>No results for your request</NoResultText>}
                {searchMovies && <MoviesList movies={searchMovies} />}
                {!noResult && ! searchMovies && !loading && 
                <>
                    <MoviesPageInstuction>Enter the full or partial name of the movie in the search field to find the movies that interest you.</MoviesPageInstuction>
                    <MoviesPageInstuction>After entering your search criteria, a list of matching movies will be displayed on the screen. You can browse the results and choose the movies that interest you.</MoviesPageInstuction>
                    <MoviesPageInstuction>Once you select a specific movie, you will see detailed information about it: overview, user score, genres, cast, and reviews.</MoviesPageInstuction>
                    <MoviesPageInstuction>We hope you will find all the movies you need and all the information you are interested in about the movies!</MoviesPageInstuction>
                    <MoviesPageInstuction>Enjoy your viewing!</MoviesPageInstuction>
                </>}
            </MoviesContainer>
        </MoviesSection>
    )
}

export default Movies