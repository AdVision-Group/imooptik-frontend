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
    margin-left: 1rem;
`
export const DeleteCalendarButton = styled(CustomButton)`
    background-color: var(--color-red);

`

export const DayTimesContainer = styled.div`
    --gap: 2rem;
    display: flex;
    flex-wrap: wrap;
    margin: calc(-1 * var(--gap)) 2rem 2rem calc(-1 * var(--gap));
    /* width: calc(100% + var(--gap)); */

    & > * {
        margin: var(--gap) 2rem 2rem var(--gap);
    }
    margin-top: 3rem;

`

export const DayNames = styled.div`
    h3 {
        margin-bottom: 3rem;
    }

    h4 {
        margin-bottom: 3.74rem;
        font-weight: lighter;
    }
`