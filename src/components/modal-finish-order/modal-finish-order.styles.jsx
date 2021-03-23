import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component'

export const Modal = styled.div`
    position: relative;
    /* z-index: 999999; */

    h2{ 
        margin-top: 2rem;
    }
    h4{ 
        margin-top: 2rem;
    }
`

export const AddButton = styled(CustomButton)`
    margin: 2rem 0 0;
    background-color: var(--primary-color);
    font-weight: bolder;
`

export const CustomSelect = styled.select`
    margin-top: 1.5rem;
    min-width: 16.5rem;
    width: 100%;
    background-color: var(--input-background-color);
    color: var(--input-color);
    border: none;
    padding: .5rem .5rem .5rem 1rem;
    font-size: inherit;
    font-family: inherit;
    display: block;
    outline: none;
    margin-bottom: 2rem;

    &:focus {
        outline: none;
    }
`

export const OptionsCheckbox = styled(CustomCheckbox)`
    margin-top: 2rem;
    margin-right: 2rem;
`

export const OverwriteAddressCheckbox = styled.div`
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

export const CouponValueContainer = styled.div`
    margin-bottom: 2rem;
`