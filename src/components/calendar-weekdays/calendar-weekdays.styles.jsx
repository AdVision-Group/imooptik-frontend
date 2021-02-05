import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border: 1px solid rgba(0,0,0,.1);
    min-width: 55rem;
`

export const HeaderBlock = styled.div`
    cursor: default;
    height: 8rem;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    font-weight: 700;

    p:first-child {
        font-weight: lighter;
    }
`