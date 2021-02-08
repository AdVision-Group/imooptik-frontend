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

        --container-shadow: 0 0 1.5rem 0 rgba(0,0,0,.08);

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

    }
`

export const DarkThemeColors = createGlobalStyle`
    :root {
        --primary-color: #a57f16;
        --secondary-color: #000;
        --primary-text-color: #eee;
        --secondary-text-color: #ddd;
        --body-background-primary-color: #252525;
        --background-primary-color: #2c2c2c;

        --container-shadow: 0 0 1.5rem 0 rgba(0,0,0,.15);

        --backbutton-color: #a57f16;
        --dropdownbutton-background-color: #121212;
        --dropdownbutton-color: #a57f116;
        --dropdown-background-color: #121212;
        --dropdown-hover-background-color: #181818;

        --input-background-color: #121212;
        --input-color: #eee;

        --image-background-color: #252525;


        --button-font-color: #fff;
        --secondary-button-font-color: #a57f116;

        --color-red: #DD4C4C;
        --color-green: #32AA5F;
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