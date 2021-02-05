import styled from 'styled-components'

export const Title = styled.h2`
    margin-bottom: 2rem;
`

export const GridRow = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(27rem, 1fr) );
    margin-bottom: 3rem;
    grid-gap: 2rem;
`

export const CalendarGridContainer = styled.div`
    margin-top: 3rem;
    margin-bottom: 10rem;
`

export const CalendarHeader = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;

    ul {
        list-style: none;
        display: flex;
        /* gap: 2rem; */


    }
`

export const CalendarFormat = styled.li`
    background-color: ${({ isActive }) => isActive ? "#000" : "none"};
    color: ${({ isActive }) => isActive ? "#fff" : "#000"};
    cursor: pointer;
    padding: 0.5rem 2rem;

    transition: all .3s ease-in-out;
`