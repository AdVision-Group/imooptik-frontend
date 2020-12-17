import styled from 'styled-components'

export const DashboardContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 30rem 1fr;

    @media all and (max-width: 800px) {
        grid-template-columns: 1fr;

        main {
            margin-top: 8rem;
        }
    }
`