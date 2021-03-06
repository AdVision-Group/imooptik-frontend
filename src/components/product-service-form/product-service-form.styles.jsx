import styled from 'styled-components'
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component'

export const BrandedCheckbox = styled(CustomCheckbox)`
    margin-top: 2rem;
`

export const ServiceFormContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    align-items: start;
    padding-bottom: 10rem;

`

export const ServiceContainer = styled.div`
    padding: 2rem; 
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
    border-radius: .5rem;
`

export const ImageContainer = styled.div`
    margin-top: 2rem;
    
`

export const ProductImage = styled.div`
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content:center;
    background-color: ${({ hasImage }) => hasImage ? "transparent" : "var(--input-background-color)"};
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