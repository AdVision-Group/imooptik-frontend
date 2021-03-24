import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const ModalContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99999;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0,0,0,0.3);
`

export const Modal = styled.div`
    width:100%;
    max-width: 75rem;
    max-height: 60rem;

    overflow-y: scroll;

    padding: 2rem;
    border-radius: .5rem;
    background-color: var(--background-primary-color);
    color: var(--primary-text-color);

    position: relative;
    z-index: 999999;

    h2{ 
        margin-bottom: 2rem;
        text-align: center;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background:  var(--background-primary-color);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--primary-color);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--primary-color);
    }
`

export const CloseButton = styled.button`
    width: 100%;
    height: 100%;

    position: fixed;
    left: 0;
    right: 0;
    z-index: 99999;

    border: none;
    outline: none;
    opacity: 0;

    &:focus {
        outline: none
    }
`

export const CustomSelect = styled.select`
    margin-top: 1.5rem;
    min-width: 16.5rem;
    width: 100%;
    background-color: var(--input-background-color);
    color: var(--input-color);
    border: none;
    padding: .5rem .5rem .5rem 1rem;
    font-size: inherit;
    font-family: inherit;
    display: block;
    margin-bottom: 2rem;
`

export const SubmitButton = styled(CustomButton)`
    display: block;
    margin: 0 auto;
    background-color: var(--primary-color);
    font-weight: bolder;
`

export const GridContainer = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 3rem;
    grid-gap: 1rem;

    div {
        width: 15rem;
        text-align: center;
        padding: 2rem 1rem;
        border-radius: .3rem;
        background-color: var(--body-background-primary-color);

        h3 {
            font-weight: lighter;
        }

        p {
            font-size: 2.5rem;
        }

        span {
            opacity: .63;
            font-size: 1.4rem;
        }
    }
`

export const DiscountCheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;


    label {
        display: block;
        outline: none;
        margin-left: 1rem;

        &:focus {
            outline: none;

        }
    }

    input: {
        display: block;
    }
`

export const CouponValueContainer = styled.div`
    margin-bottom: 2rem;
`