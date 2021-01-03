import styled from 'styled-components'

export const InputRow = styled.div`
    display:flex;
    align-items: center;

    p {
        margin-top: 1.8rem;
        margin-left: 2rem;
            opacity: .75;

        span {
            font-weight: 700;
        }
    }

    @media all and (max-width: 800px) {
        flex-direction: column-reverse;
        align-items: flex-start;

        p {
            margin-left: unset;
        }
    }
`