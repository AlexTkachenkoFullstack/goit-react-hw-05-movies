import { styled } from "styled-components";
import emptyImg from './/..//images/Img_empty.png'

export const ImgContainer = styled.div`
width: 300px;
min-height: 300px;
padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url(${emptyImg});
  background-repeat: no-repeat;
  background-position: 50% 50%;
background-size:  100px 100px;
}
`

export const ImgEl = styled.img`

`