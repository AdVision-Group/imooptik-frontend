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
    max-width: 50rem;
    max-height: 60rem;

    overflow-y: scroll;

    /* display: flex;
    flex-direction: column;
    align-items: center; */

    padding: 2rem;
    border-radius: .5rem;
    background-color: var(--body-background-primary-color);
    color: var(--primary-text-color);

    position: relative;
    z-index: 999999;

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

export const UploadButton = styled.label`
    input[type="file"] {
        position: absolute;
        left: -999999999rem;
    }
    cursor: pointer;
        background-color: transparent;

    max-width: 18rem;
    font-size: 1.4rem;
    font-family: inherit;
    font-weight: bolder;
    padding: .8rem 1rem;
    text-align: center;
    display: block;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    transition: background-color .1s ease-out,
                color .2s ease-out;
    outline: none;
    margin: 0 auto 2rem;

    &:focus {
        outline:none;
    }

    &:hover {
        background-color: var(--primary-color);
        color: var(--button-font-color);
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

    /* width: 100%; */
    /* overflow-x: scroll; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 2rem auto;
`

export const ImageContainer = styled.div`
    position: relative;
    cursor: pointer;
    width: 20rem;
    margin: 1rem 0;

    &:hover button {
        display: block
    }

    /* &:not(:last-child) {
        margin-right: 1.5rem;
    } */

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
    background-color: var(--color-red);
    color: #fff;
    padding: .5rem .75rem;
    font-size: 1rem;
    right: .5rem;
    top: .5rem;

    outline: none;

    &:focus {
        outline: none;
    }
`

export const ImagePreviewContainer = styled.div`
    display: block;
    width: 100%;

    img {
        display: block;
        max-width: 100%;
        /* width: inherit; */
    }
`

export const TabOptions = styled.div`
    max-width: 18rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`

export const TabButton = styled.button`
    cursor: pointer;
    outline:none;
    border: none;
    background-color: ${({ isActive }) => isActive ? "var(--primary-color)" : "var(--body-background-primary-color)"};
    color: ${({ isActive }) => isActive ? "var(--button-font-color)" : "var(--primary-text-color)"} ;
    font-weight: ${({ isActive }) => isActive ? "700" : "400"};
    font-family: inherit;
    font-size: 1.2rem;
    padding: .8rem 1.5rem;
    border-radius: .2rem;
    margin-bottom: 2rem;
    transition: all .3s ease-out;

    &:focus {
        outline: none;
    }
`

export const CropButton = styled(CustomButton)`
    display: block;
    margin: 2rem auto 0;

    &:disabled {
        cursor: not-allowed;
        background-color: gray;
    }
`

export const ButtonOptions = styled.div`
    display: flex;
    justify-content: center;
`

export const FetchButtons = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    padding: .4rem 1rem;
    border-radius: 50%;
    color: var(--button-font-color);
    background-color: var(--color-black);
    font-size: 1.2rem;
    font-family: inherit;
    margin: 0 .5rem;

    &:focus {
        outline: none;
    }
`