import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/auth/auth.context'

import CustomInput from '../custom-input/custom-input.component'
import Popup from '../popup/pop-up.component'

import { FormContainer, SubmitButton, SignUpButton } from './sign-up.styles'

const SignUp = ({ showSignInForm }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const {
        Register,
        errMessage,
        isLoading,
        isWaitingForResponse,
        setIsLoading
    } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        Register(email, password, confirmPassword)
    }

    return (
        <React.Fragment>
            { isLoading && <Popup loading={isWaitingForResponse} title={errMessage} close={() => setIsLoading(false)} />}
            <FormContainer onSubmit={handleSubmit}>
                <h2>Registrovať sa</h2>

                <CustomInput
                    label="E-mail"
                    type='emial'
                    name='email'
                    value={email}
                    handleChange={(e) => setEmail(e.target.value)}
                    required
                />
                <CustomInput
                    label="Heslo"
                    type='password'
                    name='pwd'
                    value={password}
                    handleChange={(e) => setPassword(e.target.value)}
                    required
                />
                <CustomInput
                    label="Potvrď heslo"
                    type='password'
                    name='cnfrmPwd'
                    value={confirmPassword}
                    handleChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <SubmitButton>Registrovať sa</SubmitButton>
            </FormContainer>
            <SignUpButton onClick={() => showSignInForm()}>Mám účet, chcem sa prihlásiť</SignUpButton>
        </React.Fragment>
    )
}

export default SignUp
