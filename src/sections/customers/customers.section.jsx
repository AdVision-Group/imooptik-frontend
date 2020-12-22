import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../context/user/user.context'

import SectionHeader from '../../components/section-header/section-header.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import Popup from '../../components/popup/pop-up.component'

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

    const {
        users,
        totalCount,
        isLoading,
        message,
        showModal,
        getUsers,
        closeModal
    } = useContext(UserContext)

    useEffect(() => {
        if (!users) {
            getUsers()
        }
    }, [users])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}

            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push('zakaznici/novy-zakaznik')}
                count={totalCount}
                title="Zákazníci"
            />

            <ScrollContainer>
                {
                    users && users.map(user => (
                        <CustomerContainer key={user._id}>
                            <Content>
                                <h2>{user.name || user.email}</h2>
                                <ProductId>{user._id}</ProductId>
                                <Description>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi...</Description>
                            </Content>

                            <Options>
                                <UpdateButton onClick={() => push(`zakaznici/${user._id}`)}>
                                    Upraviť
                        </UpdateButton>
                                <DeleteButton>
                                    Vymazať
                        </DeleteButton>
                            </Options>
                        </CustomerContainer>
                    ))
                }

            </ScrollContainer>

        </section>
    )
}

export default CustomersSection
