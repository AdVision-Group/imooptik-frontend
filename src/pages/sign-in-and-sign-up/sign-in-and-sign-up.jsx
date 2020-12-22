import React, { useState } from 'react'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import ForgotPassword from '../../components/forgot-password/forgot-password.component'

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles'

const SignInAndSignUpPage = () => {
    const [showSignUp, setShowSignUp] = useState(false)
    const [showForgotPws, setShowForgotPwd] = useState(false)

    const showSignInForm = () => {
        setShowSignUp(false)
        setShowForgotPwd(false)
    }

    const showSignUpForm = () => {
        setShowSignUp(true)
        setShowForgotPwd(false)
    }

    const showForgotPwsForm = () => {
        setShowSignUp(false)
        setShowForgotPwd(true)
    }

    return (
        <SignInAndSignUpContainer>
            <h1>IMOOPTIK</h1>
            {showSignUp ? (
                <SignUp showSignInForm={showSignInForm} />
            ) : showForgotPws ? (<ForgotPassword showSignInForm={showSignInForm} showSignUpForm={showSignUpForm} />) : (
                <SignIn showSignUpForm={showSignUpForm} showForgotPwsForm={showForgotPwsForm} />
            )}
        </SignInAndSignUpContainer>
    )
}

export default SignInAndSignUpPage
