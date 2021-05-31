import React, { useState, useContext, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { AuthContext } from '../../context/auth/auth.context'

import CustomInput from '../custom-input/custom-input.component'

import { FormContainer, SubmitButton, ForgotPasswordButton } from './sign-in.styles'

const SignIn = ({ showForgotPwsForm }) => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {
        isAuthenticated,
        logIn,
        getToken,
        
    } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        logIn(email, password, () => {
            history.push('/dashboard/rezervacie')
        })

        setEmail('')
        setPassword('')
    }

    useEffect(() => {
        if(!isAuthenticated) return

        history.push("/dashboard/rezervacie")
    }, [isAuthenticated])

    return (
        <React.Fragment>
            <FormContainer onSubmit={handleSubmit}>
                <h2>Prihlásiť sa</h2>

                <CustomInput
                    label="E-mail"
                    type='email'
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

                <SubmitButton>Prihlásiť sa</SubmitButton>
            </FormContainer>
            <ForgotPasswordButton onClick={() => showForgotPwsForm()}>Zabudol som heslo</ForgotPasswordButton>

        </React.Fragment>
    )
}

export default SignIn
