import styled from 'styled-components'
import CustomButton from '../../components/custom-button/custom-button.component'

export const Container = styled.div`
    /* width: 100%;
    overflow-x: scroll; */
`


export const TableCol = styled.div`
    min-width: 20rem;
    display: table-cell;
    padding: 2rem;
`

export const TableHead = styled.div`
    display: table-row;
    
    font-weight: bolder;
    position: sticky;
    top: -1.5rem;
    background-color: var(--background-primary-color);

    ${TableCol} {
        background-color: var(--background-primary-color);
        border-bottom: 1px solid var(--secondary-text-color);

    }

    @media all and (max-width: 920px) {
        font-size: 1.2rem
    }
`

export const TableRow = styled.div`
    display: table-row;

    /* box-shadow: var(--container-shadow); */
    background-color: var(--container-background-table-row);

    @media all and (max-width: 920px) {
        font-size: 1.2rem
    }

`

export const TableContainer = styled.table`
    width: 100%;
    /* min-width: 60rem; */

    display: table;
    overflow-x: scroll;
    border-collapse: collapse;
    border-spacing: 0;

    /* var(--container-background-table-row-odd) */

    ${TableRow} {
        :nth-child(even) {
            background-color: var(--container-background-table-row-odd);
        }
    }

`


export const UpdateButton = styled(CustomButton)`
    font-size: 1.4rem;
    margin-right: 1rem;
    padding: .5rem 1.8rem;
    background-color: var(--primary-color);
    font-weight: bolder;
`

export const DeleteButton = styled(CustomButton)`
    font-size: 1.4rem;
    background-color: var(--color-red);
    /* background-color: rgb(235, 172, 1); */
    padding: .5rem 1.8rem;
`