import styled from 'styled-components'
import { paddingStyles } from '../../global.styles'
import CustomButton from '../../components/custom-button/custom-button.component'
import CustomCheckbox from '../../components/custom-checkbox/custom-checkbox.component'


export const Header = styled.div`
    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;
    color: var(--primary-text-color);
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
    margin-bottom: 4rem;

    div {
        background-color: var(--body-background-primary-color);
        padding: 2rem;
        border-radius: .5rem;
        text-align: center;

        h3 {
            font-weight: lighter;
            margin-bottom: 1rem;
            opacity: .6;

        }

        p {
            font-size: 4rem;
        }
    }
`

export const StatsGrid = styled.div`
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    /* grid-gap: 4rem; */
`

export const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    margin-bottom: 4rem;

    div {
        background-color: var(--body-background-primary-color);
        padding: 2rem;
        border-radius: .5rem;
        text-align: center;

        h3 {
            font-weight: lighter;
            margin-bottom: 1rem;
            opacity: .6;

        }

        p {
            font-size: 4rem;
        }
    }

`
// export const StatsContainer = styled.div`
//     padding: 2rem;
//     border-radius: .5rem;
//     box-shadow: var(--container-shadow);
//     background-color: var(--container-background-color);


//     div {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//     }

// `

export const ReportContainer = styled.div`
    padding: 2rem; 
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
    border-radius: .5rem;

    h2 {
        margin-bottom: 2rem;
    }
`

export const SubmitButton = styled(CustomButton)`
    background-color: var(--primary-color);
    font-weight: bolder;
`

export const CheckboxContainer = styled.div`
    margin-bottom: 2rem;
`

export const TypeCheckbox = styled(CustomCheckbox)`
    margin-top: 1rem;
    margin-right: 1rem;
`

export const TwoColContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
`