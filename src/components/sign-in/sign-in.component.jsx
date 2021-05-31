import React, { useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { AuthContext } from '../../context/auth/auth.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import CustomInput from '../custom-input/custom-input.component'
import PopUp from '../popup/pop-up.component'

import { FormContainer, SubmitButton, ForgotPasswordButton } from './sign-in.styles'

const SignIn = ({ showForgotPwsForm }) => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {
        logIn,
        getToken,
        
    } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        logIn(email, password, () => {
            history.push('/dashboard')
        })

        setEmail('')
        setPassword('')
    }


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
