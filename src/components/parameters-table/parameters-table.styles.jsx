import styled from 'styled-components'

export const TableContainer = styled.div`
    display: grid;
    grid-template-columns: 10rem repeat(7, 6rem);
    margin-bottom: 3rem;
`

export const TitleCol = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 5rem);
    div {
        align-self: center;
    }
`

export const Col = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 5rem);
    div {
        text-align:center;
        align-self: center;
        margin-left: .5rem;


        &:nth-child(1) {
            align-self: center;
        }

        input {
            display:block;
            width: 100%;
            border: none;
            padding: 1rem .5rem;
            text-align: center;
            font-family: inherit;
            font-size: inherit;
            background-color: #F5F5F5;
            border-radius: .5rem;
            outline: none;

            &:focus {
                outline: none;
            }
        }

        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button {  

        opacity: 1;

        }
    }
`
