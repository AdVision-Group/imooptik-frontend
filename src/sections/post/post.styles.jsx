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
    color: var(--primary-text-color);


    @media all and (max-width: 500px) {
        flex-direction: column;
    }
`

export const GridContainer = styled.div`
    display: grid;
    align-items: start;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    height: inherit;
    height: 100%;

        @media all and (max-width: 800px) {
            grid-template-columns: 1fr ;
        }

`

export const Container = styled.div`
    padding: 2rem;
    background-color: var(--container-background-color);
    box-shadow: var(--container-shadow);
`

export const PostImage = styled.div`
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content:center;
    width: 100%;
    background-color: ${({ hasImage }) => hasImage ? "transparent" : "var(--input-background-color)"};
    margin-top: 3rem;
    padding: 6rem;

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
    background-color: var(--color-red);

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
    height: 50rem;
    background-color: var(--input-background-color);
    color: var(--input-color);
    
    .ql-container, .ql-toolbar {
        border: none;
    }
`
