import styled from 'styled-components'

export const TextareaRow = styled.div`
    display: grid;
    grid-template-columns: 35rem 1fr;
    /* align-items: center; */
    /* max-width: 45rem; */

    p {
        margin-top: 2.5rem;
        margin-left: 2rem;
        opacity: .75;

        span {
            font-weight: 700;
        }
    }

        @media all and (max-width: 800px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;

        p {
            margin-left: unset;
        }

        div {
            width: 100%;
        }
    }
`