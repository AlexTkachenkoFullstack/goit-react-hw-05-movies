import { styled } from "styled-components";
import bgImg from './/..//..//images/abstraktsiia-tsvetochnaia-fantaziia-fraktalnyi-fon-zimnii-uz.jpg'
import { NavLink } from "react-router-dom"
import { BsFillCameraReelsFill } from "react-icons/bs";

export const Header = styled.header`
box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
background-color: #0c9ea1;

`

export const HeaderContaner = styled.div`
height: 60px;
padding-left: 30px;
gap: 25px;
display: flex;
align-items: center;
justify-content: space-between;
background: linear-gradient(67deg, #111 6.82%, rgba(17, 17, 17, 0) 100%),
    url(${bgImg}),
    lightgray 295.604px -4.18px / 92.376% 104.171% no-repeat;
  background-size: cover;
  box-shadow: inset -1px -14px 12px 0px rgba(28,23,28,0.9);
  
  @media screen and (min-width: 768px){
    height:80px;
}
@media screen and (min-width: 1440px){
    height:120px;
}
`

export const LogoContainer=styled(NavLink)`
display:flex;
align-items: center;
color: white;
`
export const LogoIcon=styled(BsFillCameraReelsFill)`
margin-right:10px;
height:20px;
width:20px;
@media screen and (min-width: 768px){
    height:32px;
    width:32px;
}
@media screen and (min-width: 1440px){
    height:40px;
    width:40px;
}
`
export const LogoText=styled.p`
font-family: 'Lobster', cursive;
font-size:22px;
@media screen and (min-width: 768px){
    font-size:32px;
}
@media screen and (min-width: 1440px){
    font-size:40px;
}
`

export const LinksContainer=styled.div`
display:flex;
gap: 10px;
@media screen and (min-width: 768px){
    gap:20px;
}
@media screen and (min-width: 1440px){
    gap:50px;
}
`

export const Link = styled(NavLink)`
color:#f6ff09;
font-size: 20px;
font-family:'Varela Round', sans-serif;
@media screen and (min-width: 768px){
    font-size:32px;
}
@media screen and (min-width: 1440px){
    font-size:40px;
}
&.active{
    color: #46ff00;
    text-shadow: 0 0 1em blue, 0 0 0.2em blue;
}

&:hover, &:focus{
    scale: 1.03;
    color: #fff422;
    text-shadow: 0 0 1em blue, 0 0 0.2em blue;
}
    `

    
export const LoaderContainer = styled.div`
position: absolute;
left: 50%;
top: 150px;
transform: translateX(-50%);
`
