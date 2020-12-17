import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { AsideContainer, LogoContainer, NavLinksContainer, ToggleButton } from './sidenav.styles'

const Sidenav = ({ routes, match }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <AsideContainer isOpen={isOpen}>
            <ToggleButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                <div />
                <div />
                <div />
            </ToggleButton>
            <LogoContainer>
                IMOOPTIK
            </LogoContainer>
            <NavLinksContainer>
                {routes.map((route, idx) => (
                    <li key={idx}>
                        <div /> <NavLink to={match.url + route.path}>{route.name}</NavLink>
                    </li>
                ))}
            </NavLinksContainer>
            <div />
        </AsideContainer>
    )
}

export default Sidenav
