import styled from "styled-components";
import heroImage from "../../assets/daniel-reche.jpg"
import { colors } from "../../utils/style";

export const LinkButton = styled.a`
    width : 180px;
    height: 30px;
    background-color: ${colors.bagroundButton};
    color :white;
    text-decoration : none;
    padding : 10px;
    border-radius: 20px; 
    position :relative;
    top : -10rem;
    font-weight : 600;
    text-align : center;
  
  `
export const LoginContainer = styled.div`
   height : 100vh;
   display : flex;
   flex-direction: column;
   justify-content : center;
   align-items: center;
   background-image: url(${heroImage});
   background-position : center;
   background-size: cover;
   background-repeat : no-repeat;
   
`
export const Welcome = styled.p`
     font-weight : 600;
     font-size : 30px; 
     position : relative;
     top : 25vh;
     right : 29vh;
`
export const TitlePlatform = styled.h1`
     font-weight : 700;
     font-size : 9rem;
`
export const Blason = styled.p`
      font-size : 25px;
      position : relative;
      top : -25vh;

`