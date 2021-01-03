import styled from 'styled-components'

export const ButtonContainer = styled.button`
    cursor: pointer;
    background-color: #000;
    color: #fff;
    padding: .8rem 3rem;
    font-size: inherit;
    font-family: inherit;
    border-radius: .2rem;
    border: none;
    outline: none;

    &:focus {
        outline: none
    }

    @media all and (max-width: 500px) {
        padding: 0.5rem 1.5rem;
        font-size: 1.4rem;
    }
`