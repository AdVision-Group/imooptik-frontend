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
    max-width: 100rem;
    max-height: 80rem;

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

    h2 {
        margin-bottom: 2rem;
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
    margin-bottom: 2rem;

    &:focus {
        outline:none;
    }

    &:hover {
        background-color: var(--primary-color);
        color: var(--button-font-color);
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

export const NewImageContainer = styled.div`
    cursor: pointer;

    position: relative;
    min-width: 15rem;
    width: 15rem;
    height: 15rem;

    border: ${({ isPrimary }) => isPrimary ? '1px solid var(--primary-color)' : 'unset'};
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    &:hover ${DeleteButton} {
        display: block
    }
`

export const NewImagesContainer = styled.div`
    display: flex;
    gap: 3rem;
    overflow-x: auto;
    padding-bottom: 2rem;
    margin-bottom: 2rem;

`

export const SubmitButton = styled(CustomButton)`
    background-color: var(--primary-color);
    font-weight: bolder;
`

export const UploadImageButton = styled(CustomButton)`
    position: absolute;
    right: 1rem;
    top: 1rem;
`