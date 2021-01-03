import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { useHistory } from 'react-router-dom'

import {
    AsideContainer,
    LogoContainer,
    NavLinksContainer,
    ToggleButton,
    NavLinksButton,
    ActiveBorder
} from './sidenav.styles'

const Sidenav = ({ routes, match }) => {
    const { logOut } = useContext(AuthContext)
    const { push } = useHistory()

    const [isOpen, setIsOpen] = useState(false)

    const [activeLink, setActiveLink] = useState(0)

    const handleClick = (path, idx) => {
        if (isOpen) {
            setIsOpen(false)
        }
        setActiveLink(idx)
        push(path)
    }

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
                            <NavLinksButton onClick={() => handleClick(match.url + route.path, idx)} >
                                <div /> {route.name}
                            </NavLinksButton>
                            <ActiveBorder isActive={activeLink === idx} />
                        </li>
                    ))}
                    <li>
                        <NavLinksButton onClick={logOut}>
                            <div /> Odhlásiť sa
                            <ActiveBorder />
                        </NavLinksButton>
                    </li>
                </NavLinksContainer>
                <div />
            </AsideContainer>
        </React.Fragment>
    )
}

export default Sidenav
