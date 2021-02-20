import styled from 'styled-components'
import { paddingStyles } from '../../global.styles'
import CustomButton from '../../components/custom-button/custom-button.component'


export const Header = styled.div`
    ${paddingStyles}
    padding-top: 2rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    color: var(--primary-text-color);
`

export const UpdateButton = styled(CustomButton)`
    background-color: var(--primary-color);
    font-weight: bolder;
`

export const Title = styled.h2`
    /* margin-bottom: 2rem; */
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

export const CalendarHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

    div {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`

export const IconContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    color: var(--primary-color);
    font-size: 3rem;
    margin-left: 1rem;
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

    div {
        text-align: center;
        margin: 0 1rem;
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