import styled from 'styled-components'

export const PaginationContainer = styled.div`
    ul {
        width:3rem;
        list-style: none;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;

        li {

        }
    }
`

export const PageNumber = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    background-color: ${({ isActive }) => isActive ? "#000" : "transparent"};
    color: ${({ isActive }) => isActive ? "#fff" : "#000"};
    font-family: inherit;
    font-size: inherit;
    border-radius: 50%;
    padding: 0.3rem 1rem;


    &:focus {
        outline: none;
    }
`