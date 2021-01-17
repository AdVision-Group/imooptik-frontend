import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const OrderContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 25rem;

    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    padding: 2rem;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }

    @media all and (max-width: 800px) {
        grid-template-columns: 1fr;

    }
`

export const OrderContent = styled.div`

    h2 {
        font-size: 1.6rem;
    }
`

export const Options = styled.div`
    align-self: end;
    justify-self: end;
`

export const UpdateButton = styled(CustomButton)`
    font-size: 1rem;
    margin-left: auto;
    display:block;

`

export const DeleteButton = styled(CustomButton)`
    font-size: 1rem;
    background-color: rgb(235, 172, 1);
    margin-bottom: 1rem;
    display:block;

`

export const OrderId = styled.p`
    font-size: 1.2rem;
    color: gray;
    /* margin-bottom: 2rem; */
`