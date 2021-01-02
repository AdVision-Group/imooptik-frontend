import styled from 'styled-components'
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component'

export const FormCheckbox = styled(CustomCheckbox)`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`

export const TextareaRow = styled.div`
    display: grid;
    grid-template-columns: 35rem 1fr;
    /* align-items: center; */
    /* max-width: 45rem; */

    p {
        margin-top: 2.5rem;
        margin-left: 2rem;
        opacity: .75;

        span {
            font-weight: 700;
        }
    }
`

export const CustomSelect = styled.select`
    margin-top: 1.5rem;
    min-width: 16.5rem;
    width: 100%;
    background-color: #F5F5F5;
    border: none;
    padding: .5rem .5rem .5rem 1rem;
    font-size: inherit;
    font-family: inherit;
    display: block;
`

export const Title = styled.h3`
    margin-top: 2rem;
`