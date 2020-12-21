import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    width: 100%;
    background-color:darkgray;

    div {
        width: 14.2%;
        padding: 2rem;
        text-align: center;
        font-weight: 700;
    }
`

export const Row = styled.div`
    width: 100%;
    display: flex;

    div {
        padding: 1rem 1rem;
        width: 14.2%;
        display: flex;
        height: 10rem;
        justify-content: space-between;
        align-items: flex-end;
        border: 1px solid gray;

        p:first-child {
            background-color: red;
            color: #fff;
            border-radius: 1.5rem;
            padding: .2rem .8rem;
        }
    }
`