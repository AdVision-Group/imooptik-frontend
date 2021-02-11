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
    margin-bottom: 3rem;
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
export const CalendarMonthContainer = styled.div`
    display: flex;
    align-items: center;

    button {
        cursor: pointer;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--primary-color);

    }

    p {
        text-transform: capitalize;
        margin: 0 1rem;
    }
`


export const CalendarFormat = styled.li`
    background-color: ${({ isActive }) => isActive ? "var(--primary-color)" : "none"};
    color: ${({ isActive }) => isActive ? "var(--button-font-color)" : "var(--primary-color)"};
    cursor: pointer;
    padding: 0.5rem 2rem;

    transition: all .3s ease-in-out;
`