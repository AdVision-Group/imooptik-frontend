import styled from 'styled-components'

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;

    position: fixed;
    left: 0;
    right: 0;
    z-index: 99999;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0,0,0,0.3);
`

export const Modal = styled.div`
    width:100%;
    max-width: 50rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem;
    border-radius: .5rem;
    background-color: white;

    position: relative;
    z-index: 999999;

`

export const UploadButton = styled.label`
    input[type="file"] {
        position: absolute;
        left: -999999999rem;
    }
    cursor: pointer;
    background-color: #000;
    color: #fff;
    max-width: 18rem;
    font-size: 1.4rem;
    font-family: inherit;
    padding: .8rem 1rem;
    text-align: center;
    display: block;
    border: 1px solid #000;
    transition: background-color .1s ease-out,
                color .2s ease-out;
    outline: none;

    &:focus {
        outline:none;
    }

    &:hover {
        background-color: transparent;
        color: #000;
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

export const FlexContainer = styled.div`
    /* max-width: 46rem; */

    width: 100%;
    overflow-x: scroll;
    display: flex;
    justify-content: start;
    margin-bottom: 2rem;
`

export const ImageContainer = styled.div`
    position: relative;
    cursor: pointer;
    min-width: 20rem;

    &:hover button {
        display: block
    }

    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    img {
        width:100%;
        height:100%;
        object-fit: contain;
        object-position: center;
    }
`

export const DeleteButton = styled.button`
    cursor: pointer;
    display:none;
    border-radius:50%;
    position: absolute;
    border: none;
    background-color: rgb(235, 172, 1);
    padding: .5rem .75rem;
    font-size: 1rem;
    right: .5rem;
    top: .5rem;

    outline: none;

    &:focus {
        outline: none;
    }
`