import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(7, auto);
    border: 1px solid rgba(0,0,0,.1);
    min-width: 55rem;
`

export const HeaderBlock = styled.div`
    height: 8rem;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items:center;
    justify-content:center;
    font-weight: 700;
`

export const Dayblock = styled.div`
    cursor: pointer;
    height: 7rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border: 1px solid rgba(0,0,0,.1);
    padding: .6rem 1rem;

    transition: all .15s;

    &:hover {
        background-color: rgba(0,0,0,.1);
    }

    background-color: ${({ active }) => active ? " rgb(235, 172, 1);" : "unset"}
`