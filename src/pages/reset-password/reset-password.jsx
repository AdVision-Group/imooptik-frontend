import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { useHistory, useParams } from 'react-router-dom'

import CustomInput from '../../components/custom-input/custom-input.component'
import PopUp from '../../components/popup/pop-up.component'

import {
    FormContainer,
    SubmitButton,
    Center
} from './reset.password.styles'


const ResetPassword = () => {
    const { isLoading, isWaitingForResponse, setIsLoading, errMessage, handleCreatingNewPassword } = useContext(AuthContext)
    const { push } = useHistory()
    const { token } = useParams()

    const [password, setPassword] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        handleCreatingNewPassword(token, password)
    }

    const handleOnClose = () => {
        setIsLoading(false)
        push('/')
    }

    return (
        <React.Fragment>
            {isLoading && <PopUp loading={isWaitingForResponse} title={errMessage} close={handleOnClose} />}
            <Center>

                <FormContainer onSubmit={handleSubmit}>
                    <h2>Vytvoriť nové heslo</h2>

                    <CustomInput
                        label="Nové heslo"
                        type='password'
                        name='password'
                        value={password}
                        handleChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <SubmitButton>Odoslať</SubmitButton>
                </FormContainer>
            </Center>

        </React.Fragment>
    )
}

export default ResetPassword
