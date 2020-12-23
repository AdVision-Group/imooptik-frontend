import styled from 'styled-components'
import { paddingStyles } from '../../global.styles'
import CustomButtom from '../../components/custom-button/custom-button.component'
import ReactQuill from 'react-quill';


export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
`

export const PostImage = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    height: 30rem;
    /* background-color: #eee; */
    margin-top: 3rem;
    position: relative;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;

    }
`

export const DeleteButton = styled(CustomButtom)`
    font-size: 1.4rem;
    margin: 0 2rem;
    background-color: #DD4C4C;
`
export const AddButton = styled(CustomButtom)`
    font-size: 1.4rem;
`

export const Title = styled.h2`
    margin-bottom: 2rem;
`

export const ContentTextare = styled(ReactQuill)`
    height: 100%;
    background-color: #F5F5F5;
    .ql-container, .ql-toolbar {
        border: none;
    }
`
