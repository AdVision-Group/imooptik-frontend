import styled from 'styled-components'
import { paddingStyles } from '../../global.styles'
import CustomButton from '../../components/custom-button/custom-button.component'

export const Header = styled.div`
    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    color: var(--primary-text-color);
`

export const CreateCalendarButton = styled(CustomButton)`
    background-color: var(--primary-color);
    font-weight: bolder;
    margin-left: 1rem;
`
export const DeleteCalendarButton = styled(CustomButton)`
    background-color: var(--color-red);
`

export const AddDayButton = styled(CustomButton)`
    margin-top: 2rem;
    background-color: var(--primary-color);
    font-weight: bolder;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    align-items: start;
    margin-bottom: 5rem;
`

export const Container = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: var(--container-background-color);
    box-shadow: var(--container-shadow);
    margin-bottom: 3rem;

    h3 {
        margin-bottom: 2rem;
    }

    h4 {
        margin-top: 2rem;
    }

    select {
        margin-top: 2rem;
        /* min-width: 16.5rem; */
        width: 100%;
        background-color: var(--input-background-color);
        color: var(--input-color);
        border: none;
        padding: .8rem .5rem .8rem .5rem;
        font-size: inherit;
        font-family: inherit;
        display: block;
    }
`

export const ContainerRow = styled.div`
    grid-column: 1/3;
    padding: 2rem;
    border-radius: .5rem;
    background-color: var(--container-background-color);
    box-shadow: var(--container-shadow);
    margin-bottom: 3rem;
    min-width: 90rem;

    h3 {
        margin-bottom: 2rem;
    }

    h4 {
        margin-top: 2rem;
    }
`

export const TableHead = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    /* justify-items: center; */
    border-bottom: 1px solid var(--secondary-text-color);
`

export const TableCol = styled.div`
    padding: 2rem;
    text-align: center;

    border-right: ${({ isFirst }) => isFirst ? "1px solid var(--secondary-text-color)" : ""};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TableRow = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    /* justify-items: center; */
    /* align-items: center; */


    select {
        /* margin-top: 2rem; */
        /* min-width: 16.5rem; */
        width: 100%;
        background-color: var(--input-background-color);
        color: var(--input-color);
        border: none;
        padding: .8rem .5rem .8rem .5rem;
        font-size: inherit;
        font-family: inherit;
        display: block;
    }
`


// export const DayTimesContainer = styled.div`
//     --gap: 2rem;
//     display: flex;
//     flex-wrap: wrap;
//     margin: calc(-1 * var(--gap)) 2rem 2rem calc(-1 * var(--gap));
//     /* width: calc(100% + var(--gap)); */

//     & > * {
//         margin: var(--gap) 2rem 2rem var(--gap);
//     }
//     margin-top: 3rem;

// `