import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../context/user/user.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from "../../components/section-navbar/section-navbar.component"
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import Popup from '../../components/popup/pop-up.component'

import Fuse from 'fuse.js'


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
        isLoading,
        showModal,
        message,
        closeModal
    } = useContext(LoadingModalContext)

    const {
        activeIndex,
        handleChangeFilterItem,
        filterItems,
        users,
        totalCount,
        getUsers,
    } = useContext(UserContext)

    useEffect(() => {
        if (!users) {
            getUsers()
        }
    }, [users])



    const [allUsers, setAllUsers] = useState([])
    useEffect(() => {
        if (users)
            setAllUsers(users.filter(user => filterItems[activeIndex].filter === user.admin))
    }, [users])

    const fuse = new Fuse(allUsers, {
        keys: [
            'name',
            'email',
            'address',
            'phone'
        ]
    })

    useEffect(() => {
        const results = fuse.search(searchQuery)
        if (results.length > 0) {
            setAllUsers(results.map(result => result.item))
        }
        if (!searchQuery) {
            if (users) {
                setAllUsers(users.filter(user => filterItems[activeIndex].filter === user.admin))
            }

        }

    }, [searchQuery, activeIndex])

    if (!users || showModal) return <Popup loading={isLoading} title={message} close={closeModal} />

    return (
        <section>

            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push('zakaznici/novy-zakaznik')}
                count={totalCount}
                title="Zákazníci"
            />

            <SectionNavbar
                items={filterItems}
                activeIndex={activeIndex}
                setActiveIndex={handleChangeFilterItem}
            />

            <ScrollContainer>
                {
                    allUsers && allUsers.map(user => (
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
