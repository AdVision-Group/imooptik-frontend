import styled from 'styled-components'
import CustomButton from '../../../../components/custom-button/custom-button.component'

export const UserTableHead = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 2fr 25rem;
    border-bottom: 1px solid #000;
    font-weight: bolder;
`
export const UserTableRow = styled.div`
    cursor: pointer;
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 2fr 25rem;
    margin-bottom: 1rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    transition: all .3s ease-out;

    &:hover {
        background-color: rgb(235, 172, 1); 
        font-weight: bolder;
        color: #fff;
    }
`

export const SearchButton = styled(CustomButton)`
    display: block;
    margin: 0 auto;
`

export const TableContainer = styled.div`
    margin: 5rem 0;
`
export const TableCol = styled.div`
    padding: 2rem;
    text-align: center;

    img {
        width: 5rem;
    }
`

export const SearchContainer = styled.div`
    max-width: 40rem;
    padding: 2rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    margin: 0 auto;
    border-radius: .5rem;

    h3 {
        text-align: center;
        font-size: 3rem;
    }

    div {

        &:not(:last-child) {
            margin-bottom: 3rem;

        }
    }
`