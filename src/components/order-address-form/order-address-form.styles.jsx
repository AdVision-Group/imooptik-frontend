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

    /* overflow-y: scroll; */

    /* display: flex;
    flex-direction: column;
    align-items: center; */

    padding: 2rem;
    border-radius: .5rem;
    background-color: white;

    position: relative;
    z-index: 999999;

`

export const Title = styled.h2`
    text-align: center;
`

export const SubmitAddressButton = styled(CustomButton)`
    display: block;
    margin: 3rem auto 0;
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