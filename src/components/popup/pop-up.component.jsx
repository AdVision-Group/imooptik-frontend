import React from "react";

import CustomButton from '../custom-button/custom-button.component'
import Spinner from "../spinner/spinner.component";

import {
    PopupContainer,
    Panel,
    Message
} from './pop.up.styles'

export default function Popup(props) {
    const { loading, title, close } = props;

    return (
        <PopupContainer>
            {loading ? <Panel><Spinner /></Panel> : (
                <Panel>
                    <Message>{title}</Message>
                    <CustomButton onClick={close}>Zavrieť</CustomButton>
                </Panel>
            )}
        </PopupContainer>
    )
}
