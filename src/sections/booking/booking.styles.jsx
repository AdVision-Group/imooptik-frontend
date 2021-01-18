import styled from 'styled-components'
import CustomButton from '../../components/custom-button/custom-button.component'

export const Title = styled.h2`
    margin-bottom: 2rem;
`

export const GridRow = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(25rem, 1fr) );
    margin-bottom: 3rem;
    grid-gap: 2rem;
`


export const CalendarGridContainer = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 4fr 2fr;
    align-items: start;
    margin-bottom: 10rem;
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
    margin: .5rem 0 1rem;
`

export const AppoimentCol = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:    "i b"
                            "n n";
`

export const NoteContainer = styled.div`
    grid-area: n;
    padding: .5rem 0;

    p {
        color: gray;
    }
`

export const Name = styled.p`
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    /* margin-top: .5rem; */
`

export const Desc = styled.span`
    color: gray;
    font-size: 1.2rem;
    line-height: 1;
`

export const Options = styled.div`
    align-self: end;
    justify-self: end;
`

export const ConfirmButton = styled(CustomButton)`
    display:block;  
    font-size: 1.2rem;
    /* margin-right: .5rem; */
    padding: .2rem .8rem;
    border-radius: .5rem;
    margin-left: auto;
    margin-bottom: .5rem;

`

export const DeclineButton = styled(CustomButton)`
    display:block;  
    margin-left: auto;
    font-size: 1.2rem;
    /* margin-right: 1rem; */
    padding: .2rem .8rem;
    border-radius: .5rem;
`

export const AppoimentContainer = styled.div`
    margin-bottom: 1rem;
`