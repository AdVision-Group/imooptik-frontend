import styled from 'styled-components'
import CustomButton from '../../components/custom-button/custom-button.component'

export const PostContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 25rem 1fr 25rem;

    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    padding: 2rem;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }

        @media all and (max-width: 800px) {
        grid-template-columns : 20rem 1fr;
        grid-template-rows: 1fr 1fr;

        @media all and (max-width: 500px) {
            grid-template-columns : 1fr;
            grid-template-rows: unset;
        }
    }
`

export const PostImage = styled.div`
    /* width: 100%; */
    /* height: 100%; */
    margin-right: 2rem;

    img {
        width: 100%;
        height: 100%;
        object-position: top;
        object-fit: contain;
    }

        @media all and (max-width: 800px) {
        align-self: start;
        grid-row-start: 1;
        grid-row-end: 3;   

        @media all and (max-width: 500px) {
            justify-self: center;
            margin-bottom: 2rem;
        }

    }
`

export const PostContent = styled.div`
    h2 {
        font-size: 1.6rem;
    }

    p {
        font-size: 1.4rem;
        color: gray;
    }

        @media all and (max-width: 500px) {
            margin-bottom: 2rem;
        }
`

export const Options = styled.div`
    align-self: end;
    justify-self: end;
`

export const UpdateButton = styled(CustomButton)`
    font-size: 1.4rem;
    margin-right: 1rem;
`

export const DeleteButton = styled(CustomButton)`
    font-size: 1.4rem;
    background-color: rgb(235, 172, 1);
`