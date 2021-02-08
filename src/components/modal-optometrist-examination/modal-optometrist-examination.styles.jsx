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

    /* display: flex;
    flex-direction: column;
    align-items: center; */

    padding: 2rem;
    border-radius: .5rem;
    background-color: var(--background-primary-color);

    position: relative;
    z-index: 999999;

    h3{ 
        margin-bottom: 2rem;
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

export const TableContainer = styled.div`
    display: grid;
    grid-template-columns: 3rem repeat(10, 1fr);
`

export const HeadTableCol = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 5rem);
    div {
        align-self: center;
        display:flex;
        justify-content: space-between;
    }
`

export const TableCol = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 5rem);
    div {
        text-align:center;
        align-self: center;
        margin-left: .5rem;
        font-size: 1.2rem;
    }
`
export const TableBlock = styled.div`
    input {
        display:block;
        width: 100%;
        border: none;
        padding: 1rem .5rem;
        text-align: center;
        font-family: inherit;
        font-size: inherit;
        background-color: var(--input-background-color);
        color: var(--input-color);
        border-radius: .5rem;
        outline: none;

        &:focus {
            outline: none;
        }

        &:disabled {
            opacity: .83;
        }
    }

`

export const TwoCols = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
`

export const SubmitButton = styled(CustomButton)`
    display: block;
    margin: 2rem auto 0;
`