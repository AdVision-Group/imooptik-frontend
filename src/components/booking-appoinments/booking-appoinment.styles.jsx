import styled from 'styled-components'

export const TableHead = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 10rem 1fr 1fr 20rem 1fr 10rem;

    border-bottom: 1px solid var(--secondary-text-color);
    font-weight: bolder;
`


export const TableCol = styled.div`
    padding: 2rem;
    text-align: center;
`

export const TableRow = styled.div`
    display: grid;
    grid-template-columns: 10rem 1fr 1fr 20rem 1fr 10rem;
    align-items: center;
    margin-bottom: 1rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
`