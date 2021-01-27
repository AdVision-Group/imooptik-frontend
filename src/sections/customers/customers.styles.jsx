import styled from 'styled-components'
import CustomButton from '../../components/custom-button/custom-button.component'

export const TableContainer = styled.div`

`

export const TableHead = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 2fr 25rem;
    border-bottom: 1px solid #000;
    font-weight: bolder;
`

export const TableCol = styled.div`
    padding: 2rem;
    text-align: center;
`

export const TableRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 25rem;
    align-content: center;
    margin-bottom: 1rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
`


export const UpdateButton = styled(CustomButton)`
    font-size: 1.4rem;
    margin-right: 1rem;
    padding: .5rem 1.8rem;
`

export const DeleteButton = styled(CustomButton)`
    font-size: 1.4rem;
    background-color: #DD4C4C;
    /* background-color: rgb(235, 172, 1); */
    padding: .5rem 1.8rem;
`