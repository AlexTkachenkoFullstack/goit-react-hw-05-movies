
import { useEffect, useState } from "react"
import { getTrending } from "services/services"
// import MoviesList from "components/MoviesList/MoviesList"
import { HomeSection, HeroContainer, HeroText, HeroTitle, HomeContainer,HomeTitle,ErrorMessage, HeroTextContainer  } from "./Home.styled"
import { HomeTrendingList } from "components/HomeTrendsList/HomeTrendsList"
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
                <HeroContainer className="container">
                    <HeroTextContainer>
                    <HeroTitle> Welcome to "Movie Mania: Your Own Home Cinema!"</HeroTitle>
                    <HeroText>Are you ready to turn your living space into an exciting cinematic experience? Get ready to immerse yourself in the world of movies like never before! Let the curtain rise, the lights dim, and the adventure begin. Welcome to a world of limitless cinematic magic right at your fingertips!</HeroText>
                    </HeroTextContainer>
                    
                </HeroContainer>
                <HomeContainer className="container">
                    {movies.length>0 && 
                        (<>
                            <HomeTitle>Trending today</HomeTitle>
                            <HomeTrendingList movies={movies} />
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