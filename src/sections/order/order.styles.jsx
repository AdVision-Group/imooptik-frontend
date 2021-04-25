import styled from "styled-components"
import { paddingStyles } from '../../global.styles'

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;

    h1 {
        color: var(--primary-text-color);
    }

    @media all and (max-width: 800px) {
        flex-wrap: wrap;

        div:nth-child(2) {
            margin-bottom: 2rem;
        }
    }
`


export const ProductsOverviewContainer = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: var(--container-shadow);
    margin-bottom: 3rem;
    background-color: var(--container-background-color);

`

export const SummaryTableTitle = styled.h3`
    margin-bottom: 2rem;
`


export const TableCol = styled.div`
    padding: .5rem;
    text-align: center;

    img {
        width: 5rem;
    }

    &:nth-of-type(2), &:nth-of-type(6) {
        /* background-color: red; */
        display: grid;
        grid-template-columns: 1fr 1fr;
    }




`

export const SummaryTableHead = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 5rem 2fr 8rem 8rem 8rem 2fr 8rem 8rem 5rem 10rem 10rem;
    font-weight: bolder;
    border-bottom: 1px solid var(--secondary-text-color);
    font-size: 1.2rem;


    ${TableCol} {
        &:nth-of-type(2) {
            /* background-color: red; */
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        &:nth-of-type(6) {
            /* background-color: red; */
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
`



export const SummaryTableRow = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 5rem 2fr 8rem 8rem 8rem 2fr 8rem 8rem 5rem 10rem 10rem;
    /* box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08); */
    /* margin-bottom: 1rem; */
    font-size: 1.2rem;
    background-color: var(--background-primary-color);

    &:nth-of-type(2n) {
        background-color: var(--body-background-primary-color);
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
        font-size: 2rem;
    }
`