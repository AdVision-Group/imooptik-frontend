import styled from 'styled-components'
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component'



export const TableCol = styled.div`
    padding: 2rem;
    text-align: center;

    input {
        text-align: end;
        background-color: var(--input-background-color);
        color: var(--input-color);
        font-size: 1.5rem;
        padding: 1rem 1rem 1rem 2rem;
        display: block;
        width: 100%;
        border: none;
        border-radius: .5rem;
        /* border-bottom: 1px solid #000; */
        font-family: inherit;
    }

`

export const CartTableRow = styled.div`
    display:grid; 
    align-items: center;
    grid-template-columns: 5rem 2fr 2fr 2fr 1fr;
    background-color: var(--background-primary-color);
    /* border: .05rem solid var(--secondary-text-color); */

    &:hover  ${TableCol}{
        position: relative;
        :nth-of-type(1) {
            cursor: pointer;
            ::after {
                content: "X";
                position: absolute;
                padding: .5rem 1rem;
                border-radius: 50%;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background-color: var(--color-red);
                color: var(--button-font-color);
                font-size: 1.2rem;
            }
        }
    }
`

export const IconContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    font-size: 2rem;
`

export const OptionsContainer = styled.div`
    grid-column: 1/6;

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

    &:focus {
        outline: none;
    }
`

export const ContactLensesParameterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin: 0 1rem 2rem;
    padding: 0 1rem;
`

export const EmptyTittle = styled.h4`
    padding: 0 2rem;
    opacity: .6;
`