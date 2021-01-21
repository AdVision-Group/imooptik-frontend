import styled from 'styled-components'
import { paddingStyles } from '../../global.styles'
import CustomButton from '../../components/custom-button/custom-button.component'

export const Header = styled.div`
    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: space-between;
`

export const CustomSelect = styled.select`
    margin-top: 1.5rem;
    min-width: 16.5rem;
    width: 100%;
    background-color: #F5F5F5;
    border: none;
    padding: .5rem .5rem .5rem 1rem;
    font-size: inherit;
    font-family: inherit;
    display: block;
`

export const SubmitButton = styled(CustomButton)`

`
export const DeleteButton = styled(CustomButton)`
    background-color: #DD4C4C;

`