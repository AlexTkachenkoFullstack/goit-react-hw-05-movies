import { styled } from "styled-components";
import bgBody from './/..//images/bgBody.jpg'
export const MoviesSection = styled.section`
box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
background-color: #0645ff;
display:flex;
min-height: calc(100vh - 60px);
`

export const MoviesContainer = styled.div`
background-image:url(${bgBody});
    background-position: center top;
    background-repeat: repeat;
    background-size: contain;
    padding-top: 15px;
    padding-bottom: 15px;
`