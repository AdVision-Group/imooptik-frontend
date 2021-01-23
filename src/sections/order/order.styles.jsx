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

// SELECT USER STEP
// SELECT USER STEP
// SELECT USER STEP
export const SelectUserContainer = styled.div`
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
export const UserTableContainer = styled.div`
    margin: 5rem 0;
`
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
export const UserTableCol = styled.div`
    padding: 2rem;
    text-align: center;
`
// SELECT USER STEP END
// SELECT USER STEP END
// SELECT USER STEP END