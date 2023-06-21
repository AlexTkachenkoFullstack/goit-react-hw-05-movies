
import { useEffect, useState } from "react"
import { getTrending } from "services/services"
import MoviesList from "components/MoviesList/MoviesList"
import { HomeSection, HomeContainer,HomeTitle,ErrorMessage } from "./Home.styled"
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

    
   
    return (<HomeSection>
                <HomeContainer className="container">
                    {movies.length>0 && 
                        (<>
                            <HomeTitle>Trending today</HomeTitle>
                            <MoviesList movies={movies} />
                        </>)}
                        {error && (<ErrorMessage>
                                    <p>There were errors on the server.</p>
                                    <p> We will try to resolve this issue as soon as possible.</p>
                                  </ErrorMessage>)} 
                </HomeContainer>
            </HomeSection>
    )
}


export default Home