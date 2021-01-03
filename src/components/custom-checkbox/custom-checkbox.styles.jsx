import styled from 'styled-components'

export const CheckboxContainer = styled.div`
    display: inline-block;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 700;
    /* margin-right: 2rem; */
    background-color: ${({ isActive }) => isActive ? "rgb(235, 172, 1)" : "rgba(0,0,0,.06)"};
    color: ${({ isActive }) => isActive ? "#fff" : "#000"};
    padding: .8rem 3rem;
    border-radius: .2rem;
    transition: all .2s ease-out;

    @media all and (max-width: 500px) {
        padding: 0.5rem 1.5rem;
        font-size: 1.4rem;
    }
`