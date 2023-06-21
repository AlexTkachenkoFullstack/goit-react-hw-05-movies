import { styled } from "styled-components";
import { NavLink } from "react-router-dom";


export const Link = styled(NavLink)`
font-size:24px;
text-decoration: none;
color: inherit;
line-height: 1.25;
display:flex;
gap: 5px;

&:hover, &:focus{
    color:#1803b9;
}
`

export const IconContainer = styled.div`
width: 24px;
height: 24px;
`