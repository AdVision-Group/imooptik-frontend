import styled from 'styled-components'

export const TableCol = styled.div`
    width: 30rem;
    display: table-cell;
    padding: 2rem;
    position: relative;

`

export const DeligateCol = styled(TableCol)`
    cursor: pointer;
    padding: 1rem;
    width: 30rem;
    display: table-cell;
    transition: background-color .3s ease-out; 
`




export const DeligateButton = styled.div`
    padding: 1rem;

    &:hover {
        background-color: var(--body-background-primary-color);
    }
`

export const IconContainer = styled.div`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    border-radius: 50%;

    svg {
        font-size: 1.2rem;
        margin-top: .1rem;
        display: block;
        color: var(--dropdownbutton-color);
    }
`

export const OrderOverviewRow = styled.div`
    position: relative;
    display: table-row;

    /* box-shadow: var(--container-shadow); */
    background-color: var(--container-background-table-row);

    @media all and (max-width: 920px) {
        font-size: 1.2rem
    }


`


export const DropdownMenu = styled.div`
    position: absolute;
    padding: 2rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    border-radius: .5rem;
    background-color: var(--dropdown-background-color);
    z-index: 99;
    right: 0;
    top: 6rem;
    width: 20rem;
    text-align: start;

    ul {
        list-style: none;

        button {
            width: 100%;
            display: block;
            margin-bottom: 1rem;

            &:hover {
                /* background-color: var(--dropdown-hover-background-color); */
            }
        }

        li {
            cursor: pointer;
            display: flex;
            align-items: center;
            transition: background-color .3s ease-out;
            border-radius: 9999rem .5rem .5rem 9999rem;
            color: var(--primary-text-color);

            &:not(:last-child) {
                margin-bottom: 1rem;
            }

            div {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
                background-color: var(--dropdown-hover-background-color);
                border-radius: 50%;
                margin-right: 1rem;

                svg {
                    transition: color .3s ease-out;
                }
            }

            &:hover {
                background-color: var(--dropdown-hover-background-color);

                div {
                    svg {
                        color: var(--primary-color);
                    }
                }
            }

        }
        a:not(:last-child) {
            margin-bottom: 1rem;
        }
    }
`

export const Line = styled.div`
    width: 75%;
    height: .1rem;
    background-color: var(--secondary-text-color);
    margin: 1rem auto;
    opacity: .1;
`