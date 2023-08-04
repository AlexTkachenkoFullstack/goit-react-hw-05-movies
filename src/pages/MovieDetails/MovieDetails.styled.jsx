import { styled } from "styled-components";
import bgBody from './/..//..//images/bgBody.jpg'
import { NavLink } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
export const MovieDitailsSection = styled.section`
box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
background-color: #0c9ea1;
display:flex;
min-height: calc(100vh - 60px);
`

export const MovieDitailsContainer = styled.div`
background: linear-gradient(90deg, #111 6.82%, rgba(17, 17, 17, 0) 100%),
    url(${bgBody}),
    lightgray 295.604px -4.18px / 92.376% 104.171% no-repeat;
    background-position: center top;
    background-repeat: repeat;
    background-size: 100% auto;
    padding-top: 15px;
    padding-bottom: 15px;
    box-shadow: inset 0px 14px 9px 0px rgba(28,23,28,0.9);
`

export const GoBackButton = styled.button`
display:flex;
align-items: center;
justify-content: center;
border-radius: 23px;
font-size:18px;
width: 110px;
height: 30px;
background-color: #25c174;
margin-bottom: 15px;
@media screen and (min-width: 768px){
  width: 135px;
height: 40px;
  font-size: 24px;
}
@media screen and (min-width: 1440px){
  width: 160px;
height: 45px;
  font-size: 30px;
}

&:hover, &:focus{
  animation: pulsare 1s ease-in-out;
}

@keyframes pulsare{
    0%{
        box-shadow:  0 0 25px #5ddcff,
        0 0 50px #4e00c2;
        background-color: aqua;
    }
}
`

export const GoBackIcon=styled(BiArrowBack)`
width:18px;
height:18px;
@media screen and (min-width: 768px){
  width: 24px;
height: 24px;
}
@media screen and (min-width: 1440px){
  width: 32px;
height: 32px;
}
`

export const MovieDetailsImg = styled.img`
margin-bottom: 15px;
margin-right:auto;
margin-left:auto;
border-radius: 10px;
`

export const MovieDetailsTitle = styled.h2`
font-size: 36px;
font-weight: 600;
margin-bottom: 10px;
color:#839be9;
@media screen and (min-width: 768px){
  font-size: 44px;
}
@media screen and (min-width: 1440px){
  font-size: 56px;
}
`

export const MovieDetailsH3 = styled.h3`
font-size: 24px;
font-weight: 600;
color:#4a6370;
@media screen and (min-width: 768px){
  font-size: 36px;
}
@media screen and (min-width: 1440px){
  font-size: 48px;
}
`

export const MovieDetailsText = styled.p`
font-size: 22px;
margin-bottom: 10px;
color:#d0dfff;
font-family: 'Edu SA Beginner', cursive;
text-align: justify;
@media screen and (min-width: 768px){
  font-size: 34px;
}
@media screen and (min-width: 1440px){
  font-size: 46px;
}

&>span{
  font-size: 22px;
font-weight: 600;
@media screen and (min-width: 768px){
  font-size: 34px;
}
@media screen and (min-width: 1440px){
  font-size: 46px;
}
}
`
export const MovieDetailsLinkContainer = styled.div`
display:flex;
flex-direction: column;
  margin-bottom: 10px;

`

export const LinkEl = styled(NavLink)`
text-decoration: none; 
  color: inherit;
  display: flex;
  color:#d0dfff;
  font-size: 22px;
font-weight: 600;
@media screen and (min-width: 768px){
  font-size: 34px;
}
@media screen and (min-width: 1440px){
  font-size: 46px;
}

  &:hover, &:focus{
    color: #53c1ea;
  }
`

export const IconContainer = styled.div`
margin-right: 5px;
width:32px;
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

export const LoaderContainer = styled.div`
position: absolute;
left: 50%;
 transform: translateX(-50%);
`