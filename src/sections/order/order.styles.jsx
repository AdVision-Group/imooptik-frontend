import styled from "styled-components"
import { paddingStyles } from '../../global.styles'

import CustomButton from "../../components/custom-button/custom-button.component"
import CustomCheckBox from '../../components/custom-checkbox/custom-checkbox.component'

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;

    @media all and (max-width: 800px) {
        flex-wrap: wrap;

        div:nth-child(2) {
            margin-bottom: 2rem;
        }
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

// SELECT USER STEP
// SELECT USER STEP
// SELECT USER STEP

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
// SELECT USER STEP END
// SELECT USER STEP END
// SELECT USER STEP END

// PRODUCT STEP
// PRODUCT STEP
// PRODUCT STEP
export const ProductTableHead = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 10rem 15rem 1fr 1fr 10rem 1fr;
    border-bottom: 1px solid #000;
    font-weight: bolder;
`
export const ProductTableRow = styled.div`
    cursor: pointer;
    display: grid;
    align-content: center;
    grid-template-columns: 10rem 15rem 1fr 1fr 10rem 1fr;
    margin-bottom: 1rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    transition: all .3s ease-out;

    &:hover {
        background-color: rgb(235, 172, 1); 
        font-weight: bolder;
        color: #fff;
    }
`
// PRODUCT STEP
// PRODUCT STEP
// PRODUCT STEP

// LENSES STEP
// LENSES STEP
// LENSES STEP
export const ParametersContainer = styled.div`
    h3 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
`
export const SelectLensesContainer = styled.div`
    margin: 5rem 0;

    h3 {
        font-size: 3rem;
        margin-bottom: 3rem;
    }
`
export const LensesContainer = styled.div`
    cursor: pointer;
    max-width: 32rem;
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    text-align: center;
    transition: transform .3s ease-out,
                box-shadow .3s ease-out;

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
        box-shadow: 0 0 2.5rem 0 rgba(0,0,0, 0.08);
    }
`

export const LensesImg = styled.div`
    background-color: lightgray;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    margin-bottom: 1.5rem;
`
// LENSES STEP
// LENSES STEP
// LENSES STEP

// SUMMARY STEP
// SUMMARY STEP
// SUMMARY STEP
export const ProductsOverviewContainer = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    margin-bottom: 3rem;
`

export const SummaryTableTitle = styled.h3`
    margin-bottom: 3rem;
`

export const SummaryTableHead = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 5rem 1fr 2fr 2fr 10rem 15rem;
    font-weight: bolder;
    border-bottom: 1px solid #000;
`

export const SummaryTableRow = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 5rem 1fr 2fr 2fr 10rem 15rem;
    /* box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08); */
    /* margin-bottom: 1rem; */
`

export const TotalContainer = styled.div`
    margin-top: 2rem;
    display:flex;
    justify-content: flex-end;
    align-items: center;

    span {
        display: block;
        margin-right: .5rem;
        
    }

    p {
        font-weight: bolder;
        font-size: 2.5rem;
    }
`
export const SummaryGridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    align-items: start;
`

export const UserOverviewContainer = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);

    h3 {
        margin-bottom: .5rem;
    }

    h4 {
        margin-top: 1rem;

    }

`

export const StyledParagraph = styled.p`
    opacity: .83;
    font-size: 1.4rem;
    margin-left: 1.5rem;

    &:not(:last-child) {
        margin-bottom: .5rem;
    }
`

export const OptionsContainer = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);

    h3 {
        margin-bottom: 1rem;
    }
`

export const OptionButton = styled(CustomButton)`
    &:not(:last-child) {
        margin-right: .5rem;
    }

    &:last-child {
        background-color: rgb(235, 172, 1);
        font-weight: bolder;
    }
`
// SUMMARY STEP
// SUMMARY STEP
// SUMMARY STEP