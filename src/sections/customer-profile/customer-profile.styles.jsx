import styled from 'styled-components'
import CustomButton from '../../components/custom-button/custom-button.component'

import { paddingStyles } from '../../global.styles'

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;
`

export const DeleteProfileButton = styled(CustomButton)`
    background-color: #DD4C4C;
    font-size: 1.4rem;
`


export const SaveButton = styled(CustomButton)`
    margin-left: 2rem;
    font-size: 1.4rem;
    background-color: rgb(235, 172, 1);
    font-weight: bolder;
`
