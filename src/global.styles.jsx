import styled, { createGlobalStyle, css } from 'styled-components'

/* --primary-color: #ebac01;
--secondary-color: #000;
--primary-text-color: #251919;
--secondary-text-color: #fff;
--body-background-primary-color: #f5f5f5;
--background-primary-color: #fff; */

export const DefaultThemeColors = createGlobalStyle`
    :root {
        --primary-color: #ebac01;
        --secondary-color: #000;
        --primary-text-color: #000000;
        --secondary-text-color: rgba(0, 0, 0, 0.822);
        --body-background-primary-color: #f5f5f5;
        --background-primary-color: #fff;

        --navlink-color: #ffffff;

        --container-shadow: 0 0 1.5rem 0 rgba(0,0,0,.08);
        --container-background-color: #fff;

        --backbutton-color: #ebac01;
        --dropdownbutton-background-color: #f5f5f5;
        --dropdownbutton-color: #ebac01;
        --dropdown-background-color: #fff;
        --dropdown-hover-background-color: #f5f5f5;

        --input-background-color: #f5f5f5;
        --input-color: #000;

        --image-background-color: none;

        --button-font-color: #fff;
        --secondary-button-font-color: #000;

        --color-red: #DD4C4C;
        --color-green: #32AA5F;
        --color-black: #000;
    }
`

export const DarkThemeColors = createGlobalStyle`
    :root {
        --primary-color: #c28e01;
        --secondary-color: #000;
        --primary-text-color: #c7c6c6;
        --secondary-text-color: #a0a0a0;
        --body-background-primary-color: #252525;
        --background-primary-color: #2c2c2c;

        --navlink-color: #c7c6c6;

        --container-shadow: none;
        --container-background-color: #252525;

        --backbutton-color: #c28e01;
        --dropdownbutton-background-color: #121212;
        --dropdownbutton-color: #c28e01;
        --dropdown-background-color: #121212;
        --dropdown-hover-background-color: #181818;

        --input-background-color: #121212;
        --input-color: #c5c4c4;

        --image-background-color: #252525;


        --button-font-color: #fff;
        --secondary-button-font-color: #a57f116;

        --color-red: #DD4C4C;
        --color-green: #32AA5F;
        --color-black: #000;

    }
`


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
        background-color: var(--body-background-primary-color);
    }

    section, form {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: var(--background-primary-color);
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

    button {
        font-size: inherit;
        font-family: inherit;
        border: none;
        background-color: transparent;
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

export const SwitchButton = styled.button`
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    bottom: 3rem;
    right: 3rem; 
    width: 5rem;
    height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--primary-color);
    font-size: 3rem;
    color: var(--button-font-color);
    border-radius: 50%;
`