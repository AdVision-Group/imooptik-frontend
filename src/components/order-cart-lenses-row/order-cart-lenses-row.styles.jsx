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


export const QuantityContainer = styled.div`
    display: flex;
    align-items: center;

    button {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .5rem;
        color: var(--primary-color);
    }

    p {
        font-size: 1.6rem;
    }
`

export const CartTableRow = styled.div`
    cursor: pointer;
    display:grid; 
    align-items: center;
    grid-template-columns: 5rem 2fr 2fr 2fr 1fr 2fr;
    background-color: var(--background-primary-color);
    /* border: .05rem solid var(--secondary-text-color); */

    border: ${({ isSelected }) => isSelected ? ".05rem solid var(--primary-color)" : ".05rem solid transparent"};

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