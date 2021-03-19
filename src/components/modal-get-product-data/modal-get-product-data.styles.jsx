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

export const SearchButton = styled(CustomButton)`
    display: block;
    margin-left: auto;
    margin-top: 2rem;
    background-color: var(--primary-color);
`


export const TableContainer = styled.div`
    margin: 5rem 0;
    overflow-x: auto;

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

export const TableCol = styled.div`
    min-width: inherit;
    padding: 2rem;
    text-align: center;
    background-color: ${({ isHead }) => !isHead ? "var(--container-background-color)" : "unset"};
    border-bottom: ${({ isHead }) => isHead ? "1px solid var(--secondary-text-color)" : "unset"};

    img {
        width: 5rem;
    }

`

export const ProductTableHead = styled.div`
    width: 100%;

    display: grid;
    align-items: center;
    grid-template-columns: 15rem 10rem 35rem 20rem 10rem 20rem;
    font-weight: bolder;

`
export const ProductTableRow = styled.div`
    cursor: pointer;
    display: grid;
    align-content: center;
    grid-template-columns: 15rem 10rem 35rem 20rem 10rem 20rem;
    margin-bottom: 1rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);

    transition: all .3s ease-out;


    &:hover {
        ${TableCol} {
            background-color: var(--primary-color);
            font-weight: bolder;
            color: var(--button-font-color);
        }
    }


`