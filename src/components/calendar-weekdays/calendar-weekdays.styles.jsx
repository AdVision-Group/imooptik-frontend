import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`

export const HourGrid = styled.div`
    overflow-y: scroll;
    /* overflow-x: auto; */
    height: 60rem;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border: var(--table-border);
    min-width: 55rem;

   ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background:  var(--background-primary-color);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--primary-color);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--primary-color);
    }
`

export const TableHead = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border: var(--table-border);
    min-width: 55rem;
`

export const HeaderBlock = styled.div`
    cursor: default;
    height: 8rem;
    background-color: var(--color-black);
    color: var(--table-head-color);
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    font-weight: 700;

    p:first-child {
        font-weight: lighter;
    }

    /* background-color: red; */
    ${({ isDisabled }) => isDisabled ? (`
        opacity: .6;
    `) : ''}
`

export const HourBlock = styled.div`
 
    div {
        position: relative;
        height: 10rem;
        /* padding: .5rem; */
        border: var(--table-border);

        span {
            display: none;

                /* display: block;
                opacity: .6;
                position: absolute;
                bottom: .5rem;
                left: .5rem;
                background-color: var(--background-primary-color);
                z-index: 999;
                padding: .5rem 1rem;
                border-radius: 9999rem; */

        }

    }

    &:nth-child(1) {
        div {
            span {
                display: block;
                opacity: .6;
                position: absolute;
                top: .5rem;
                left: .5rem;
                /* transform:translateY(-50%); */
                background-color: var(--background-primary-color);
                z-index: 999;
                padding: .5rem 1rem;
                border-radius: 9999rem;
            }
        }
    }
`

export const AppointmentContainer = styled.div`
    cursor: pointer;
    border: var(--appointment-container-border);
    background-color: var(--appointment-container-background-color);
    color: var(--appointment-container-text-color);

`