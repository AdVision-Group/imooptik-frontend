import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { ReactComponent as Illustration } from '../../images/undraw_security_o890.svg'

import {
    NoPermissionContainer,
    LogoutButton
} from './no-permission.styles'

const NoPermisionSection = () => {
    const { logOut } = useContext(AuthContext)

    return (
        <NoPermissionContainer>
            <div>
                <Illustration className='illu' />

                <h1>Prístup bol zamietnutý</h1>
                <p>Váš účet nema práva pre administráciu portalu.</p>
                <LogoutButton onClick={logOut}>
                    Odhlásiť sa
                </LogoutButton>
            </div>
        </NoPermissionContainer>
    )
}

export default NoPermisionSection
