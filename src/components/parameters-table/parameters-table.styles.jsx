import styled from 'styled-components'

export const TableContainer = styled.div`
    display: grid;
    grid-template-columns: 2rem repeat(7, 7.5rem);
    margin-bottom: 3rem;
`

export const TitleCol = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 5rem);
    div {
        align-self: center;
        display:flex;
        justify-content: space-between;
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

export const OsContainer = styled.div`
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
            display:none;
            opacity: 0;

        }
`