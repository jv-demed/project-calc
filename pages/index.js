import styled from 'styled-components';
import LeiNewton2 from "../src/components/Dinamica/LeiNewton2"

const HomeStyled = styled.section`
    align-items: center;
    display: flex;
    height: 90vh;
    justify-content: center;
`

export default function Home() {
    return(
        <HomeStyled>
            <LeiNewton2 />
        </HomeStyled>
    )
}