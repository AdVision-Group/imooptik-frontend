import styled from "styled-components"
import { paddingStyles } from '../../global.styles'

import CustomButton from "../../components/custom-button/custom-button.component"

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
    margin-bottom: 3rem;
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
    font-size: 1.2rem;
`

export const SearchContainer = styled.div`
    display: flex;
    align-items: flex-end;

    margin-bottom: 3rem;
`

export const SearchButton = styled(CustomButton)`

`