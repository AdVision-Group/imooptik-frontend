import styled from 'styled-components'
import CustomButton from '../../components/custom-button/custom-button.component'

export const NoPermissionContainer = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.3);

    div {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        border-radius: .5rem;
        background-color: white;
    }

    .illu {
        max-width: 40rem;
        height: auto;
        margin-bottom: 2rem;
    }

    p {
        margin-bottom: 2rem;
    }
`

export const LogoutButton = styled(CustomButton)`

`