import { AppContainer } from "./App.styled";
import { Route, Routes, Navigate } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
import { lazy } from "react";

const Home = lazy(()=>import('.//..//..//pages/Home/Home'))
const Movies = lazy(() => import('../../pages/Movies/Movies'))
const MovieDetails = lazy(() => import('.//..//..//pages/MovieDetails/MovieDetails'))
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
          {/* Устанавливаем свойство to компонента <Navigate> на "/",
           что является путем, на который мы хотим перенаправить.
           Кроме того, мы добавляем свойство replace, 
           чтобы заменить текущий URL в истории браузера. */}
          <Route path="*" element={<Navigate to="/" replace />}/>
            </Route>      
      </Routes>
      


    </AppContainer>
  );
};

