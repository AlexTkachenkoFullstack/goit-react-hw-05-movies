import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeItem = styled(NavLink)`
  color: #e6e6e6;
  margin: 0;
  text-decoration: none;
`;

export const TrendingList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 32px;
  list-style: none;
  flex-bacis: 24%;
`;

export const TrendingLi = styled.li`
  max-width: 264px;
`;

export const TrendingImg = styled.img`
  border-radius: 5px;
  margin-bottom: 5px;
  background: var(
    --linear,
    linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%)
  );
`;

export const TrendingName = styled.p`
  color: #e5e5e5;
  font-size: 20px;
  font-weight: 600;
  font-family:'Varela Round', sans-serif;
  white-space: nowrap;    
  overflow: hidden;       
  text-overflow: ellipsis;
  @media screen and (min-width: 768px){
    font-size: 28px;
}
@media screen and (min-width: 1440px){
    font-size: 28px;
}
`;

export const UserScore=styled.p`
color: #c2c239;;
  font-size: 18px;
  font-weight: 600;
  font-family:'Edu SA Beginner', cursive;
  @media screen and (min-width: 768px){
    font-size: 24px;
}
@media screen and (min-width: 1440px){
    font-size: 24px;
}
`