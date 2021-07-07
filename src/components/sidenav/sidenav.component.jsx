import React, { useState, useContext } from "react"
import { AuthContext } from "../../context/auth/auth.context"
import { Link, useLocation } from "react-router-dom"

import logo from "../../images/logo.png"

import { AiOutlineLogout } from "react-icons/ai"

import {
	AsideContainer,
	LogoContainer,
	NavLinksContainer,
	ToggleButton,
	NavLinksButton,
	ActiveBorder,
	IconContainer,
} from "./sidenav.styles"

const Sidenav = ({ routes, match }) => {
	const location = useLocation()
	const { currentUser, logout } = useContext(AuthContext)

	const [isOpen, setIsOpen] = useState(false)

	// const [activeLink, setActiveLink] = useState(0)
	const [activeLink, setActiveLink] = useState(4)

	const handleClick = (path, idx) => {
		console.log(path)
		console.log(location)
		if (isOpen) {
			setIsOpen(false)
		}
		setActiveLink(idx)
		// push(path)
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
					<img src={logo} alt="imooptik logo" />
					<p>Prihlásený</p>
					<p>{currentUser?.name}</p>
				</LogoContainer>
				<NavLinksContainer>
					{routes.map((route, idx) => (
						<Link
							key={idx}
							to={match.url + route.path}
							onClick={() => handleClick(match.url + route.path, idx)}
						>
							<li>
								<NavLinksButton>
									<IconContainer
										isActive={location.pathname.includes(route.path)}
									>
										<route.icon />
									</IconContainer>{" "}
									{route.name}
								</NavLinksButton>
								<ActiveBorder
									isActive={location.pathname.includes(route.path)}
								/>
							</li>
						</Link>
					))}
					<li onClick={() => logout(() => {})}>
						<NavLinksButton>
							<IconContainer>
								<AiOutlineLogout />
							</IconContainer>{" "}
							Odhlásiť sa
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
