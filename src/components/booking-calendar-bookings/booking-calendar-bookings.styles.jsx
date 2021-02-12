import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    margin-bottom: 10rem;

    @media all and (max-width: 1150px) {
        grid-template-columns: 2fr 1fr;
        @media all and (max-width: 800px) {
            grid-template-columns: 3fr 1fr;
            @media all and (max-width: 500px) {
                grid-template-columns: 1fr;
            }
        }

    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin-bottom: 3rem;
`

export const AddButton = styled(CustomButton)`
    background-color: var(--primary-color);
    font-weight: bolder;
`

export const Container = styled.div`
    padding: 2rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
    border-radius: .5rem;
    margin-bottom: 3rem;
`

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`

export const ActiveSpan = styled.span`
    font-size: 1.2rem;
    color: ${({ isActive }) => isActive ? "var(--color-green)" : "var(--color-red)"};
`

export const ContainerBody = styled.div`
    opacity: .8;
    margin-bottom: 2rem;
`

export const ContainerOptions = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const DeleteButton = styled(CustomButton)`
    background-color: var(--color-red);
    font-size: 1.2rem;
    margin-left: 1rem;
`

export const UpdateButton = styled(CustomButton)`
    background-color: var(--primary-color);
    font-weight: bolder;
    font-size: 1.2rem;
`

export const InfoParagraph = styled.div`
    margin-left: 1rem;
    opacity: .6;
`