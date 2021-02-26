import styled from "styled-components"
import CustomButton from '../../components/custom-button/custom-button.component'


export const Filterbutton = styled.button`
    cursor: pointer;
    background-color: var(--body-background-primary-color);
    color: var(--primary-color);
    font-weight: bolder;
    padding: .5rem 2rem;
    margin-left: 1rem;
`

export const ResetButton = styled.button`
    cursor: pointer;
    color: var(--color-red);
    /* font-weight: bolder; */
    padding: .5rem 2rem;
`

export const PublicButton = styled(CustomButton)`
    font-size: 1.2rem;
    background-color: var(--primary-color);
    font-weight: bolder;

    :not(:last-child) {
        margin-right: 1rem;
    }
`