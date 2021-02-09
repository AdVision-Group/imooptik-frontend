import styled from 'styled-components'
import CustomButton from '../../../../components/custom-button/custom-button.component'

export const UserTableHead = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 2fr 25rem;
    border-bottom: 1px solid var(--secondary-text-color);
    font-weight: bolder;
`
export const UserTableRow = styled.div`
    cursor: pointer;
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 2fr 25rem;
    margin-bottom: 1rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);

    transition: all .3s ease-out;

    &:hover {
        background-color: var(--primary-color); 
        font-weight: bolder;
        color: var(--button-font-color);
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
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
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