import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import CustomInput from '../custom-input/custom-input.component'
import PopUp from '../popup/pop-up.component'

import { FormContainer, SubmitButton, ForgotPasswordButton } from './sign-in.styles'

const SignIn = ({ showForgotPwsForm }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {
        logIn,
    } = useContext(AuthContext)

    const {
        isLoading,
        closeModal,
        message,
        showModal
    } = useContext(LoadingModalContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        logIn(email, password)

        setEmail('')
        setPassword('')
    }


    return (
        <React.Fragment>
            {showModal && <PopUp loading={isLoading} title={message} close={closeModal} />}
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
