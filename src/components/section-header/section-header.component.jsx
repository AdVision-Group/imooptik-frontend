import React from 'react'

import CustomInput from '../custom-input/custom-input.component'

import {
    HeaderContainer,
    Left,
    Right,
    SearchButton,
    // Notification,
    AddButton,
} from './section-header.styles'

const SectionHeader = ({ searchQuery, handleSearch, handleChange, title, count = 999, handleAddButton = () => { } }) => {
    return (
        <HeaderContainer>
            <Left>
                <h1>{title}</h1>
                {/* <Notification>{count}</Notification> */}
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
                {handleSearch && <SearchButton onClick={handleSearch}>Vyhľadať</SearchButton>}
                <AddButton onClick={handleAddButton}>Pridať</AddButton>
            </Right>
        </HeaderContainer>
    )
}

export default SectionHeader
