import styled from 'styled-components'
import CustomButton from '../../components/custom-button/custom-button.component'

export const Center = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.form`
    display: block;
    height: initial;
    width: 100%;
    max-width: 35rem;
    padding: 3rem 4rem;
    border-radius: .5rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);

    margin: 0 1rem 3rem;


    h2 {
        font-size: 2.8rem;
        text-align: center;
        margin-bottom: 5rem;

        @media all and (max-width: 500px) {
            font-size: 2.5rem;
        }
    }
`

export const SubmitButton = styled(CustomButton)`
    width: 100%;
`