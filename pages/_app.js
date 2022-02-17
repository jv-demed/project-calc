import { ThemeProvider } from 'styled-components';
import Theme from '../src/styles/Theme';
import GlobalStyle from '../src/styles/GlobalStyle';
import Header from '../src/components/Header';

export default function CustomApp({ Component, pageProps }){
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}