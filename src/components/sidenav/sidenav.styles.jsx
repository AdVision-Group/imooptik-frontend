import styled, { css } from 'styled-components'

export const AsideContainer = styled.aside`
    position: relative;
    background-color: #000000;
    padding: 3rem 0 3rem 3rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 999;
    overflow-x: hidden;

    @media all and (max-width: 1150px) {
        position: absolute;

        width: ${({ isOpen }) => isOpen ? "30rem" : '10rem'};
        transition: width .5s ease-out;

        @media all and (max-width: 800px){
            position: absolute;
            transition: left .5s ease-out;
            left: ${({ isOpen }) => isOpen ? 0 : '-30rem'};
        }

        @media all and (max-width: 500px) {
            width: 25rem;
            left: ${({ isOpen }) => isOpen ? 0 : '-25rem'};

        }
    }
`

export const LogoContainer = styled.div`
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 3rem;
    @media all and (max-width: 1150px) {
        transition: opacity .5s ease-out;
        opacity: ${({ isOpen }) => isOpen ? 1 : 0};

    }
`

export const NavLinksContainer = styled.ul`
    list-style: none;
    width: 100%;
    overflow-x: hidden;

    @media all and (max-height: 725px) {
        overflow-y: scroll;

        ::-webkit-scrollbar {
            width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background:  #3E3E3E;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #888;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }

    li {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 3rem;


        div {
            width: 5rem;
            height: 5rem;
            background-color: #3E3E3E;
            margin-right: 3rem;
            border-radius: 50%;

            @media all and (max-width: 500px) {
                margin-right: 2rem;

            }
        }
    }
`

export const ActiveBorder = styled.span`
    opacity: ${({ isActive }) => isActive ? 1 : 0};
    position: absolute;
    width: 4px;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgb(235, 172, 1);
    transition: opacity .3s ease-out;
`

export const NavLinksButton = styled.button`
    min-width: 20rem;
    cursor: pointer;
    outline:none;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    font-size: 1.8rem;
    transition: .2s color ease-out;


    @media all and (max-width: 500px) {
        font-size: 1.6rem;
    }

    &:hover {
        color: #eee;
    }


    &:focus {
        outline: none;
    }
`


export const ToggleButton = styled.button`
    cursor: pointer;
    display: none;
    outline: none;
    border: none;
    background-color: transparent;

    &:focus {
        outline: none;
    }

    @media all and (max-width: 1150px) {
        top: 3rem;
        left: ${({ isOpen }) => isOpen ? '32rem' : '12rem'};
        transition: all .5s ease-out;
        align-self: flex-start;
        display: block;
        background-color: transparent;
        border: none;
        width: 3.5rem;
        height: 2.5rem;
        position: absolute;

        @media all and (max-width: 800px) {
            left: ${({ isOpen }) => isOpen ? '32rem' : '2rem'};
            @media all and (max-width: 500px) {
                left: ${({ isOpen }) => isOpen ? '26rem' : '1rem'};
            }
        }

        div {
            position: absolute;
            width: 3.5rem;
            height: 2.5px;
            background-color: #000000;
            transition: all 0.3s ease-in-out;
            ${props => props.isOpen ? (css`
                &:nth-child(1) {
                    top: 1rem;
                    transform: rotate(45deg);
                }

                &:nth-child(2) {
                    opacity: 0;
                }

                &:nth-child(3) {
                    bottom: 1.3rem;
                    transform: rotate(-45deg);
                }
            `) : (css`
                &:nth-child(1) {
                    top: 0;
                }

                &:nth-child(2) {
                    top: 50%;
                    transform: translateY(-50%);
                }

                &:nth-child(3) {
                    bottom: 0;
                }
            `)}
        }
 
    }
`