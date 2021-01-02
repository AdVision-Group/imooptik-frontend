import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

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
    margin-top: 2rem;

    width: 100%;
`

export const SignUpButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    color: #DD4C4C;
    font-family: inherit;
    border: none;
    outline: none;
    margin-bottom: 1rem; 

    &:focus {
        outline: none;
    }
`

export const ForgotPasswordButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    color: #DD4C4C;
    font-family: inherit;
    border: none;
    outline: none;

    &:focus {
        outline: none;
    }
`