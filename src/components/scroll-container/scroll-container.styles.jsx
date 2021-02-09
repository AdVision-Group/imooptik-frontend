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
    color: var(--primary-text-color);




    @media all and (max-width: 1150px) {
        margin-bottom: 8rem;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background:  var(--background-primary-color);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--primary-color);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--primary-color);
    }
`

export const FixedContainer = styled.div`
    /* max-width: 115rem; */
`