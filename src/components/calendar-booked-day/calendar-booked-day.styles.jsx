import styled from 'styled-components'

export const BookedDayContainer = styled.div`
    cursor: pointer;
    border: var(--appointment-container-border);
    background-color: ${({ color }) => color ? color : "transparent"};
    color: var(--appointment-container-text-color);
    font-weight: bolder;
    width: 100%;
    height: 100%;
    padding: .5rem;
    position: absolute;
    bottom: ${({ isHalfHour }) => isHalfHour ? 0 : "unset"};
    top: ${({ isHalfHour }) => isHalfHour ? 'unset' : 0};
    font-size: 1.2rem;
    z-index: 99;

    h4 {
        width: 8rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`