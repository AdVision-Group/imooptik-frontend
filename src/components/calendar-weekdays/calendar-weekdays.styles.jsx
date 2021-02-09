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
        padding: .5rem;
        border: 1px solid rgba(0,0,0,0.1);

        span {
            opacity: .6;
            position: absolute;
            bottom: .5rem;
            left: -2rem;
            /* transform:translateY(-50%); */
            background-color: var(--background-primary-color);
        }
    }

    :not(:nth-child(8n)) {
        div {
            padding: 2rem;

            span {
                display: none;
            }
        }
    }
`