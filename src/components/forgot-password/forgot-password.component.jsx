import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/auth/auth.context'

import CustomInput from '../custom-input/custom-input.component'
import PopUp from '../popup/pop-up.component'

import {
    FormContainer,
    SignInButton,
    SubmitButton
} from './forgot-password.styles'

const ForgotPassword = ({ showSignInForm }) => {
    const [email, setEmail] = useState('')

    const {
        isWaitingForResponse,
        errMessage,
        isLoading,
        setIsLoading,
        handleResetPassword
    } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        handleResetPassword(email)
    }


    return (
        <React.Fragment>
            {isLoading && <PopUp loading={isWaitingForResponse} title={errMessage} close={() => setIsLoading(false)} />}
            <FormContainer onSubmit={handleSubmit}>
                <h2>Zadaj e-mail</h2>

                <CustomInput
                    label="E-mail"
                    type='email'
                    name='email'
                    value={email}
                    handleChange={(e) => setEmail(e.target.value)}
                    required
                />

                <SubmitButton>Odoslať</SubmitButton>
            </FormContainer>
            <SignInButton onClick={() => showSignInForm()}>Spät na prihlásenie</SignInButton>
        </React.Fragment>
    )
}

export default ForgotPassword
