import styled from 'styled-components'
import CustomButton from '../../components/custom-button/custom-button.component'

import { paddingStyles } from '../../global.styles'

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;

    color: var(--primary-text-color);
`

export const DeleteProfileButton = styled(CustomButton)`
    background-color: var(--color-red);
    font-size: 1.4rem;
    margin-left: 2rem;
`


export const SaveButton = styled(CustomButton)`
    margin-left: 2rem;
    font-size: 1.4rem;
    background-color: var(--primary-color);
    font-weight: bolder;
`