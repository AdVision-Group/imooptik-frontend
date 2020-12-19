import styled from 'styled-components'
import CustomButton from '../../components/custom-button/custom-button.component'

export const OrderContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 25rem;

    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    padding: 2rem;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`

export const OrderContent = styled.div`
    h2 {
        font-size: 1.6rem;
    }
`

export const OrderId = styled.p`
    font-size: 1.2rem;
    color: gray;
    margin-bottom: 2rem;
`

export const Date = styled.p`
    font-size: 1.4rem;
    /* font-weight: 700; */
    color: gray;
    margin-bottom: 2rem;
`

export const Price = styled.p`
    font-weight: 700;
    font-size: 1.8rem;
`

export const Options = styled.div`
    align-self: end;
    justify-self: end;
`

export const UpdateButton = styled(CustomButton)`
    font-size: 1.4rem;
    margin-right: 1rem;
`

export const DeleteButton = styled(CustomButton)`
    font-size: 1.4rem;
    background-color: #DD4C4C;
`