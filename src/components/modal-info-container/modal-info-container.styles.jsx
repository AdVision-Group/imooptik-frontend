import styled from 'styled-components'

export const ModalContainer = styled.div`
    position: absolute;
    /* background-color: #fff; */
    right: -4rem;
    top: -4rem;
    padding: 2rem;

    border-radius: .5rem;
    /* box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08); */
    z-index: 999;
`

export const CloseButton = styled.button`
    cursor: pointer;    
    display: flex;
    align-items: center;

    padding: 1rem 1rem;
    background-color: #000000;
    color: #fff;
    border:none;
    border-radius: .5rem;
    position: absolute;
    right: 0 ;
    top: 0;

    div {
        padding-left: .4rem;
        display: flex;
        align-items: center;
        justify-content:center;
    }
    /* box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08); */

`