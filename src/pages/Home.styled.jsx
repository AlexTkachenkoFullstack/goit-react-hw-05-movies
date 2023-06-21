import { styled } from "styled-components";
import bgBody from './/..//images/bgBody.jpg'
export const HomeSection = styled.section`
box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
background-color: #0645ff;
display:flex;
min-height: calc(100vh - 60px);;
`

export const HomeContainer = styled.div`
background-image:url(${bgBody});
    background-position: center top;
    background-repeat: repeat;
    background-size: contain;
    padding-top: 15px;
    padding-bottom: 15px;
`
export const HomeTitle = styled.h2`
font-size: 40px;
text-shadow: 4px 2px 17px rgba(90,74,172,1);
margin-bottom: 15px
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