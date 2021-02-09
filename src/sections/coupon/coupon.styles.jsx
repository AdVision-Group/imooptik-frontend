import styled from 'styled-components'
import { paddingStyles } from '../../global.styles'
import CustomButton from '../../components/custom-button/custom-button.component'

export const Header = styled.div`
    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    color: var(--primary-text-color);
`

export const CustomSelect = styled.select`
    margin-top: 1.5rem;
    min-width: 16.5rem;
    width: 100%;
    background-color: var(--input-background-color);
    color: var(--input-color);
    border: none;
    padding: .5rem .5rem .5rem 1rem;
    font-size: inherit;
    font-family: inherit;
    display: block;
`

export const SubmitButton = styled(CustomButton)`

`
export const DeleteButton = styled(CustomButton)`
    background-color: var(--color-red);

`

export const GridRow = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3rem;
    align-items: start;
    justify-items: start;
`
export const GridCol = styled.div`
    padding: 2rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
    
`