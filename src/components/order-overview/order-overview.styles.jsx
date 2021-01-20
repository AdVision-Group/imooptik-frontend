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
    text-align: center;
    align-self: start;
    /* margin-bottom: 3rem; */
    display: flex;
    flex-direction:column;

`

export const OptionsContainer = styled.div`
    display:flex;
    /* flex-direction: column; */
    align-self: flex-end;
    justify-content: flex-start;


    button {
        /* background-color:red; */
        margin: 0 .5rem;
        margin-bottom: 1rem;
    }
`

export const DeligateContainer = styled.div`
    /* min-width: 30rem; */
    padding: 2rem;
    border-radius: .5rem;
    background-color: #f5f5f5;
    transition: background-color .3s ease-out;
    margin: 0 0 1rem 2rem;
    display: flex;
    justify-content: flex-end;

    &:hover {
        background-color: #eee;
    }

    p:nth-child(2) {
        opacity: .83;
    }

    div:nth-child(1) {
        margin-right: 2rem;
    }
`

export const FulfilledButton = styled(CustomButton)`
    font-size: 1.2rem;
    border-radius: 9999rem;
    padding: .3rem 1.5rem;
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
    /* text-transform: uppercase; */
`

export const UpdateButton = styled(CustomButton)`
    font-size: 1rem;
    margin-right: 1rem;
    background-color: rgb(235, 172, 1);
    font-weight: bolder;
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