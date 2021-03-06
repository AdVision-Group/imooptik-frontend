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
    margin-right: 3rem;

    img {
        width: 100%;
        margin-bottom: 2rem;
    }

    p {
        font-size: 1.6rem;
        white-space: nowrap;

        :nth-of-type(1) {
            font-weight: lighter;
            font-size: 1.4rem;
            opacity: .5;
        }
    }

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
        width: 2px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background:  var(--body-background-primary-color);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--primary-color);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--primary-color);
    }
    }

    li {
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;


            &:hover {
                div {
                    color: var(--primary-color);

                }
    }
    }
`

export const IconContainer = styled.div`
    width: 4rem;
    height: 4rem;
    /* background-color: #3E3E3E; */
    margin-right: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    color: ${({ isActive }) => isActive ? 'var(--primary-color)' : "var(--navlink-color)"};
    transition: color .3s ease-out;


    @media all and (max-width: 500px) {
        margin-right: 2rem;

    }
`

export const ActiveBorder = styled.span`
    opacity: ${({ isActive }) => isActive ? 1 : 0};
    position: absolute;
    width: 4px;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: var(--primary-color);
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
    color: var(--navlink-color);
    font-family: inherit;
    font-weight: 700;
    font-size: 1.8rem;
    transition: .2s color ease-out;


    @media all and (max-width: 500px) {
        font-size: 1.6rem;
    }

    &:hover {
        color: var(--primary-color);
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
            background-color: var(--primary-color);
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