import styled from "styled-components"
import CustomButton from '../custom-button/custom-button.component'

export const ProductContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 15rem 1fr 25rem;
    grid-template-rows: 1fr auto;
    grid-template-areas:    "i c p"
                            "i c o";


    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
    padding: 2rem;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }

    @media all and (max-width: 800px) {
        grid-template-columns : 20rem 1fr;
        grid-template-rows: 1fr 1fr;

        @media all and (max-width: 500px) {
            grid-template-columns : 1fr;
        }
    }

`

export const ProductImage = styled.div`
    /* width: 100%; */
    /* height: 100%; */
    background-color: var(--image-background-color);
    border-radius: .5rem;
    padding: 1rem;
    margin-right: 2rem;
    grid-area: i;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: start;
    }  

    @media all and (max-width: 800px) {
        align-self: start;
        grid-row-start: 1;
        grid-row-end: 3;   

        @media all and (max-width: 500px) {
            justify-self: center;
            margin-bottom: 2rem;
        }

    }
`

export const ProductContent = styled.div`
    grid-area: c;

    h2 {
        font-size: 1.6rem;
    }
`

export const ProductId = styled.p`
    font-size: 1.2rem;
    color: var(--secondary-text-color);
    margin-bottom: 2rem;
`

export const StockInfo = styled.p`
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-green);
    margin-bottom: 1rem;
`

export const Price = styled.p`
    font-weight: 700;
    font-size: 1.8rem;
`

export const PriceContainer = styled.div`
    grid-area: p;

    text-align:end;
    align-self: center;
    justify-self: end;
`
export const Options = styled.div`
    grid-area: o;

    align-self: end;
    justify-self: end;
`

export const UpdateButton = styled(CustomButton)`
    font-size: 1.2rem;
    margin-right: 1rem;
`

export const DeleteButton = styled(CustomButton)`
    font-size: 1.2rem;
    background-color: var(--primary-color);
`