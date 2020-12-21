import styled from 'styled-components'
import { paddingStyles } from '../../global.styles'
import CustomButtom from '../../components/custom-button/custom-button.component'

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
`

export const PostImage = styled.div`
    height: 30rem;
    background-color: #eee;
    margin-top: 3rem;
`

export const DeleteButton = styled(CustomButtom)`
    font-size: 1.4rem;
    margin-right: 2rem;
    background-color: #DD4C4C;
`
export const AddButton = styled(CustomButtom)`
    font-size: 1.4rem;
`