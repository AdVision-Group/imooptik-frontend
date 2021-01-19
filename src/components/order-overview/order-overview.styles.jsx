import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const OrderContainer = styled.div`
    position:relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 35rem;

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

export const OrderId = styled.p`
    font-size: 1.2rem;
    color: gray;
    margin-bottom: 2rem;
`

export const DateContainer = styled.p`
    font-size: 1.4rem;
    /* font-weight: 700; */
    color: gray;
    /* margin-bottom: 2rem; */
`

export const Price = styled.p`
    font-weight: 700;
    font-size: 1.8rem;
`

export const OrderDetailsContainer = styled.div`
    cursor: pointer;
    justify-self: end;
    /* text-align: end; */
    align-self: start;
    padding: 2rem;
    border-radius: .5rem;
    background-color: #f5f5f5;
    margin-bottom: 3rem;
    transition: background-color .3s ease-out;

    &:hover {
        background-color: #eee;

    }

`

export const Options = styled.div`
    grid-column: 2;
    align-self: end;
    justify-self: end;

`

export const StatusContainer = styled.p`
    opacity: .63;
    top: 2rem;
    right: 2rem;
    text-transform: uppercase;
`

export const UpdateButton = styled(CustomButton)`
    font-size: 1rem;
    margin-right: 1rem;
`

export const DeleteButton = styled(CustomButton)`
    font-size: 1rem;
    background-color: rgb(235, 172, 1);
`

export const PdfButton = styled.a`
    font-size: 1rem;

    text-decoration: none;
    color: #fff;
    background-color: #000;
    padding: .8rem 1.5rem;
    border-radius: .5rem;
    margin-right: 1rem;

`