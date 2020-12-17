import React, { useState } from 'react'

import CustomInput from '../custom-input/custom-input.component'

import { FormContainer, SubmitButton, SignUpButton } from './sign-in.styles'

const SignIn = ({ setShowSignUp }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <React.Fragment>
            <FormContainer>
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
