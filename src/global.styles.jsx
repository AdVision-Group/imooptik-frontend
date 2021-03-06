import styled, { createGlobalStyle, css } from 'styled-components'

export const theme = {
    primary: "#ebac01",
    backgroundPrimary: "#f5f5f5",
    backgroundSecondary: "#fff",
    fontPrimary: "#000000",
    fontSecondary: "#000000",
    white: "#fff",
    red: "#ED4C67",
    black: "#000",
    green: "#009432",
    gray: "rgba(0,0,0,0.6)",
    ctaButtonColor: "#fff",
    ctaButtonBackground: "#BFD600",

  
    "dashboard-sm": "40.063em",
    "dashboard-m": "64.063em",
    "blog-sm": "40.063em",
    "blog-m": "64.063em",
    "new-blog-sm": "40.063em",
    "new-blog-m": "64.063em",
  }

export const DefaultThemeColors = createGlobalStyle`
    :root {
        --primary-color: #ebac01;
        --secondary-color: #000;
        --primary-text-color: #000000;
        --secondary-text-color: rgba(0, 0, 0, 0.822);
        --body-background-primary-color: #f5f5f5;
        --background-primary-color: #fff;

        --link-color: #000;

        --navlink-color: #ffffff;
        --table-head-color: #ffffff;
        --table-border: 1px solid rgba(0,0,0,0.1);

        --appointment-container-border: none;
        --appointment-container-background-color: #eee;
        --appointment-container-text-color: #fff;

        --container-shadow: 0 0 1.5rem 0 rgba(0,0,0,.08);
        --container-background-color: #fff;

        --container-background-table-row: #f5f5f5;
        --container-background-table-row-odd: #fff;


        --backbutton-color: #ebac01;
        --dropdownbutton-background-color: #f5f5f5;
        --dropdownbutton-background-color-odd: #fff;
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

        --calendar-indicator: invert(-1);

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

        --link-color: #fff;

        --navlink-color: #c7c6c6;
        --table-head-color: #c7c6c6;
        --table-border: 1px solid rgba(0,0,0,0.1);

        --appointment-container-border: none;
        --appointment-container-background-color: #333;
        --appointment-container-text-color: #ffffff;


        --container-shadow: none;
        --container-background-color: #252525;
        
        --container-background-table-row: #252525;
        --container-background-table-row-odd: #2c2c2c;

        --backbutton-color: #c28e01;
        --dropdownbutton-background-color: #121212;
        --dropdownbutton-background-color-odd: #121212;

        --dropdownbutton-color: #c28e01;
        --dropdown-background-color: #121212;
        --dropdown-hover-background-color: #181818;

        --input-background-color: #121212;
        --input-color: #c5c4c4;

        --image-background-color: #252525;


        --button-font-color: #fff;
        --secondary-button-font-color: #c28e01;

        --color-red: #d63636;
        --color-green: #32AA5F;
        --color-black: #000;

        --calendar-indicator: invert(1);
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

    input, button {
        outline: none;

        &:focus {
            outline: none;
        }

        ::-webkit-calendar-picker-indicator {
            filter: var(--calendar-indicator);
        }
    }

    a {
        text-decoration: none;
        color: var(--link-color);
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

export const FlexContainer = styled.div`
    ${paddingStyles};    
    /* margin-bottom: 3rem; */
    /* max-width: 125rem; */
`

export const FixedContainer = styled.div`
    max-width: 125rem;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 600px) {
        flex-wrap: wrap;
    }
`