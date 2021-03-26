import styled from 'styled-components'
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component'


export const LensesFormContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    align-items: start;
    padding-bottom: 10rem;


    @media all and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`

export const LensesContainer = styled.div`
    position: relative;
    /* width: 45rem; */
    padding: 2rem; 
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
    border-radius: .5rem;
    /* display: inline-block; */
    /* padding-bottom: 4rem;  */
    margin-bottom: 5rem;
`

export const LensesParametersContainer = styled.div`
    padding: 2rem; 
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);

    h3 {
        /* margin-bottom: 1rem; */
    }

    h4 {
        margin-top: 2rem;
    }
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
export const SubGridContainer = styled.div`

`

export const TypesContainer = styled.div`
    padding: 2rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
    margin-bottom: 3rem;

    h3 {
        margin-bottom: 1rem;
    }

    h4 {
        margin-top: 2rem;
    }

    div {
        :not(:last-child) {
            margin-bottom: 1rem;
        }
    }
`

export const TypeCheckbox = styled(CustomCheckbox)`
    &:not(:last-child) {
        margin-right: 2rem;
    }
`

export const CopyButton = styled.button`
    cursor: pointer;
    position: absolute;
    right: 2rem;
    top: 2rem;
    color: var(--primary-color);
`