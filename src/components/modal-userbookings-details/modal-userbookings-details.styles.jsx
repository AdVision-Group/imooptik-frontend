import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

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
        /* text-align: center; */
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

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    grid-gap: 3rem;
    margin-bottom: 3rem;

`

export const BlockContainer = styled.div`
    padding: 1rem;
    background-color: var(--body-background-primary-color);

    h3 {
        font-size: 1.3rem;
        font-weight: lighter;
        opacity: .8;
        margin-bottom: .5rem;
    }

    p {
        font-size: 1.8rem;
        margin-left: 2rem;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`

export const CancelButton = styled(CustomButton)`
    display: block;
    background-color: var(--primary-color);
    font-weight: bolder;
`

export const Container = styled.div`
    ${BlockContainer} {
        margin-bottom: 3rem;
    }
`