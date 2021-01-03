import styled from 'styled-components'
import CustomButton from '../../components/custom-button/custom-button.component'

import { paddingStyles } from '../../global.styles'

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;
`

export const Profile = styled.div`
    /* padding: 2rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08); */
    margin-right: 2rem;

`

export const Name = styled.div`
    font-size: 4.5rem;
    font-weight: 700;
`

export const DeleteProfileButton = styled(CustomButton)`
    background-color: #DD4C4C;
    font-size: 1.4rem;
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

export const SaveButton = styled(CustomButton)`
    margin-left: 2rem;
    font-size: 1.4rem;
`

export const Title = styled.h2`
    margin-bottom: 2rem;
`

export const Container = styled.div`
    margin-top: 2rem;
`