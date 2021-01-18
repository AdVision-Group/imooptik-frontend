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

export const SubmitOrderButton = styled(CustomButton)`

`

export const Container = styled.div`
    margin: 3rem 0;
    position: relative;
    width: 100%;
`

export const UserList = styled.div`
    position: absolute;
    background-color: #fff;
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    width: 35rem;
    max-height: 40rem;
    z-index: 999;
    top: 18rem;
    overflow-y: scroll;

    div {
        cursor: pointer;
        padding: .5rem 1rem;
        border-radius: .5rem;

        transition: background-color .2s ease-out;
        background-color: #f5f5f5;

        &:hover {
            background-color: lightgray;
        }

        p:nth-child(2) {
            color: gray;
        }

        &:not(:last-child) {
            margin-bottom: 2rem;
        }
    }
`

export const ProductContainer = styled.div`
    --gap: 2rem;
    display: flex;
    flex-wrap: wrap;
    margin: calc(-1 * var(--gap)) 2rem 2rem calc(-1 * var(--gap));
    width: calc(100% + var(--gap));

    & > * {
    margin: var(--gap) 2rem 2rem var(--gap);

}


`

export const AddProductButton = styled(CustomButton)`
    display: block;
    margin-left: auto;
`

export const SearchContainer = styled.div`
    display: flex;
    align-items: flex-end;

    margin-bottom: 3rem;
`

export const SearchButton = styled(CustomButton)`

`

export const AddAddressButton = styled(CustomButton)`
    font-size: 1rem;
`

export const NextButton = styled(CustomButton)`
    display: block;
    margin-left: auto;
`

export const Title = styled.h2`
    margin-bottom: 2rem;
`

export const SubTitle = styled.h3`
    margin: 2rem 0;
`

export const ParametersContainer = styled.div`
    --gap: 2rem;
    display: flex;
    flex-wrap: wrap;
    margin: calc(-1 * var(--gap)) 2rem 2rem calc(-1 * var(--gap));
    /* width: calc(100% + var(--gap)); */

    & > * {
        margin: var(--gap) 2rem 2rem var(--gap);
    }
`

export const SummaryParametersContainer = styled(ParametersContainer)`
    margin-top: 3rem;
    margin-bottom: 3rem;

`

export const SummaryParameterCol = styled.div`
    
    h3 {
        margin-bottom: 2rem;
    }

    div {
        margin-bottom: 1rem;
        font-size: 1.8rem;
    }
`

export const DifferentAddress = styled(CustomCheckBox)`
    margin-top: 3rem;
`