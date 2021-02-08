import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const OrderContainer = styled.div`
    width: 100%;
    /* display: grid;
    grid-template-columns: 1fr 25rem; */

    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);

    padding: 2rem;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }

    @media all and (max-width: 800px) {
        grid-template-columns: 1fr;

    }
`

export const OrderContent = styled.div`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    margin-bottom: 2rem;
    h2 {
        font-size: 1.6rem;
    }
`

export const Options = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    /* align-self: end;
    justify-self: end; */
`

export const UpdateButton = styled(CustomButton)`
    font-size: 1.2rem;
    /* margin-left: auto; */
    display:block;

`

export const DeleteButton = styled(CustomButton)`
    font-size: 1.2rem;
    /* background-color: rgb(235, 172, 1); */
    background-color: #DD4C4C;
    /* margin-bottom: 1rem; */
    margin-left: 1rem;
    display:block;

`

export const OrderId = styled.p`
    opacity: .83;
    /* font-size: 1.2rem; */
    /* color: gray; */
    /* margin-bottom: 2rem; */
`