import styled from 'styled-components'

export const CheckboxContainer = styled.div`
    display: inline-block;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 700;
    /* margin-right: 2rem; */
    background-color: ${({ isActive }) => isActive ? "var(--primary-color)" : "var(--body-background-primary-color)"};
    color: ${({ isActive }) => isActive ? "var(--primary-text-color)" : "var(--secondary-text-color)"};
    padding: .8rem 3rem;
    border-radius: .2rem;
    transition: all .2s ease-out;

    @media all and (max-width: 500px) {
        padding: 0.5rem 1.5rem;
        font-size: 1.4rem;
    }
`