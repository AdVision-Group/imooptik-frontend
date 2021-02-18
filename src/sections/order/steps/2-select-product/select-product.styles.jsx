import styled from 'styled-components'
import CustomButton from '../../../../components/custom-button/custom-button.component'

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 3rem;
    align-items: start;

`

export const CartContainer = styled.div`
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);

    h3 {
        padding: 2rem;
        font-size: 2.5rem;

    }
`

export const CartTable = styled.div`
    max-height: 30rem;
    overflow-y: scroll;
    padding: 2rem 2rem 0 2rem;
    padding-top: 0;

    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background:  var(--background-primary-color);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--primary-color);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--primary-color);
    }
`

export const CartTableHead = styled.div`
    display:grid; 
    grid-template-columns: 5rem 2fr 2fr 2fr 1fr;
    background-color: var(--background-primary-color);
    border-bottom: 1px solid var(--secondary-text-color);
    margin: 2rem;
    margin-right: calc(2rem + 10px);
    margin-bottom: 0;
`

export const CartParagraph = styled.p`
    padding-top: 2rem;
    padding-left: 2rem;
    opacity: .6;
`

export const ButtonOptions = styled.div`
    margin: 2rem 2rem;
    display: flex;
    justify-content: flex-end;
`

export const NextLensesButton = styled(CustomButton)`
    font-size: 1.4rem;
    display: block;

`

export const NextButton = styled(CustomButton)`
    font-size: 1.4rem;
    background-color: var(--primary-color);
    font-weight: bolder;
    display: block;
    margin-left: 1rem;
    /* margin: 2rem 2rem 2rem auto; */
`

export const SearchContainer = styled.div`
    /* max-width: 40rem; */
    padding: 2rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
    /* margin: 0 auto; */
    border-radius: .5rem;

    h3 {
        /* text-align: center; */
        font-size: 2.5rem;
    }

    div {

        &:not(:last-child) {
            margin-bottom: 3rem;

        }
    }
`

export const SearchButton = styled(CustomButton)`
    display: block;
    margin-left: auto;
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

export const ProductTableHead = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 10rem 15rem 1fr 1fr 10rem 1fr;
    border-bottom: 1px solid var(--secondary-text-color);
    font-weight: bolder;


`
export const ProductTableRow = styled.div`
    cursor: pointer;
    display: grid;
    align-content: center;
    grid-template-columns: 10rem 15rem 1fr 1fr 10rem 1fr;
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