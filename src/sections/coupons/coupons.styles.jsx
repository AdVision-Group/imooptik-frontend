import styled from 'styled-components'
import CustomButton from '../../components/custom-button/custom-button.component'

export const CouponOverviewContainer = styled.div`
    padding: 2rem;
    box-shadow: var(--container-shadow);
    border-radius: .5rem;

    margin-bottom: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        opacity: .63;
        font-size: 1.4rem;
    }
`

export const DeleteButton = styled(CustomButton)`
    background-color: var(--color-red);
    margin-left: .5rem;
    font-size: 1.2rem;
`
export const OpenButton = styled(CustomButton)`
    font-size: 1.2rem;
`

export const TableCol = styled.div`
    /* width: 50rem; */
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

export const TableContainer = styled.div`
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

