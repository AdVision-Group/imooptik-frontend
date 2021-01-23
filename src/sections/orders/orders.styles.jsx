import styled from 'styled-components'

export const OrdersTable = styled.div`
    min-width: 65rem;
    margin-bottom: 10rem;
`

export const TableHead = styled.div`
    display: grid;
    grid-template-columns: 10rem 2fr 2fr 1fr 10rem;
    border-bottom: 1px solid #000;
    font-weight: bolder;
`

export const OrderOverviewRow = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 10rem 2fr 2fr 1fr 10rem;
    align-content: center;
    margin-bottom: 1rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
`

export const TableCol = styled.div`
    position: relative;
    padding: 2rem;
    text-align: center;
`

export const DeligateCol = styled(TableCol)`
    cursor: pointer;
    padding: 1rem;
    transition: background-color .3s ease-out; 
`

export const DeligateButton = styled.div`
    padding: 1rem;

    &:hover {
        background-color: #f5f5f5;
    }
`

export const IconContainer = styled.div`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    border-radius: 50%;
    background-color: #000;

    svg {
        font-size: 1.2rem;
        margin-top: .1rem;
        display: block;
        color: #fff;
    }
`

export const DropdownMenu = styled.div`
    position: absolute;
    padding: 2rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    border-radius: .5rem;
    background-color: #fff;
    z-index: 99;
    right: 3rem;
    top: 6rem;
    width: 20rem;
    text-align: start;

    ul {
        list-style: none;

        li {
            cursor: pointer;
            display: flex;
            align-items: center;
            transition: background-color .3s ease-out;
            border-radius: 9999rem .5rem .5rem 9999rem;


            div {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
                background-color: #f5f5f5;
                border-radius: 50%;
                margin-right: 1rem;

                svg {
                    transition: color .3s ease-out;
                }
            }

            &:hover {
                background-color: #f5f5f5;

                div {
                    svg {
                        color: rgb(235, 172, 1);
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
    width: 100%;
    height: .1rem;
    background-color: #000;
    margin: 1rem 0;
    opacity: .3;
`