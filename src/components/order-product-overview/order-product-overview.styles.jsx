import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const ProductContainer = styled.div`
    padding: 2rem;
    width: 30rem;
    border-radius: .5rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    display: grid;

    grid-template-columns: 10rem 1fr;
    grid-template-rows: repeat(3, auto);
    align-items: start;

    grid-template-areas:    "i i"
                            "t t"
                            "s s"
                            "p b";



    div {
        grid-area: i;
        justify-self: start;
        height: 20rem;
    }

    h3 {
        grid-area: t;
    }

    span {
        grid-area: s;
        font-size: 1.2rem;
        color: gray;
        margin-bottom: 1rem;
    }

    p {
        grid-area: p;
        justify-self: start;
        font-size: 2.2rem;
    }

    button {
        grid-area: b;
        justify-self: end;

    }
`

export const ImageContainer = styled.div`
    width: 100%;
    /* height:20rem; */
    

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: start;
    }  
`

export const AddButton = styled(CustomButton)`
    font-size: 1.2rem;
`
export const RemoveButton = styled(CustomButton)`
    font-size: 1.2rem;
    background-color: #DD4C4C;
`