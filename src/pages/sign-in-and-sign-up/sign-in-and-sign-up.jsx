import React, { useState } from 'react'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles'

const SignInAndSignUpPage = () => {
    const [showSignUp, setShowSignUp] = useState(false)

    return (
        <SignInAndSignUpContainer>
            <h1>IMOOPTIK</h1>
            {showSignUp ? (
                <SignUp setShowSignUp={setShowSignUp} />
            ) : (
                    <SignIn setShowSignUp={setShowSignUp} />
                )}
        </SignInAndSignUpContainer>
    )
}

export default SignInAndSignUpPage
