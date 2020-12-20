import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/auth/auth.context'

import CustomInput from '../custom-input/custom-input.component'
import PopUp from '../popup/pop-up.component'

import { FormContainer, SubmitButton, SignUpButton } from './sign-in.styles'

const SignIn = ({ setShowSignUp }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {
        isWaitingForResponse,
        errMessage,
        isLoading,
        logIn,
        setIsLoading
    } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        logIn(email, password)
    }


    return (
        <React.Fragment>
            {isLoading && <PopUp loading={isWaitingForResponse} title={errMessage} close={() => setIsLoading(false)} />}
            <FormContainer onSubmit={handleSubmit}>
                <h2>Prihlásiť sa</h2>

                <CustomInput
                    label="E-mail"
                    type='text'
                    name='email'
                    value={email}
                    handleChange={(e) => setEmail(e.target.value)}
                />
                <CustomInput
                    label="Heslo"
                    type='password'
                    name='pwd'
                    value={password}
                    handleChange={(e) => setPassword(e.target.value)}
                />

                <SubmitButton>Prihlásiť sa</SubmitButton>
            </FormContainer>
            <SignUpButton onClick={() => setShowSignUp(true)}>Vytvoriť účet</SignUpButton>

        </React.Fragment>
    )
}

export default SignIn
