import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth/auth.context'

import {
    NoPermissionContainer,
    LogoutButton
} from './no-permission.styles'

const NoPermisionSection = () => {
    const { logOut } = useContext(AuthContext)

    return (
        <NoPermissionContainer>
            <div>
                <img src={"https://i.ytimg.com/vi/mJZZNHekEQw/hqdefault.jpg"} />

                <h1>You shall not pass!</h1>
                <p>Váš účet nema práva pre administráciu portalu.</p>
                <LogoutButton onClick={logOut}>
                    Odhlásiť sa
                </LogoutButton>
            </div>
        </NoPermissionContainer>
    )
}

export default NoPermisionSection
