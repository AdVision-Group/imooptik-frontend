import styled from 'styled-components'
import { paddingStyles } from '../../global.styles'
import CustomButtom from '../../components/custom-button/custom-button.component'
import ReactQuill from 'react-quill';


export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
`

export const PostImage = styled.div`
    height: 30rem;
    background-color: #eee;
    margin-top: 3rem;
`

export const DeleteButton = styled(CustomButtom)`
    font-size: 1.4rem;
    margin: 0 2rem;
    background-color: #DD4C4C;
`
export const AddButton = styled(CustomButtom)`
    font-size: 1.4rem;
`

export const Title = styled.h2`
    margin-bottom: 2rem;
`

export const ContentTextare = styled(ReactQuill)`
    height: 100%;
    background-color: #F5F5F5;
    .ql-container, .ql-toolbar {
        border: none;
    }
`

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
