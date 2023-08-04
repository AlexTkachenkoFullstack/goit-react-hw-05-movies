import React from 'react';
import {
  HomeItem,
  TrendingImg,
  TrendingLi,
  TrendingList,
  TrendingName,
  UserScore
} from './HomeTrendsList.styled';

export function HomeTrendingList({ movies }) {
  return (
    <TrendingList>
      {movies.map(movie => {
        return (
          <TrendingLi key={movie.id}>
            <HomeItem to={`movies/${movie.id}`}>
              <TrendingImg
                width="264px"
                height="384px"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
              />
              <TrendingName>{movie.title || movie.name}</TrendingName>
              <UserScore>User Scrore: {Math.round(movie.vote_average * 10)}%</UserScore>
            </HomeItem>
          </TrendingLi>
        );
      })}
    </TrendingList>
  );
}