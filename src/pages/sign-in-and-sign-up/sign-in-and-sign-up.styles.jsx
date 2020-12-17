import styled from 'styled-components'

export const SignInAndSignUpContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 8rem;
        font-weight: 700;
        margin-bottom: 5rem;

        @media all and (max-width: 800px) {
            font-size: 6rem;

            @media all and (max-width: 500px) {
            font-size: 5rem;

            }
        }   
    }
`