import { AppContainer } from "./App.styled";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
// import Home from "pages/Home";
// import Movies from "pages/Movies";
// import MovieDetails from "pages/MovieDetails";
// import Cast from "components/Cast/Cast";
// import Reviews from "components/Rewiews/Reviews";
import { lazy } from "react";
const Home = lazy(()=>import('.//..//..//pages/Home'))
const Movies = lazy(() => import('.//..//..//pages/Movies'))
const MovieDetails = lazy(() => import('.//..//..//pages/MovieDetails'))
const Cast = lazy(() => import('.//..//Cast/Cast'))
const Reviews=lazy(()=>import('.//..//Rewiews/Reviews'))
export const App = () => {
 
  return (
    <AppContainer>
      <Routes>
            <Route path="/" element={<SharedLayout/>}>
                <Route index element={<Home/>} />
                <Route path="movies" element={<Movies />} />
                <Route path="movies/:id" element={<MovieDetails />}>
                    <Route path="cast" element={<Cast/>}/>
                    <Route path="reviews" element={<Reviews/>}/>
                </Route>
                <Route path="*"  element={<Home/>}/>
            </Route>      
      </Routes>
      


    </AppContainer>
  );
};

