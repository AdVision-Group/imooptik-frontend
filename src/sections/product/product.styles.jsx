import styled from 'styled-components'
import { paddingStyles } from '../../global.styles'
import CustomButton from '../../components/custom-button/custom-button.component'
import CustomCheckbox from '../../components/custom-checkbox/custom-checkbox.component'

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;
`

export const DeleteButton = styled(CustomButton)`
    font-size: 1.4rem;
    margin: 0 2rem 0 0;
    background-color: #DD4C4C;
`
export const AddButton = styled(CustomButton)`
    font-size: 1.4rem;
`

export const Title = styled.h3`
    margin-top: 2rem;
    /* margin-bottom: 2rem; */
`

export const CategoryTitle = styled.h3`
    margin-bottom: 2rem;
`

export const ImageContainer = styled.div`
    margin-top: 2rem;
    
`

export const ProductImage = styled.div`
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content:center;
    background-color: #eee;
    margin-top: 3rem;
    padding: 6rem;
    position: relative;
    max-width: 45rem;

    img {
        position: absolute;
        width: 100%;
        /* max-height: 40rem; */
        object-fit:cover;
        object-position:center;

        /* height: 100%; */
        left: 0;
        top: 0;

    }
`

export const CategoryContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1rem;
    flex-wrap: wrap;

`

export const CategoryCheckbox = styled(CustomCheckbox)`
    margin: 0 1rem 2rem;
`


export const DraftCheckBox = styled(CustomCheckbox)`
    margin-right: 2rem;
`