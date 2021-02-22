import styled from 'styled-components'
import CustomButton from '../../../../components/custom-button/custom-button.component'

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 3rem;
    align-items: start;
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


export const SelectLensesContainer = styled.div`
    margin: 5rem 0;

    h3 {
        font-size: 3rem;
        margin-bottom: 3rem;
    }
`
export const LensesTableContainer = styled.div`
    /* display: flex;
    flex-wrap: wrap;
    gap: 2rem; */
`

export const LensesTableHead = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 10rem 1fr 2fr 1fr 1fr 10rem;
    border-bottom: 1px solid var(--secondary-text-color);
    font-weight: bolder;
`

export const LensesTableRow = styled.div`
    cursor: pointer;
    display: grid;
    align-items: center;
    grid-template-columns: 10rem 1fr 2fr 1fr 1fr 10rem;

    margin-bottom: 1rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);

    transition: all .3s ease-out;

    img {
        /* background-color:#000; */
        width: 5rem;
        height: 5rem;
        margin-bottom: 1rem; 
        object-fit: contain;
        object-position: center;
    }

    &:hover {
        background-color: var(--primary-color); 
        font-weight: bolder;
        color: var(--button-font-color);
    }
`

export const LensesImg = styled.div`
    background-color: var(--background-primary-color);
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    margin: 0 auto;
    /* margin-bottom: 1.5rem; */
`

export const CartContainer = styled.div`
    grid-column: 2/3;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);


`

export const HeadingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem;

    h3 {
        font-size: 2.5rem;
    }
`

export const UnselectButton = styled(CustomButton)`
    font-size: 1.2rem;
    background-color: var(--primary-color);
    font-weight: bolder;
`

export const CartTable = styled.div`
    max-height: 30rem;
    overflow-y: scroll;
    padding: 2rem 2rem 0 2rem;
    padding-top: 0;
    font-size: 1.4rem;


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
export const TableCol = styled.div`
    padding: 2rem;
    text-align: center;

`

export const CartTableHead = styled.div`
    display:grid; 
    grid-template-columns: 5rem 2fr 2fr 2fr 1fr 2fr;
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
    background-color: var(--container-background-color);

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
