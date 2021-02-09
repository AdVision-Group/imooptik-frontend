import styled from 'styled-components'
import { paddingStyles } from '../../global.styles'


export const Header = styled.div`
    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;
    color: var(--primary-text-color);
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
    margin-bottom: 4rem;

    div {
        background-color: var(--body-background-primary-color);
        padding: 2rem;
        border-radius: .5rem;
        text-align: center;

        h3 {
            font-weight: lighter;
            margin-bottom: 1rem;
        }

        p {
            font-size: 4rem;
        }
    }
`

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
`

export const StatsContainer = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);


    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

`