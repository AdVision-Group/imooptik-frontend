import styled from "styled-components"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Container = styled.div`
    margin-bottom: 3rem;
`

export const ProductContainer = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
`

export const AddProductButton = styled(CustomButton)`
    font-size: 1.2rem;
`

export const SearchContainer = styled.div`
    display: flex;
    align-items: flex-end;
`

export const SearchButton = styled(CustomButton)`

`