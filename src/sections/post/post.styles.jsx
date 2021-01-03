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

    @media all and (max-width: 500px) {
        flex-direction: column;
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    height: inherit;
    height: 100%;

        @media all and (max-width: 800px) {
            grid-template-columns: 1fr ;
        }

`

export const PostImage = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    width: 100%;
    margin-top: 3rem;
    position: relative;

    img {
        position: absolute;
        width: 100%;
        /* height: 100%; */
        max-height: 40rem;
        left: 0;
        top: 0;
        object-fit: cover;
        object-position: center;

    }
`

export const DeleteButton = styled(CustomButtom)`
    font-size: 1.4rem;
    margin: 0 2rem;
    background-color: #DD4C4C;

    @media all and (max-width: 500px) {
        margin: 0 .8rem;
    }
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
