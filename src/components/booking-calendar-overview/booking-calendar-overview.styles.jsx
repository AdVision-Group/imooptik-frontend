import styled from "styled-components"
import CustomButton from '../custom-button/custom-button.component'

export const ContainerOverview = styled.div`
    padding: 2rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);

    &:not(:last-child) {
        /* margin-right: 2rem; */
    }

    h3  { 
        font-size: 1.8rem;
    }

    p {
        font-size: 1.4rem;
        opacity: .83;

        span {
            font-weight: bolder;
        }
    }
`

export const Options = styled.div`
    display: flex;
`

export const ShowButton = styled(CustomButton)`
    margin-top: 2rem;
    font-size: 1.4rem;
    display: block;
    background-color: ${({ isActive }) => isActive ? "var(--primary-color)" : "var(--body-background-primary-color)"};
    font-weight: bolder;
    color: ${({ isActive }) => isActive ? "var(--primary-text-color)" : "var(--primary-color)"};
`
export const UpdateButton = styled(CustomButton)`
    margin-top: 2rem;
    font-size: 1.4rem;
    display: block;
    margin-left: 2rem;;
`
