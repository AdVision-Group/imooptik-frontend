import styled from "styled-components"

export const CustomSelect = styled.select`
    margin-top: 1.5rem;
    min-width: 16.5rem;
    width: 100%;
    background-color: #F5F5F5;
    border: none;
    padding: .5rem .5rem .5rem 1rem;
    font-size: inherit;
    font-family: inherit;
    display: block;
`


export const CustomerForm = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    align-items: start;
`

export const ColContainer = styled.div`
    padding: 2rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
`

export const ZeroMargin = styled.div`
    input {
        margin-bottom: 0 !important;
    }
`

export const GridRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 50rem;

    div:not(:last-child) {
        padding-right: 2rem;
    }
`
export const Container = styled.div`
    margin-top: 2rem;
`