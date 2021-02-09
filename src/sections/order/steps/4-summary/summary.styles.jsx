import styled from 'styled-components'
import CustomButton from '../../../../components/custom-button/custom-button.component'

export const ProductsOverviewContainer = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: var(--container-shadow);
    margin-bottom: 3rem;
    background-color: var(--container-background-color);

`

export const SummaryTableTitle = styled.h3`
    margin-bottom: 3rem;
`

export const SummaryTableHead = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 5rem 1fr 10rem 10rem 1fr 10rem 10rem 10rem 10rem;
    font-weight: bolder;
    border-bottom: 1px solid var(--secondary-text-color);
`

export const SummaryTableRow = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 5rem 1fr 10rem 10rem 1fr 10rem 10rem 10rem 10rem;
    /* box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08); */
    /* margin-bottom: 1rem; */
`

export const TableCol = styled.div`
    padding: 2rem;
    text-align: center;

    img {
        width: 5rem;
    }
`

export const TotalContainer = styled.div`
    margin-top: 2rem;
    display:flex;
    justify-content: flex-end;
    align-items: center;

    span {
        display: block;
        margin-right: .5rem;
        
    }

    p {
        font-weight: bolder;
        font-size: 2.5rem;
    }
`
export const SummaryGridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    align-items: start;
`

export const UserOverviewContainer = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);


    h3 {
        margin-bottom: .5rem;
    }

    h4 {
        margin-top: 1rem;
        margin-bottom: .5rem;
    }

`

export const StyledParagraph = styled.p`
    opacity: .83;
    font-size: 1.4rem;
    margin-left: 1.5rem;

    &:not(:last-child) {
        margin-bottom: .5rem;
    }
`

export const OrderDetailsContainer = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
    margin-bottom: 3rem;

    h3 {
        margin-bottom: 1rem;
    }

    h4 {
        margin-top: 1rem;
        margin-bottom: .5rem;
    }

    div {
        p {
            opacity: .83;
        }

        &:not(:last-child) {
            margin-bottom: 1rem;
        }

        a {
            background-color: #000;
            color: #fff;
            display: inline-block;
            padding: .5rem 2.5rem;
            margin-top: 1rem;
        }
    }

`

export const OptionsContainer = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
    margin-bottom: 3rem;


    h3 {
        margin-bottom: 1rem;
    }
`

export const OptionButton = styled(CustomButton)`
    &:not(:last-child) {
        margin-right: .5rem;
    }

    &:last-child {
        background-color: var(--primary-color);
        font-weight: bolder;
    }
`