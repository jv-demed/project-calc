import { ThemeProvider } from 'styled-components';
import Theme from '../src/styles/Theme';
import GlobalStyle from '../src/styles/GlobalStyle';
import Header from '../src/components/Globals/Header';
import '../src/styles/fonts.css';

export default function CustomApp({ Component, pageProps }){
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}