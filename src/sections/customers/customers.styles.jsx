import styled from 'styled-components'
import CustomButton from '../../components/custom-button/custom-button.component'

export const CustomerContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 25rem;

    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    padding: 2rem;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }

    @media all and (max-width: 500px) {
        grid-template-columns: 1fr;   
    }
`
export const Content = styled.div`
    h2 {
        font-size: 1.6rem;
    }
`

export const ProductId = styled.p`
    font-size: 1.2rem;
    color: gray;
    margin-bottom: 2rem;
`

export const Description = styled.p`
    max-width: 45rem;
    font-size: 1.4rem;
    color: gray;

    @media all and (max-width: 500px) {
        margin-bottom: 2rem;
    }
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
    background-color: rgb(235, 172, 1);
`