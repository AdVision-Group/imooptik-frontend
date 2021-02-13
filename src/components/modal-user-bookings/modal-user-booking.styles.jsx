import styled from 'styled-components'
import CustomButton from "../custom-button/custom-button.component"
import SectionNavbar from "../section-navbar/section-navbar.component"


export const ModalContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99999;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0,0,0,0.3);
`

export const Modal = styled.div`
    width:100%;
    max-width: 65rem;
    max-height: 60rem;

    overflow-y: scroll;

    padding: 2rem;
    border-radius: .5rem;
    background-color: var(--background-primary-color);
    color: var(--primary-text-color);

    position: relative;
    z-index: 999999;

    h2{ 
        margin-bottom: 2rem;
        text-align: center;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background:  var(--background-primary-color);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--primary-color);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--primary-color);
    }
`

export const CloseButton = styled.button`
    width: 100%;
    height: 100%;

    position: fixed;
    left: 0;
    right: 0;
    z-index: 99999;

    border: none;
    outline: none;
    opacity: 0;

    &:focus {
        outline: none
    }
`

export const SubmitButton = styled(CustomButton)`
    display: block;
    margin: 0 auto;
    background-color: var(--primary-color);
    font-weight: bolder;
`

export const Navbar = styled(SectionNavbar)`
    ul {
        justify-content: center;
    }
`

export const SearchTab = styled.div`
    button {
        margin-top: 2rem;
    }
`

export const UserTable = styled.div`
    p {
        text-align: center;
        opacity: .6;
    }
        margin-bottom: 3rem;
`

export const TableHead = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export const Tablebody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    cursor: pointer;
    align-content: center;
    margin-bottom: 1rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);

    transition: all .3s ease-out;

    &:hover {
        background-color: var(--primary-color); 
        font-weight: bolder;
        color: var(--button-font-color);
    }

`

export const TableCol = styled.div`
    padding: 2rem;
    text-align: center;
`

export const CustomSelect = styled.select`
    margin-top: 2rem;
    /* min-width: 16.5rem; */
    width: 100%;
    background-color: var(--input-background-color);
    color: var(--input-color);
    border: none;
    padding: .8rem .5rem .8rem .5rem;
    font-size: inherit;
    font-family: inherit;
    display: block;

    margin-bottom: 2rem;
`

export const DateContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr .4rem 1fr;
    grid-gap: 1rem;

    p {
        align-self: center;
    }
`