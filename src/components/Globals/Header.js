import styled from "styled-components";

const HeaderStyled = styled.nav`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.grey.strong};
    display: flex;
    height: 10vh;
`

export default function Header(){
    return(
        <HeaderStyled className='container'>
            Project Calc
        </HeaderStyled>
    )
}