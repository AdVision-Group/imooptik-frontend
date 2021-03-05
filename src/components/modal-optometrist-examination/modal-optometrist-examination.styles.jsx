import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component'


export const ModalContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99999;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0,0,0,0.3);
`

export const Modal = styled.div`
    width:100%;
    max-width: 65rem;
    max-height: 60rem;
    color: var(--primary-text-color);

    overflow-y: scroll;

    padding: 2rem;
    border-radius: .5rem;
    background-color: var(--background-primary-color);

    position: relative;
    z-index: 999999;

    h3 {
        margin-bottom: 2rem;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background:  var(--background-primary-color);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--primary-color);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--primary-color);
    }
`

export const CloseButton = styled.button`
    width: 100%;
    height: 100%;

    position: fixed;
    left: 0;
    right: 0;
    z-index: 99999;

    border: none;
    outline: none;
    opacity: 0;

    &:focus {
        outline: none
    }
`

export const SubmitButton = styled(CustomButton)`
    background-color: var(--primary-color);
    font-weight: bolder;
    display: block;
    margin: 2rem auto 0;
`

export const Container = styled.div`
    margin-bottom: 2rem;
    h4 {
        margin-bottom: 1rem;
    }

    div {
    }
`

export const ExamTypeCheckbox = styled(CustomCheckbox)`
    margin-right: 1rem;
`

export const IsSuitableCheckbox = styled(CustomCheckbox)`
    margin-top: 2.2rem;
`

export const TwoColContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
`

export const InputContainer = styled.div`
    margin-bottom: 2rem;
`

export const Table = styled.div`
    display: grid;
    grid-template-columns: 4rem repeat(7, 1fr);
`

export const ObjectiveRefTable = styled.div`
    display: grid;
    grid-template-columns: 4rem repeat(4, 1fr);
`

export const SubjectiveRefTable = styled.div`
    display: grid;
    grid-template-columns: 4rem repeat(9, 1fr);
`

export const RefractTable = styled.div`
    display: grid;
    grid-template-columns: 4rem repeat(4, 1fr);
`
export const KerathTable = styled.div`
    display: grid;
    grid-template-columns: 4rem repeat(2, 1fr);
`
export const SubjectiveRefATable = styled.div`
    display: grid;
    grid-template-columns: 4rem repeat(6, 1fr);
`
export const ContactLensesTable = styled.div`
    display: grid;
    grid-template-columns: 4rem repeat(8, 1fr);
`
export const ContactLensesTypeTable = styled.div`
    display: grid;
    grid-template-columns: 4rem repeat(4, 1fr);
`

export const ExamTable = styled.div`
    display: grid;
    grid-template-columns: 4rem repeat(5, 1fr);
`

export const TableTitleCol = styled.div`
    padding: 1rem;
`

export const TableCol = styled.div`

`

export const Col = styled.div`
    text-align: center;
    margin: 1rem;
    height: 4rem;
    color: ${({ isActive }) => isActive ? "var(--primary-color)" : "var(--input-color)"};


    input {
        display:block;
        width: 100%;
        border: none;
        padding: 1rem .5rem;
        text-align: center;
        font-family: inherit;
        font-size: inherit;
        background-color: var(--input-background-color);
        color: var(--input-color);
        border-radius: .5rem;
        outline: none;
        &:focus {
            outline: none;
        }
        &:disabled {
            opacity: .83;
        }
    }

    /* clickable */

    ${({ clickable }) => clickable && `
        cursor: pointer;
        
        &:hover {
            color: var(--primary-color);
        }
    `}
`

export const TableBlock = styled.div`

`