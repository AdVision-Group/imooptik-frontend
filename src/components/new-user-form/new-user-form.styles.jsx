import styled from "styled-components"

export const CustomSelect = styled.select`
    margin-top: 1.5rem;
    min-width: 16.5rem;
    width: 100%;
    background-color: var(--input-background-color);
    color: var(--input-color);
    border: none;
    padding: .5rem .5rem .5rem 1rem;
    font-size: inherit;
    font-family: inherit;
    display: block;

        margin-bottom: 2rem;
`


export const CustomerForm = styled.div`
    display: grid;
    grid-template-columns: 1fr 50rem;
    grid-gap: 2rem;
    align-items: start;
`

export const ColContainer = styled.div`
    padding: 2rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);

`

export const SectionTitle = styled.h2`
    margin-bottom: 2rem;
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