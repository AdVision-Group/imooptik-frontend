import styled from 'styled-components'
import { paddingStyles } from '../../global.styles'
import CustomButton from '../../components/custom-button/custom-button.component'
import CustomCheckbox from '../../components/custom-checkbox/custom-checkbox.component'

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;

`

export const SubmitButton = styled(CustomButton)`

`



export const CategoryContainer = styled.div`
    padding: 2rem; 
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    border-radius: .5rem;
    display: inline-block;
    margin-bottom: 3rem;

    h3 {
        margin-bottom: 1rem;
    }
`
export const CategoryCheckbox = styled(CustomCheckbox)`
    &:not(:last-child) {
        margin-right: 1rem;
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
