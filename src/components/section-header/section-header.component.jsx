import React from 'react'

import CustomInput from '../custom-input/custom-input.component'

import {
    HeaderContainer,
    Left,
    Right,
    SearchButton,
    Notification,
    AddButton,
} from './section-header.styles'

const SectionHeader = ({ searchQuery, handleChange, title }) => {
    return (
        <HeaderContainer>
            <Left>
                <h1>{title}</h1>
                <Notification>999</Notification>
            </Left>
            <Right>
                <div>
                    <CustomInput
                        type='search'
                        name='searchbox'
                        value={searchQuery}
                        handleChange={handleChange}
                        label='Vyhľadať'
                    />
                </div>
                <SearchButton>Vyhľadať</SearchButton>
                <AddButton>Pridať</AddButton>
            </Right>
        </HeaderContainer>
    )
}

export default SectionHeader
