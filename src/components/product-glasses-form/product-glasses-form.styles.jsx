import styled from 'styled-components'
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component'

export const CategoryTitle = styled.h3`
    margin-bottom: 2rem;
`

export const CategoryContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1rem;
    flex-wrap: wrap;

`

export const CategoryCheckbox = styled(CustomCheckbox)`
    margin: 0 1rem 2rem;
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

    @media all and (max-width: 800px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;

        p {
            margin-left: unset;
        }

        div {
            width: 100%;
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

