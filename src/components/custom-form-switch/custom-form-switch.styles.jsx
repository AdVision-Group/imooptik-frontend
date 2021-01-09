import styled from 'styled-components'
import CustomButton from '../../components/custom-button/custom-button.component'

export const Title = styled.h3`
    margin-top: 2rem;
    /* margin-bottom: 2rem; */
`

export const ToggleOptionsContainer = styled.div`
    display: flex;
    width: 25rem;
    justify-content: space-between;
    margin: 2rem auto;
`

export const ToggleFormButton = styled(CustomButton)`
    background-color: ${({ isActive }) => isActive ? "rgb(235, 172, 1)" : "#000"};
    font-weight: 700;
`