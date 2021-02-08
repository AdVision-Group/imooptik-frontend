import styled from 'styled-components'

export const ArrowsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const IconContainer = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-primary-color);
    font-size: 3.5rem;
    transition: color .2s ease-in-out;

    &:hover {
        color: var(--primary-color);
    }

    &:disabled {
        cursor: default;
        opacity: .35;

        &:hover {
            color: var(--text-primary-color);
        }
    }
`