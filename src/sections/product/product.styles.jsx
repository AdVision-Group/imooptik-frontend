import styled from 'styled-components'
import { paddingStyles } from '../../global.styles'
import CustomButton from '../../components/custom-button/custom-button.component'

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;
`

export const DeleteButton = styled(CustomButton)`
    font-size: 1.4rem;
    margin: 0 2rem;
    background-color: #DD4C4C;
`
export const AddButton = styled(CustomButton)`
    font-size: 1.4rem;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    align-items: start;
`

export const GridRow = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 2rem;
`

export const GridRowRevert = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 2rem;
`

export const Container = styled.div`
    border-radius: .5rem;
    margin-bottom: 2rem;
    /* padding: 3rem 4rem; */
    /* box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08); */

`

export const Title = styled.h3`
    /* margin-top: 2rem; */
    margin-bottom: 2rem;
`

export const ColoCodeInputContainer = styled.div`
    margin-bottom: 2rem;
    max-width: 15rem;
`

export const StockInputContainer = styled.div`
    margin-top: 2rem;
    max-width: 15rem;
`

export const ProductImage = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    background-color: #eee;
    margin-top: 3rem;

        position: relative;

    img {
        position: absolute;
        width: 100%;
        max-height: 40rem;

        /* height: 100%; */
        left: 0;
        top: 0;

    }
`