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
    align-items:center;
    justify-content:center;
    font-weight: 700;
`

export const Dayblock = styled.div`
    height: 10rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border: 1px solid rgba(0,0,0,.1);
    padding: .6rem 1rem;

    transition: all .15s;

    ${({ faded }) => faded ? "opacity: .6" : (`    
        cursor: pointer;
        &:hover {
        background-color: rgba(0,0,0,.1);
        }
    `)};



`

export const DayRowContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const BookingContainer = styled.p`
    background-color: ${({ active }) => active ? " rgb(235, 172, 1)" : "#eee"};
    color: ${({ active }) => active ? "#fff" : "#000"};
    border-radius: 50%;
    font-weight: bolder;
    padding: .2rem .9rem;
`

export const DayNumber = styled.p`
    margin-left: auto
`