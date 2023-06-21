import { styled } from "styled-components";
import { BsSearch } from "react-icons/bs";
export const SearchFormEl = styled.form`
width: 100%;
max-width: 300px;
height: 30px;
display: flex;
align-items: center;
margin-bottom: 10px;
`

export const SearchInput = styled.input`
    display: inline-block;
    width: 100%;
    font-size: 24px;
    padding: 4px;
    border-radius: 8px;

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

&:hover{
    width: 28px;
height: 28px;
fill: #1f2efd;
}
`