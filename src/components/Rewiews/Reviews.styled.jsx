import { styled } from "styled-components";

export const ReviewList = styled.ul`
display: flex;
flex-direction: column;
gap: 15px;` 

export const ReviewsEmpty = styled.h3`
font-size: 20px;
font-weight: 600;
color: #d2dfff;
font-family: 'Lobster',cursive;
color: #76c3c7;
text-align: center;
line-height: 1.5;
@media screen and (min-width: 768px){
    font-size: 36px;
}
@media screen and (min-width: 1440px){
    font-size: 44px;
}
`
export const ErrorMessage = styled.p`
font-size: 20px;
font-weight: 600;
color: #d2dfff;
font-family: 'Lobster',cursive;
color: #76c3c7;
text-align: center;
line-height: 1.5;
@media screen and (min-width: 768px){
    font-size: 36px;
}
@media screen and (min-width: 1440px){
    font-size: 44px;
}
`