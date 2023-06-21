import SearchForm from "components/SearchForm/SearchForm"
import { useEffect, useState } from "react";
import { useSearchParams} from "react-router-dom";
import { getSearchMovies } from "services/services";
import MoviesList from "components/MoviesList/MoviesList";


const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchMovies, setSearchMovies]=useState('')
    const queryName = searchParams.get("query") ?? "";
   
    useEffect(() => {
        const fetchSearchMovies = async()=> {
            const data = await getSearchMovies(queryName)
            setSearchMovies(data)
        }
        fetchSearchMovies()
},[queryName])

     const updateQueryString = (name) => {
      const nextParams = name !== "" ? { query: name } : {};
         setSearchParams(nextParams);
  };

    return (
        <div>
            <SearchForm onSubmit={updateQueryString} />
            {searchMovies && <MoviesList movies={searchMovies} />}
        </div>
    )
}

export default Movies