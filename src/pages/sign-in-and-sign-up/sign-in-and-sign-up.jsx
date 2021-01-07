import React, { useState } from 'react'

import SignIn from '../../components/sign-in/sign-in.component'
import ForgotPassword from '../../components/forgot-password/forgot-password.component'

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles'

const SignInAndSignUpPage = () => {
    const [showForgotPws, setShowForgotPwd] = useState(false)

    const showSignInForm = () => {
        setShowForgotPwd(false)
    }

    const showForgotPwsForm = () => {
        setShowForgotPwd(true)
    }

    return (
        <SignInAndSignUpContainer>
            <h1>IMOOPTIK</h1>
            {showForgotPws ? (<ForgotPassword showSignInForm={showSignInForm} />) : (
                <SignIn showForgotPwsForm={showForgotPwsForm} />
            )}
        </SignInAndSignUpContainer>
    )
}

export default SignInAndSignUpPage
