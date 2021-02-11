import styled from "styled-components"

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 3rem;
`

export const Filterbutton = styled.button`
    cursor: pointer;
    background-color: var(--body-background-primary-color);
    color: var(--primary-color);
    font-weight: bolder;
    padding: .5rem 2rem;
    margin-left: 1rem;
`

export const ResetButton = styled.button`
    cursor: pointer;
    color: var(--color-red);
    /* font-weight: bolder; */
    padding: .5rem 2rem;
`