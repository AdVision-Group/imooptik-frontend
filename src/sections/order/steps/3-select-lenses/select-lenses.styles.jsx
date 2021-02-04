import styled from 'styled-components'

export const ParametersContainer = styled.div`
    h3 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
`
export const SelectLensesContainer = styled.div`
    margin: 5rem 0;

    h3 {
        font-size: 3rem;
        margin-bottom: 3rem;
    }
`
export const LensesFlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`

export const LensesContainer = styled.div`
    cursor: pointer;
    width: 100%;
    max-width: 32rem;
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    text-align: center;
    transition: transform .3s ease-out,
                box-shadow .3s ease-out;

    &:last-child {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h4 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem
    }

    img {
        /* background-color:#000; */
        width: 15rem;
        height: 15rem;
        margin-bottom: 1rem; 
        object-fit: contain;
        object-position: center;
    }

    p {
        opacity: .65;
        &:not(:last-child){
            margin-bottom: .5rem;
        }
    }

    h5 {
        font-size: 2.5rem;
    }

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 0 2.5rem 0 rgba(0,0,0, 0.08);
    }
`

export const LensesImg = styled.div`
    background-color: lightgray;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    margin-bottom: 1.5rem;
`