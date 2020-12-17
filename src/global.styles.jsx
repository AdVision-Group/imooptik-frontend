import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: Montserrat;
    }

    section {
        padding: 3rem;

        @media all and (max-width: 800px) {
            padding: 0 2rem;
            @media all and (max-width: 500px) {
                padding: 0 1.5rem;
            }
        }
    }
`

