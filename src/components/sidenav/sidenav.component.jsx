import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/auth/auth.context'

import { NavLink } from 'react-router-dom'

import { AsideContainer, LogoContainer, NavLinksContainer, ToggleButton, LogoutButton } from './sidenav.styles'

const Sidenav = ({ routes, match }) => {
    const { logOut } = useContext(AuthContext)

    const [isOpen, setIsOpen] = useState(false)

    return (
        <React.Fragment>

            <ToggleButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                <div />
                <div />
                <div />
            </ToggleButton>
            <AsideContainer isOpen={isOpen}>
                <LogoContainer isOpen={isOpen}>
                    IMOOPTIK
            </LogoContainer>
                <NavLinksContainer>
                    {routes.map((route, idx) => (
                        <li key={idx}>
                            <div /> <NavLink to={match.url + route.path}>{route.name}</NavLink>
                        </li>
                    ))}
                    <li>
                        <div /> <LogoutButton onClick={logOut} >Odhlásiť sa</LogoutButton>
                    </li>
                </NavLinksContainer>
                <div />
            </AsideContainer>
        </React.Fragment>
    )
}

export default Sidenav
