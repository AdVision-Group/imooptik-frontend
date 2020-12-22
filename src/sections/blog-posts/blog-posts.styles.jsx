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
`

export const PostContent = styled.div`
    h2 {
        font-size: 1.6rem;
    }

    p {
        font-size: 1.4rem;
        color: gray;
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