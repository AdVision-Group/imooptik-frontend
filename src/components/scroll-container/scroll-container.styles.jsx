import styled from 'styled-components'
import { paddingStyles } from '../../global.styles'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    /* height: 100%; */
    overflow-y: scroll;
    overflow-x: visible;
    scroll-behavior: smooth;
    ${paddingStyles};
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    @media all and (max-width: 1150px) {
        margin-bottom: 8rem;
    }
`