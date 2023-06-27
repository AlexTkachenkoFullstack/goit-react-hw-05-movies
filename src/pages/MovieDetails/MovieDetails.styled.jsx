import { styled } from "styled-components";
import bgBody from './/..//..//images/bgBody.jpg'
import { NavLink } from "react-router-dom";
export const MovieDitailsSection = styled.section`
box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
background-color: #0645ff;
display:flex;
min-height: calc(100vh - 60px);
`

export const MovieDitailsContainer = styled.div`
background-image:url(${bgBody});
    background-position: center top;
    background-repeat: repeat;
    background-size: contain;
    padding-top: 15px;
    padding-bottom: 15px;
`

export const MovieDetailsButton = styled.button`
font-size:24px;
width: 120px;
height: 40px;
background-color: #fbff00;
margin-bottom: 15px;

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
export const MovieDetailsImg = styled.img`
margin-bottom: 15px;
`

export const MovieDetailsTitle = styled.h2`
font-size: 36px;
font-weight: 600;
margin-bottom: 10px;
`

export const MovieDetailsH3 = styled.h3`
font-size: 28px;
font-weight: 600;
`

export const MovieDetailsText = styled.p`
font-size: 28px;
margin-bottom: 10px;

&>span{
  font-size: 28px;
font-weight: 600;
}
`
export const MovieDetailsLinkContainer = styled.div`
display:flex;
flex-direction: column;
  margin-bottom: 10px;
`

export const LinkEl = styled(NavLink)`
font-size: 28px;
text-decoration: none; 
  color: inherit;
  display: flex;

  &:hover, &:focus{
    color: #1d00f5;
  }
`

export const IconContainer = styled.div`
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