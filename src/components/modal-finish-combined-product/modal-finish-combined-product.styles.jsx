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

export const CustomSelect = styled.select`
    margin-top: 1.5rem;
    min-width: 16.5rem;
    width: 100%;
    background-color: #F5F5F5;
    border: none;
    padding: .5rem .5rem .5rem 1rem;
    font-size: inherit;
    font-family: inherit;
    display: block;
    outline: none;

    &:focus {
        outline: none;
    }
`

export const ContactLensesParameterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin-bottom: 2rem;
`

export const LensesContainer = styled.div`
    cursor: pointer;
    width: 100%;
    max-width: 32rem;
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    text-align: center;
    transition: transform .3s ease-out,
                box-shadow .3s ease-out;

    &:last-child {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h4 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem
    }

    img {
        /* background-color:#000; */
        width: 15rem;
        height: 15rem;
        margin-bottom: 1rem; 
        object-fit: contain;
        object-position: center;
    }

    p {
        opacity: .65;
        &:not(:last-child){
            margin-bottom: .5rem;
        }
    }

    h5 {
        font-size: 2.5rem;
    }

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 0 2.5rem 0 rgba(0,0,0, 0.08);
    }
`

export const LensesImg = styled.div`
    background-color: lightgray;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    margin-bottom: 1.5rem;
`