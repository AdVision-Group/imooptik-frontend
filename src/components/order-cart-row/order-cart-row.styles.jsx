import styled from 'styled-components'
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component'

export const CartTableRow = styled.div`
    display:grid; 
    grid-template-columns: 5rem 3fr 2fr 1fr;
    background-color: var(--background-primary-color);
    /* border: .05rem solid var(--secondary-text-color); */
`

export const TableCol = styled.div`
    padding: 2rem;
    text-align: center;

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
    grid-column: 1/5;

`

export const DiscountContainer = styled.div`
    padding: 1rem 1rem;
    margin: 0 1rem 1rem;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: .05rem solid var(--secondary-text-color);


`

export const DiscountCheckbox = styled(CustomCheckbox)`
    margin-top: 1rem;
    margin-right: 2rem;


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