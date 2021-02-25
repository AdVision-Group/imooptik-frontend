import React from 'react'

import CustomInput from '../custom-input/custom-input.component'

import {
    HeaderContainer,
    Left,
    Right,
    SearchButton,
    // Notification,
    AddButton,
    FixedContainer
} from './section-header.styles'

const SectionHeader = ({ searchQuery, handleSearch, handleChange, title, count = 999, handleAddButton = () => { } }) => {
    const handleSearchOnEnter = (e) => {
        if (searchQuery !== '') {
            if (e.key === 'Enter') {
                handleSearch()
            }
        }
    }

    return (
        <HeaderContainer>
            <FixedContainer>
                <Left>
                    <h1>{title}</h1>
                    {/* <Notification>{count}</Notification> */}
                </Left>
                <Right>
                    {handleSearch && <div>
                        <CustomInput
                            type='search'
                            name='searchbox'
                            value={searchQuery}
                            handleChange={handleChange}
                            onKeyPress={handleSearchOnEnter}
                            label='Vyhľadať'
                        />
                    </div>}
                    {handleSearch && <SearchButton onClick={handleSearch}>Vyhľadať</SearchButton>}
                    <AddButton onClick={handleAddButton}>Pridať</AddButton>
                </Right>
            </FixedContainer>
        </HeaderContainer>

    )
}

export default SectionHeader
