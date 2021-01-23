import styled from "styled-components"
import { paddingStyles } from '../../global.styles'

import CustomButton from "../../components/custom-button/custom-button.component"
import CustomCheckBox from '../../components/custom-checkbox/custom-checkbox.component'

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    ${paddingStyles}
    padding-top: 3rem;
    padding-bottom: 3rem;

    @media all and (max-width: 800px) {
        flex-wrap: wrap;

        div:nth-child(2) {
            margin-bottom: 2rem;
        }
    }
`


export const SelectUserContainer = styled.div`
    max-width: 40rem;
    padding: 2rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);
    margin: 0 auto;
    border-radius: .5rem;

    h3 {
        text-align: center;
        font-size: 3rem;
    }

    div {

        &:not(:last-child) {
            margin-bottom: 3rem;

        }
    }
`