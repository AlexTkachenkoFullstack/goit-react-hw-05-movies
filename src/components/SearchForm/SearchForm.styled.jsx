import { styled } from "styled-components";
import { BsSearch } from "react-icons/bs";
export const SearchFormEl = styled.form`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-right:0;
margin-left:0;
height: 25px;
margin-bottom: 20px;
margin-top: 5px;
@media screen and (min-width: 375px){
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
}
@media screen and (min-width: 768px){
    margin-top: 15px;
    margin-bottom: 40px;
}
@media screen and (min-width: 1440px){
    margin-top: 25px;
    margin-bottom: 60px;
}
`

export const SearchInput = styled.input`
    display: inline-block;
    width: 100%;
    font-size: 20px;
    font-family:'Edu SA Beginner', cursive;
    padding: 4px;
    border-radius: 8px;
    padding-left:10px;
    padding-right: 10px;
    @media screen and (min-width: 375px){
        width: 270px;
    }
    @media screen and (min-width: 768px){
        font-size: 28px;
        width: 450px;
    }
    @media screen and (min-width: 1440px){
        font-size: 40px;
        width: 600px;
    }

    &:hover, &:focus{
       background-color: #4fffff94;
    }

`

export const SearchButton = styled.button`
width: 40px;
height:40px;
border: none;
&.focus, &.hover{
   
}
`

export const SearchIcon = styled(BsSearch)`
width: 24px;
height: 24px;
fill:#4129f5f0;
margin-left: 10px;
@media screen and (min-width: 768px){
    width: 32px;
    height: 32px;
    margin-left: 15px;
}
@media screen and (min-width: 1440px){
    width: 40px;
    height: 40px;
}

&:hover{
    width: 28px;
height: 28px;
fill: #1f2efd;
@media screen and (min-width: 768px){
    width: 36px;
    height: 36px;
}
@media screen and (min-width: 1440px){
    width: 44px;
    height: 44px;
}
}
`