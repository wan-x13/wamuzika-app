import styled from "styled-components";



export const TopPlaylistContainer = styled.div`
        margin-top : 20px;
        margin-bottom : 50px;
      h3{
        font-size : 2vw;
        padding-left: 2vw;
      }
       
        
        
`
export const CardContainer = styled.div`
        margin : 60px 30px 30px 30px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
<<<<<<< HEAD
        gap : 2vw;
=======
        /* grid-gap : 0.1vw; */
>>>>>>> develop

       

       `
export const CardContent = styled.div`
            width : 16vw;
            background : #232327;
            display : flex; 
            flex-direction : column;
            justify-content : center;
            align-items: center;
            border-radius : 1.5vw;
            margin-top: -40px;

            img{
            width : 14vw;
            border-radius: 10px;
            box-shadow: 0px 4px 4px 0px #00000040;
            margin-top : 20px;
            }

            &:hover {
            background-color : #38383B;
            cursor : pointer;
            }
       `