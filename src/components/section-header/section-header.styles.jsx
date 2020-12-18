import styled, { css } from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
`

export const Left = styled.div`
    display: flex;
    align-items: center;
`

export const Right = styled.div`
    display: flex;
    align-items: center;
`

export const Notification = styled.div`
    background-color: #DD4C4C;
    margin-left: 1.5rem;
    color: #fff;
    padding: .5rem 1rem;
    border-radius: 1.5rem;
    font-size: 1.4rem;
`

const buttonStyles = css`
    cursor: pointer;
    background-color: #000;
    color: #fff;
    padding: .5rem 2.5rem;
    font-size: inherit;
    font-family: inherit;
    border-radius: .5rem;
    border: none;
    outline: none;
`

export const SearchButton = styled.button`
    ${buttonStyles}
    margin: 0 1.5rem 0 2rem;
`

export const AddButton = styled.button`
    ${buttonStyles}
`