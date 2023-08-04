import { styled } from "styled-components";
import bgBody from './/..//..//images/bgBody.jpg'
export const MoviesSection = styled.section`
box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
background-color: #0c9ea1;
display:flex;
min-height: calc(100vh - 60px);
`

export const MoviesContainer = styled.div`
background: linear-gradient(90deg, #111 6.82%, rgba(17, 17, 17, 0) 100%),
    url(${bgBody}),
    lightgray 295.604px -4.18px / 92.376% 104.171% no-repeat;
    background-position: center top;
    background-repeat: repeat;
    background-size: 100% auto;
    padding-top: 15px;
    padding-bottom: 15px;
`
export const MoviesPageInstuction=styled.p`
text-indent: 20px;
font-family: 'Edu SA Beginner', cursive;
font-size: 20px;
text-align: justify;
color:#e5f0e8;
@media screen and (min-width: 768px){
    font-size: 32px;
    text-indent: 30px;
    color:#ffdccb;
}
@media screen and (min-width: 1440px){
    font-size: 48px;
    text-indent: 48px;
}
`

export const NoResultText=styled.p`
font-size:30px;
color:#e5f0e8;
font-family:'Lobster', cursive;
color:#76c3c7;
text-align: center;
@media screen and (min-width: 768px){
    font-size: 48px;
}
@media screen and (min-width: 1440px){
    font-size: 60px;
}
`