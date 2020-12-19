import React, { useState } from 'react'

import CustomInput from '../custom-input/custom-input.component'
import PopUp from '../popup/pop-up.component'

import { FormContainer, SubmitButton, SignUpButton } from './sign-in.styles'

const SignIn = ({ setShowSignUp }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errMessage, setErrMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setIsSubmitting(true)

        if (!email) {
            console.log("Ziadny e-mail")
            setIsLoading(false)
            return
        }
        if (!password) {
            console.log("Ziadne heslo")
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

            const response = await fetch("http://195.110.58.166:8080/api/auth/login", requestOptions)
            const data = await response.json()
            console.log(data)

            if (response.status === 400) {
                setIsSubmitting(false)
                setErrMessage(data.message)
            }

        } catch (err) {
            console.log(err)
        }
        // setIsLoading(false)
    }


    return (
        <React.Fragment>
            {
                isLoading ? (
                    <PopUp loading={isSubmitting} title={errMessage} close={() => setIsLoading(false)} />
                ) : (
                        <React.Fragment>
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

        </React.Fragment>
    )
}

export default SignIn
