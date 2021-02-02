import styled from 'styled-components'
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component'
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
    background-color: white;

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

export const DiscountCheckbox = styled(CustomCheckbox)`
    margin-top: 1rem;
    margin-right: 2rem;
`

export const ProductContainer = styled.div`
    /* background-color: gray; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

    img {
        width: 20rem;
        
    }

    span {
        opacity: .6;
        font-size: 1.2rem;
        display: block;
        text-align: center;
    }

    p {
        font-weight: bolder;
        font-size: 2rem;
    }
`

export const AddButton = styled(CustomButton)`
    display: block;
    margin: 2rem auto 0;
`

export const DiscountCheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;


    label {
        display: block;
        outline: none;
        margin-left: 1rem;

        &:focus {
            outline: none;

        }
    }

    input: {
        display: block;
    }
`