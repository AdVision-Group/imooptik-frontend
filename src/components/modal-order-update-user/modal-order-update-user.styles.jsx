import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'
import { Profile } from '../user-form/user.form-styles'

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
    color: var(--primary-text-color);

    overflow-y: scroll;

    /* display: flex;
    flex-direction: column;
    align-items: center; */

    padding: 2rem;
    border-radius: .5rem;
    background-color: var(--background-primary-color);

    position: relative;
    z-index: 999999;

    ${Profile} {
        box-shadow: none;
    }

    h3{ 
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

export const UpdateButton = styled(CustomButton)`
    display: block;
    margin: 0 auto;
    background-color: var(--primary-color);
    font-weight: bolder;
`