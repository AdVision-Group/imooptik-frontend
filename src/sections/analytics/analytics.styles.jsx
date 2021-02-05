import styled from 'styled-components'
import { paddingStyles } from '../../global.styles'


export const Header = styled.div`
    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
    margin-bottom: 4rem;

    div {
        background-color: #f5f5f5;
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
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

`