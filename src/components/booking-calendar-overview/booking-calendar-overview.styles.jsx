import styled from "styled-components"
import CustomButton from '../custom-button/custom-button.component'

export const ContainerOverview = styled.div`
    padding: 2rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);

    &:not(:last-child) {
        /* margin-right: 2rem; */
    }

    h3  { 
        font-size: 1.8rem;
    }

    p {
        font-size: 1.4rem;
        color: gray;
    }
`

export const Options = styled.div`
    display: flex;
`

export const ShowButton = styled(CustomButton)`
    margin-top: 2rem;
    font-size: 1.4rem;
    display: block;
    background-color: ${({ isActive }) => isActive ? "rgb(235, 172, 1)" : "#eee"};
    font-weight: bolder;
    color: ${({ isActive }) => isActive ? "#fff" : "#000"};
`
export const UpdateButton = styled(CustomButton)`
    margin-top: 2rem;
    font-size: 1.4rem;
    display: block;
    margin-left: 2rem;;
`
