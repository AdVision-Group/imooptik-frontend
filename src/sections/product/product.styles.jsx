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

export const IsPublicCheckbox = styled(CustomCheckbox)`
    margin-right: 2rem;
`


export const CategoryContainer = styled.div`
    padding: 2rem; 
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
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