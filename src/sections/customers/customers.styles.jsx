import styled from 'styled-components'
import CustomButton from '../../components/custom-button/custom-button.component'

export const Container = styled.div`
    width: 100%;
`

export const TableContainer = styled.table`
    width: 100%;

`

export const TableCol = styled.div`
    padding: 2rem;
    /* text-align: center; */
`

export const TableHead = styled.div`
    /* min-width: 65rem; */
    width:100%;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 2fr 25rem;
    border-bottom: 1px solid var(--secondary-text-color);
    font-weight: bolder;
    position: sticky;
    top: -1.5rem;
    background-color: var(--background-primary-color);

    ${TableCol} {
        background-color: var(--background-primary-color);
    }

    @media all and (max-width: 920px) {
        font-size: 1.2rem
    }
`

export const TableRow = styled.div`
    /* min-width: 70rem; */

    display: grid;
    grid-template-columns: 1fr 2fr 25rem;
    align-items: center;

    margin-bottom: 1rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);

    @media all and (max-width: 920px) {
        font-size: 1.2rem
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