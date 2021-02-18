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
export const LensesFlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`

export const LensesContainer = styled.div`
    cursor: pointer;
    width: 100%;
    max-width: 32rem;
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
    text-align: center;
    transition: transform .3s ease-out,
                box-shadow .3s ease-out;

    &:last-child {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h4 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem
    }

    img {
        /* background-color:#000; */
        width: 15rem;
        height: 15rem;
        margin-bottom: 1rem; 
        object-fit: contain;
        object-position: center;
    }

    p {
        opacity: .65;
        &:not(:last-child){
            margin-bottom: .5rem;
        }
    }

    h5 {
        font-size: 2.5rem;
    }

    &:hover {
        transform: scale(1.03);
        box-shadow: var(--container-shadow);
    }
`

export const LensesImg = styled.div`
    background-color: var(--background-primary-color);
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    margin-bottom: 1.5rem;
`

export const CartContainer = styled.div`
    grid-column: 2/3;
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
export const TableCol = styled.div`
    padding: 2rem;
    text-align: center;

`

export const CartTableHead = styled.div`
    display:grid; 
    grid-template-columns: 5rem 2fr 2fr 2fr 2fr;
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
