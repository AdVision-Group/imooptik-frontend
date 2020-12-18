import styled, { css } from "styled-components"

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

export const NavbarContainer = styled.div`
    margin-bottom: 3rem;

    ul {
        display: flex;
        list-style: none;

        li {
            margin-right: 1.5rem;
        }
    }
`

export const NavButton = styled.div`
    ${buttonStyles}
    background-color: ${({ active }) => active ? '#000' : '#fff'};
    color: ${({ active }) => active ? '#fff' : '#000'};
    font-weight: ${({ active }) => active ? 400 : 700};
    padding: ${({ active }) => active ? ".5rem 2.5rem" : ".5rem 1rem .5rem 0"};
`

export const ProductContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 25rem 1fr 25rem;

    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    padding: 2rem;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`

export const ProductImage = styled.div`
    /* width: 100%; */
    height: 100%;
    background-color: #eee;
    margin-right: 2rem;
`

export const ProductContent = styled.div`
    h2 {
        font-size: 1.6rem;
    }
`

export const ProductId = styled.p`
    font-size: 1.2rem;
    color: gray;
    margin-bottom: 2rem;
`

export const StockInfo = styled.p`
    font-size: 1.4rem;
    font-weight: 700;
    color: #32AA5F;
    margin-bottom: 2rem;
`

export const Price = styled.p`
    font-weight: 700;
    font-size: 1.8rem;
`

export const Options = styled.div`
    align-self: end;
    justify-self: end;
`

export const UpdateButton = styled.button`
    ${buttonStyles}
    font-size: 1.4rem;
    margin-right: 1rem;
`

export const DeleteButton = styled.button`
    ${buttonStyles}
    font-size: 1.4rem;
    background-color: #DD4C4C;
`