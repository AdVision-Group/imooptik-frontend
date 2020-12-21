import styled from 'styled-components'
import CustomButton from '../../components/custom-button/custom-button.component'

export const Title = styled.h2`
    margin-bottom: 2rem;
`

export const ContainerOverview = styled.div`
    padding: 2rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);

    &:not(:last-child) {
        margin-right: 2rem;
    }

    h3  { 
        font-size: 1.8rem;
    }

    p {
        font-size: 1.4rem;
        color: gray;
    }
`

export const GridRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 3rem;
`

export const UpdateButton = styled(CustomButton)`
    margin-top: 2rem;
    font-size: 1.4rem;
    display: block;
    margin-left: auto;
`

export const CalendarGridContainer = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 4fr 2fr;
`
export const AppoimentOverview = styled.div`
    margin-left: 2rem;  
    padding: 2rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    align-self: start;
`

export const Time = styled.p`
    font-size: 1.4rem;
    font-weight: 700;
`

export const Line = styled.div`
    height: 1px;
    background-color: #eee;
    width: 100%;
    margin: .5rem 0;
`

export const TwoRowGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const Name = styled.p`
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    margin-top: .5rem;
`

export const Desc = styled.span`
    color: gray;
    font-size: 1.2rem;
`

export const Options = styled.div`
    align-self: end;
`

export const ConfirmButton = styled(CustomButton)`
    font-size: 1.2rem;
    margin-right: .5rem;
    padding: .2rem .8rem;
    border-radius: .5rem;
`

export const DeclineButton = styled(CustomButton)`
    font-size: 1.2rem;
    margin-right: 1rem;
    padding: .2rem .8rem;
    border-radius: .5rem;
`

export const AppoimentContainer = styled.div`
    margin-bottom: 1rem;
`