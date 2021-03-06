import styled from 'styled-components'

export const PopupContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999999;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0,0,0,0.3);
`

export const Panel = styled.div`
    max-width: 50rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem;

    border-radius: .5rem;

    background-color: var(--background-primary-color);
`

export const Message = styled.div`
    color: var(--primary-text-color);
    font-size: 2.1rem;
    font-weight: 700;
    text-align: center;

    margin-bottom: 2rem;
`