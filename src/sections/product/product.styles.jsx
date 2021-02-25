import styled from 'styled-components'
import { paddingStyles } from '../../global.styles'
import CustomButton from '../../components/custom-button/custom-button.component'
import CustomCheckbox from '../../components/custom-checkbox/custom-checkbox.component'

export const Header = styled.div`
    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;
    color: var(--primary-text-color);

`

export const SubmitButton = styled(CustomButton)`

`

export const IsPublicCheckbox = styled(CustomCheckbox)`
    margin-right: 2rem;
`


export const CategoryContainer = styled.div`
    padding: 2rem; 
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
    border-radius: .5rem;
    display: inline-block;
    margin-bottom: 3rem;

    h3 {
        margin-bottom: 1.5rem;
    }
`
export const CategoryCheckbox = styled(CustomCheckbox)`
    &:not(:last-child) {
        margin-right: 2rem;
    }
`