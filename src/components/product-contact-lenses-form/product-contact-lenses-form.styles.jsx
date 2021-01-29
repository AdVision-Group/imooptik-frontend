import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const ImageContainer = styled.div`
    margin-top: 2rem;
    
`

export const ProductImage = styled.div`
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content:center;
    background-color: ${({ hasImage }) => hasImage ? "transparent" : "#eee"};
    margin: 3rem 0 2rem;
    min-height: 20rem;
    position: relative;
    /* max-width: 45rem; */

    img {
        width: 100%;
        object-fit:cover;
        object-position:center;
        left: 0;
        top: 0;
    }
`

export const ContactLensesFormContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    align-items: start;
`

export const ContactLensesContainer = styled.div`
    padding: 2rem; 
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    border-radius: .5rem;
`

export const ContactLensesParametersContainer = styled.div`
    padding: 2rem; 
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    border-radius: .5rem;
    margin-bottom: 3rem;

    h4 {
        margin-top: 1rem;
    }
`

export const IncreaseButton = styled(CustomButton)`
    margin-top: 2rem;
    font-size: 1.4rem;

`

export const StockContainer = styled.div`
    padding: 2rem; 
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    border-radius: .5rem;
`