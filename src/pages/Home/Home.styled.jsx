import { styled } from "styled-components";
import bgBody from './/..//..//images/bgBody.jpg'
import heroBg from './/..//..//images/hero.webp'
export const HomeSection = styled.section`
display:flex;
flex-direction: column;
// box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
background-color:#0c9ea1;
min-height: calc(100vh - 60px);
`
export const HeroContainer=styled.div`
width: auto;
min-height: 230px;
background: linear-gradient(90deg, #111 6.82%, rgba(17, 17, 17, 0) 100%),
    url(${heroBg}),
    lightgray 295.604px -4.18px / 92.376% 104.171% no-repeat;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 15px;
    padding-bottom: 15px; 
    box-shadow: inset 0px 14px 9px 0px rgba(28,23,28,0.9);
    @media screen and (max-width: 767px) {
      max-width: 375px;
    }
    @media screen and (min-width: 768px){
      width: 768px;
      height: 490px;
      position:relative;
    }
    @media screen and (min-width: 1440px){
      width: 1440px;
      height: 888px;
    }

`

export const HeroTextContainer=styled.div`
@media screen and (min-width: 768px){
  position:absolute;
  width: 355px;
    right: 25px;
    top:25px;
}
@media screen and (min-width: 1440px){
  width: 650px;
    right: 40px;
    top:40px;
}
`

export const HeroTitle=styled.h2`
color:#a5c8b8; 
font-family: 'Lobster', cursive;
font-weight: 400;
text-align: center;
font-size: 24px;
@media screen and (min-width: 768px){
  font-size: 32px;
}
@media screen and (min-width: 1440px){
  font-size: 52px;
  margin-bottom: 20px;
}
`

export const HeroText=styled.p`
color:#a5c8b8;
font-family: 'Edu SA Beginner', cursive;
font-size: 19px;
font-weight: 600;
text-align: justify;
@media screen and (min-width: 768px){
  font-size: 30px;
}
@media screen and (min-width: 1440px){
  font-size: 52px;
}
`

export const HomeContainer = styled.div`
background: linear-gradient(90deg, #111 6.82%, rgba(17, 17, 17, 0) 100%),
    url(${bgBody}),
    lightgray 295.604px -4.18px / 92.376% 104.171% no-repeat;
    background-position: center top;
    background-repeat: repeat;
    background-size: 100% auto;
    // background-size: contain;
    padding-top: 15px;
    padding-bottom: 15px;
`
export const HomeTitle = styled.h2`
color:#adade5;
font-size: 36px;
text-shadow: 4px 2px 17px rgba(90,74,172,1);
margin-bottom: 15px;
@media screen and (min-width: 768px){
  font-size: 48px;
}
@media screen and (min-width: 1440px){
  font-size: 56px;
}
`

export const ErrorMessage = styled.p`
font-size: 40px;
line-height: 1.5;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; 
`