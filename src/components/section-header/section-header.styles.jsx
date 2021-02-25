import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'
import { paddingStyles } from '../../global.styles'

export const HeaderContainer = styled.div`
    color: var(--primary-text-color);
    margin-bottom: 3rem;
    ${paddingStyles};    
    /* max-width: 125rem; */


`

export const FixedContainer = styled.div`
    max-width: 125rem;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 600px) {
        flex-wrap: wrap;
    }
`

export const Left = styled.div`
    margin-top: 2rem;

    display: flex;
    align-items: center;

`

export const Right = styled.div`
    display: flex;
    align-items: center;
`

export const Notification = styled.div`
    background-color: var(--color-red);
    margin-left: 1.5rem;
    color: var(--primary-text-color);
    padding: .5rem 1rem;
    border-radius: 1.5rem;
    font-size: 1.4rem;
`


export const SearchButton = styled(CustomButton)`
    margin-top: 2rem;

    margin-left: 2rem;
`

export const AddButton = styled(CustomButton)`
    margin-top: 2rem;
    margin-left: 1rem;
    background-color: var(--primary-color);
    font-weight: bolder;
`