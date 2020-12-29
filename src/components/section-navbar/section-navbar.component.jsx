import React from 'react'

import {
    NavbarContainer,
    NavButton
} from './section-navbar.styles'

const SectionNavbar = ({ items, activeIndex, setActiveIndex }) => {

    return (
        <NavbarContainer>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>
                            <NavButton active={item.id === activeIndex} onClick={() => setActiveIndex(item.id)} >{item.name}</NavButton>
                        </li>
                    ))
                }
            </ul>
        </NavbarContainer >
    )
}

export default SectionNavbar
