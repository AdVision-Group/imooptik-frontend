import styled from 'styled-components'
import { paddingStyles } from '../../global.styles'


export const Header = styled.div`
    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'f f l' 's t l';
    grid-gap: 2rem;

    div {
        height: 20rem;
    }

    .first {
        background-color: #eee;
        grid-area: f;
    }
    .second {
        background-color: #ddd;
        grid-area: s;
    }
    .third {
        background-color: #ccc;
        grid-area: t;
    }
    .fourth {
        background-color: #bbb;
        grid-area: l;
        height: 100%;
    }
`