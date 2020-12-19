import React from 'react'
import { Container } from './scroll-container.styles'

const ScrollContainer = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default ScrollContainer