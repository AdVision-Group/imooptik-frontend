import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import CustomInput from '../custom-input/custom-input.component'
import Popup from '../popup/pop-up.component'

import { FormContainer, SubmitButton, SignUpButton } from './sign-up.styles'

const SignUp = ({ showSignInForm }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const {
        register,
    } = useContext(AuthContext)

    const {
        isLoading,
        closeModal,
        message,
        showModal
    } = useContext(LoadingModalContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        register(email, password, confirmPassword)

        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <React.Fragment>
            { showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
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
