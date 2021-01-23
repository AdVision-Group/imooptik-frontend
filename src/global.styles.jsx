import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Titillium Web', sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        overflow: hidden;
    }

    section, form {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    input {
        outline: none;

        &:focus {
            outline: none;
        }
    }

    a {
        text-decoration: none;
        color: #000;
        display:block;
    }

`
export const paddingStyles = css`
    padding: 0 3rem;

    @media all and (max-width: 800px) {
        padding: 0 2rem;
        @media all and (max-width: 500px) {
            padding: 0 1.5rem;
        }
    }
`
