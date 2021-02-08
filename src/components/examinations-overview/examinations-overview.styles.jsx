import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const ExaminationsOverviewContainer = styled.div`

`

export const Header = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        margin: 2rem 0;
    }
`

export const ExaminationContainer = styled.div`
    border-radius: .5rem;
    padding: 2rem;
    /* box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08); */
    box-shadow: var(--container-shadow);

    margin-bottom: 2rem;
`

export const ExamHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ExamTableContainer = styled.div`
    display: grid;
    grid-template-columns: 3rem repeat(10, 1fr);
    font-size: 1.2rem;  
`

export const HeadTableCol = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 5rem);
    div {
        align-self: center;
        display:flex;
        justify-content: space-between;
    }
`

export const TableCol = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 5rem);

    div {
        text-align:center;
        align-self: center;
        margin-left: .5rem;

        &:not(:first-child) {
            background-color: var(--input-background-color);
            padding: .5rem;
            border-radius: .5rem;
            min-height: 2.5rem;
        }
    }
`
export const ExaminationOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const AddButton = styled(CustomButton)`
    font-size: 1.2rem;
`

export const UpdateButton = styled(CustomButton)`
    font-size: 1.2rem;
`

export const DeleteButton = styled(CustomButton)`
    font-size: 1.2rem;
    background-color: var(--color-red);
    margin-left: 1rem;

`