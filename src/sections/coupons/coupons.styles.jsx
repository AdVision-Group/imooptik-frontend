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


export const TableContainer = styled.div`

`

export const TableHead = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 5rem 1fr 1fr 10rem 30rem;

    border-bottom: 1px solid var(--secondary-text-color);
    font-weight: bolder;
`

export const TableRow = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 5rem 1fr 1fr 10rem 30rem;
    margin-bottom: 1rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
    transition: all .3s ease-out;
`

export const TableCol = styled.div`
    padding: 2rem;
    text-align: center;
`