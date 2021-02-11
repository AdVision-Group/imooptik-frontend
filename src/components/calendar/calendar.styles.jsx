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
    background-color: var(--color-black);
    color: var(--table-head-color);
    display: flex;
    align-items:center;
    justify-content:center;
    font-weight: 700;
`

export const Dayblock = styled.div`
    height: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border: 1px solid rgba(0,0,0,.1);
    padding: .6rem 1rem;

    transition: all .15s;

    p {
        span {
            width: 3rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background-color: var(--body-background-primary-color);
            color: var(--primary-color);
            font-weight: bolder;
            font-size: 1.5rem;
        }
    }

    ${({ faded }) => faded ? "opacity: .6" : (`    
        cursor: pointer;
        &:hover {
        background-color: var(--body-background-primary-color);
        }
    `)};



`
