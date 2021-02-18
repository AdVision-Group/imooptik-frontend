import styled from 'styled-components'
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component'

export const CartTableRow = styled.div`
    cursor: pointer;
    display:grid; 
    align-items: center;
    grid-template-columns: 5rem 2fr 2fr 2fr 2fr;
    background-color: var(--background-primary-color);
    /* border: .05rem solid var(--secondary-text-color); */

    border: ${({ isSelected }) => isSelected ? ".05rem solid var(--primary-color)" : ".05rem solid transparent"};
`

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