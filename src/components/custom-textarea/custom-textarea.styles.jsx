import styled, { css } from "styled-components"

const shrinkLabel = css`
    left: .5rem;
    top: -14px;
    font-size: 12px;
    color: var(--input-color);
`
export const InputGroup = styled.div`
    position: relative;
    /* margin: 45px 0; */

    .form-input {
        background: none;
        background-color: var(--input-background-color);
        color: var(--input-color);

        font-size: 1.5rem;
        padding: .5rem .5rem .5rem 2rem;
        display: block;
        width: 100%;
        border: none;
        border-radius: .5rem;
        /* border-bottom: 1px solid #000; */
        margin: 25px 0;
        font-family: inherit;
        resize: none;

        &:focus {
        outline: none;
        }

        &:focus ~ .form-input-label {
            ${shrinkLabel}
        }
    }

    .form-input-label {
        color: var(--input-color);
        font-size: 1.4rem;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 1.5rem;
        top: .6rem;
        transition: 300ms ease all;

        &.shrink {
            ${shrinkLabel}
        }
    }
`
