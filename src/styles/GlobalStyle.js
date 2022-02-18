import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: ${({ theme }) => theme.palette.grey.light};
    color: white;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
  }
  .container{
    padding-left: 130px;
    padding-right: 130px;
  }
  @media(max-width: 850px){
    .container{
      padding-left: 65px;
      padding-right: 65px;
    }
  }
  @media(max-width: 650px){
    .container{
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`

export default GlobalStyle;