import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import SectionHeader from '../../components/section-header/section-header.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'

import {
    CustomerContainer,
    Content,
    Options,
    ProductId,
    Description,
    UpdateButton,
    DeleteButton
} from './customers.styles'

const CustomersSection = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const { push } = useHistory()

    return (
        <section>
            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push('zakaznici/profile-id')}
                title="Zákazníci"
            />

            <ScrollContainer>
                <CustomerContainer>
                    <Content>
                        <h2>Meno Priezvisko</h2>
                        <ProductId>[product id]</ProductId>
                        <Description>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi...</Description>
                    </Content>

                    <Options>
                        <UpdateButton onClick={() => push('zakaznici/profile-id')}>
                            Upraviť
                        </UpdateButton>
                        <DeleteButton>
                            Vymazať
                        </DeleteButton>
                    </Options>
                </CustomerContainer>
            </ScrollContainer>

        </section>
    )
}

export default CustomersSection
