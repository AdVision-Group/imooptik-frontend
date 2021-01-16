import styled from "styled-components"
import CustomButton from '../custom-button/custom-button.component'


export const CombinedProductContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;

    grid-template-areas:    "p c"
                            "d d";
    
    
    border-radius: .5rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
`

export const ProductsContainer = styled.div`
    grid-area: p;
    padding: 2rem;

`

export const PriceContainer = styled.div`
    grid-area: c;
    justify-self: end;
    text-align:end;
    padding: 2rem;

`

export const ParametersContainer = styled.div`
    grid-area: d;
    padding:  0 2rem 2rem;

    --gap: .5rem;
    display: flex;
    /* flex-wrap: wrap; */
    margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
    /* width: calc(100% + var(--gap)); */

    & > * {
        margin: var(--gap) 1rem 1rem var(--gap);
    }
`

export const RemoveButton = styled(CustomButton)`
    font-size: 1.2rem;
    padding: .3rem 1.5rem;
`
