import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const LensesContainer = styled.div`
    padding: 2rem;
    width: 30rem;
    border-radius: .5rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);

    display: flex;

    flex-direction: column;
    align-items: center;

    h3 {
        margin-bottom: 2rem;
    }

    p {
        margin-bottom: 1rem;

        &:nth-of-type(1) {
            opacity: .63;
        }
    }

    h4 {
        font-size: 2rem;
    }
`

export const ImageContainer = styled.div`
    margin-bottom: 3rem;


    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: start;
    }  
`

export const SelectButton = styled(CustomButton)`
    margin-top: 2rem;
    font-size: 1.2rem;
`