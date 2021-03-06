import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'


export const Profile = styled.div`
    padding: 2rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
    margin-right: 2rem;

`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;

    @media all and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`

export const ZeroMargin = styled.div`
    input {
        margin-bottom: 0 !important;
    }
`

export const GridRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    div:not(:last-child) {
        padding-right: 2rem;
    }
`


export const ThreeColRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    input {
        margin-bottom: 0 !important;
    }

    div:not(:last-child) {
        padding-right: 2rem;
    }

    @media all and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "a a"
            "b c";

        div:nth-child(1){
            grid-area: a;
            margin-bottom: 0;
        }
        div:nth-child(2){
            grid-area: b;
            margin-bottom: 2rem;

        }
        div:nth-child(3){
            grid-area: c;
            margin-bottom: 2rem;
        }
    }
`

export const Row = styled.div`
    width: 75%;
`


export const Title = styled.h2`
    margin-bottom: 2rem;
`

export const Container = styled.div`
    margin-top: 2rem;
    
`

export const OrderHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const OrderButton = styled(CustomButton)`
    background-color: var(--primary-color);
    font-weight: bolder;
    margin-top: .2rem;
    font-size: 1.2rem;
`

export const AdminPanelContainer = styled.div`
    margin-bottom: 3rem;
`

export const CustomSelect = styled.select`
    margin-top: 1.5rem;
    min-width: 16.5rem;
    width: 100%;
    background-color: var(--input-background-color);
    color: var(--input-color);
    border: none;
    padding: .5rem .5rem .5rem 1rem;
    font-size: inherit;
    font-family: inherit;
    display: block;
`