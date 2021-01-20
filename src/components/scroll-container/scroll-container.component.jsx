import React from 'react'
import { Container, FixedContainer } from './scroll-container.styles'

const ScrollContainer = ({ children }) => {
    return (
        <Container>
            <FixedContainer>
                {children}
            </FixedContainer>
        </Container>
    )
}

export default ScrollContainer