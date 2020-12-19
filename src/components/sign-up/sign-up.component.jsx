import React, { useState } from 'react'

import CustomInput from '../custom-input/custom-input.component'
import Popup from '../popup/pop-up.component'

import { FormContainer, SubmitButton, SignUpButton } from './sign-up.styles'

const SignUp = ({ setShowSignUp }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isWaitingForResponse, setIsWaitingForResponse] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errMessage, setErrMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setIsWaitingForResponse(true)

        if (!email) {
            console.log("ziadny email")
            setIsLoading(false)
            return
        }
        if (!password) {
            console.log("ziadne heslo")
            setIsLoading(false)
            return
        }

        if (password !== confirmPassword) {
            console.log("hesla sa nezhoduju")
            setIsLoading(false)
            return
        }

        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({ "email": email, "password": password });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            const response = await fetch("http://195.110.58.166:8080/api/auth/register", requestOptions)
            const data = await response.json()

            setErrMessage(data.message)
            setIsWaitingForResponse(false)
        } catch (err) {
            console.log(err)
            setErrMessage("Nieco sa pokazilo")
            setIsWaitingForResponse(false)
        }
    }

    return (
        <React.Fragment>
            {
                isLoading ? (
                    <Popup loading={isWaitingForResponse} title={errMessage} close={() => setIsLoading(false)} />
                ) : (
                        <React.Fragment>
                            <FormContainer onSubmit={handleSubmit}>
                                <h2>Registrovať sa</h2>

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
                                <CustomInput
                                    label="Potvrď heslo"
                                    type='password'
                                    name='cnfrmPwd'
                                    value={confirmPassword}
                                    handleChange={(e) => setConfirmPassword(e.target.value)}
                                />

                                <SubmitButton>Registrovať sa</SubmitButton>
                            </FormContainer>
                            <SignUpButton onClick={() => setShowSignUp(false)}>Mám účet, chcem sa prihlásiť</SignUpButton>
                        </React.Fragment>
                    )
            }

        </React.Fragment>
    )
}

export default SignUp
