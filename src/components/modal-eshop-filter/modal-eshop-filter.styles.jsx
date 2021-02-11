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
    overflow-y: scroll;

    padding: 2rem;
    border-radius: .5rem;
    background-color: var(--background-primary-color);
    color: var(--primary-text-color);

    top: 0;
    bottom: 0;
    right: 0;
    width: 45rem;

    position: fixed;
    z-index: 999999;

    h2{ 
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

export const Container = styled.div`
    margin-bottom: 3rem;

    :not(:nth-of-type(1)) {
        h3 {
            margin-bottom: 1rem;
        }
    }

    h4 {
        margin-bottom: 1rem;
    }

    div {
        margin-bottom: 1rem;
        margin-right: 1rem;
    }
`

export const OptionsContainer = styled.div`
    display:flex;
    justify-content: flex-end;
`

export const ApplyButton = styled(CustomButton)`
    font-weight: bolder;
    background-color: var(--primary-color);
    margin-left: 1rem;
`

export const ResetButton = styled(CustomButton)`
    background-color: var(--color-red);
`