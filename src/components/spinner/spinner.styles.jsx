import styled from 'styled-components'

export const SpinnerContainer = styled.div`
    border: 5px solid transparent;
    border-top: 5px solid rgb(256,172,1);
    border-radius: 50%;
    width: 38px;
    height: 38px;
    animation: spin 800ms linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`