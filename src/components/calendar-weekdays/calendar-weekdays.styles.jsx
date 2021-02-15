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
    /* border: var(--table-border); */
    min-width: 55rem;
    padding-left: 5rem;


   ::-webkit-scrollbar {
        width: 1rem;
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
    background-color: var(--color-black);

    /* border: var(--table-border); */
    min-width: 55rem;
    padding-left: 5rem;
    padding-right: 1rem;

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
    background-color: var(--body-background-primary-color);
    border: var(--table-border);
 
    

    &:nth-child(1) {
        div {
            span {
                width: 6rem;
                display: block;
                opacity: .6;
                position: absolute;
                top: 0rem;
                left: -5.8rem;
                font-size: 1.4rem;
                padding: .5rem 1rem .5rem .2rem;
                border-radius: 9999rem;
                text-align: end;
                letter-spacing: .05rem;
            }
        }
    }
`

export const HourBlockContainer = styled.div`
    cursor: pointer;
    position: relative;
    height: 10rem;
    border-bottom: var(--table-border);
    background-color: var(--background-primary-color);


    span {
        display: none;
    }
`

export const EmptyContainer = styled.div`
    content: "";
    position: relative;
    /* position: absolute; */
    width: 100%;
    height: 100%;
    /* top: 0;
    left: 0;
    bottom: 0;
    right: 0; */
    /* background-color: red; */
`

export const AppointmentContainer = styled.div`
    cursor: pointer;
    border: var(--appointment-container-border);
    background-color: var(--appointment-container-background-color);
    color: var(--appointment-container-text-color);
    font-weight: bolder;
    width: 100%;
    height: 50%;
    padding: .5rem;
    /* position: absolute; */

`