import styled from 'styled-components'

export const OrdersTable = styled.div`
    min-width: 65rem;
    /* margin-bottom: 10rem; */
`

export const TableHead = styled.div`
    display: grid;
    grid-template-columns: 10rem 2fr 2fr 1fr 10rem;
    border-bottom: 1px solid #000;
    font-weight: bolder;
`

export const OrderOverviewRow = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 10rem 2fr 2fr 1fr 10rem;
    align-content: center;
    margin-bottom: 1rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
`

export const TableCol = styled.div`
    position: relative;
    padding: 2rem;
    text-align: center;
`

export const DeligateCol = styled(TableCol)`
    cursor: pointer;
    padding: 1rem;
    transition: background-color .3s ease-out; 
`

