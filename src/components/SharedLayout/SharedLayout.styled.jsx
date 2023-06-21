import { styled } from "styled-components";
import bgImg from './/..//..//images/abstraktsiia-tsvetochnaia-fantaziia-fraktalnyi-fon-zimnii-uz.jpg'
import { NavLink } from "react-router-dom"
export const Header = styled.header`
box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
background-color: #f7f74f;
`

export const HeaderContaner = styled.div`
height: 60px;
padding-top: 15px;
padding-left: 30px;
display: flex;
gap: 25px;
background-image:url(${bgImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;`

export const Link = styled(NavLink)`
color:#f7f74f;
font-size: 32px;

&.active{
    color: red;
    text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
}
    `

    
export const LoaderContainer = styled.div`
position: absolute;
left: 50%;
top: 150px;
transform: translateX(-50%);
`