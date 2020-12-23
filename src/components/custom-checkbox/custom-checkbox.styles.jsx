import styled from 'styled-components'

export const CheckboxContainer = styled.label`
    display: inline-block;
    position: relative;
    cursor: pointer;
    font-size: 1.6rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: .5rem 1.2rem;
    border-radius: 1.5rem;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 3.6rem;
        width: 100%;
        background-color: #eee;
        z-index: -1;
        border-radius: 1.5rem;


        &:after {
            left: 9px;
            top: 5
        }
    }

    &:hover input ~ .checkmark {
        background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    input:checked ~ .checkmark {
        background-color: rgb(235, 172, 1);

    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    input:checked ~ .checkmark:after {
        display: block;
    }
`