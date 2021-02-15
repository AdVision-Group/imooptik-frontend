import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'
import { paddingStyles } from '../../global.styles'


export const NavbarContainer = styled.div`
    margin-bottom: 3rem;
    ${paddingStyles}

    ul {
        display: flex;
        list-style: none;

        li {
            margin-right: 1.5rem;
        }
    }
`

export const NavButton = styled(CustomButton)`
    transition: all 0.3s ease-out;
    background-color: ${({ active }) => active ? 'var(--primary-color)' : 'var(--background-primary-color)'};
    color: ${({ active }) => active ? '#fff' : 'var(--primary-text-color)'};
    font-weight: ${({ active }) => active ? 400 : 700};
    padding: ${({ active }) => active ? ".5rem 2.5rem" : ".5rem 1rem .5rem 0"};
    font-weight: ${({ active }) => active ? "bolder" : "normal"};
`