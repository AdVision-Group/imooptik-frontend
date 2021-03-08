import styled from 'styled-components'
import OrderOverview from '../../components/order-overview/order-overview.component'
import { IconContainer as IconDiv, DeligateButton } from '../../components/order-overview/order-overview.styles'


export const TableCol = styled.div`
    cursor:  ${({ clickable }) => clickable ? "pointer" : "default"};
    position: relative;
    width: 30rem;
    display: table-cell;
    padding: 2rem;
     
    p {
        display: flex;
    }
`

export const DeligateCol = styled(TableCol)`
    cursor: pointer;
    padding: 1rem;
    transition: background-color .3s ease-out; 
    width: 30rem;
    display: table-cell;
`





export const TableHead = styled.div`
    display: table-row;

    font-weight: bolder;

    /* background-color: var(--background-primary-color); */

    ${TableCol} {
        background-color: var(--background-primary-color);
        border-bottom: 1px solid var(--secondary-text-color);
        position: sticky;
        top: -1.5rem;
        z-index: 999;
    }

    @media all and (max-width: 920px) {
        font-size: 1.2rem
    }
`

export const OrderOverviewRow = styled(OrderOverview)`
`

export const OrdersTable = styled.div`
    /* min-width: 100%; */
    /* position: relative; */
    display: table;
    overflow-x: scroll;
    border-collapse: collapse;
    border-spacing: 0;

    ${OrderOverviewRow} {
        :nth-child(even) {
            background-color: var(--container-background-table-row-odd);
            ${IconDiv} {
                background-color: var(--dropdownbutton-background-color);
            }

            ${DeligateButton} {
                &:hover {
                    background-color: var(--dropdownbutton-background-color);
                }
            }

        }   
        :nth-child(odd) {
            ${IconDiv} {
                background-color: var(--dropdownbutton-background-color-odd);
            }

            ${DeligateButton} {
                &:hover {
                    background-color: var(--dropdownbutton-background-color-odd);
                }
            }
        }
    }
`


export const IconContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
`



