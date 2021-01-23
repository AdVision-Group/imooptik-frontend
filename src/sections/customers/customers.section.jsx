import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../context/user/user.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from "../../components/section-navbar/section-navbar.component"
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import Popup from '../../components/popup/pop-up.component'

import Fuse from 'fuse.js'


import {
    TableCol,
    TableContainer,
    TableHead,
    TableRow,
    UpdateButton,
    DeleteButton
} from './customers.styles'

const CustomersSection = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const { push } = useHistory()
    const { isAdmin } = useContext(AuthContext)
    const [userItems, setUserItems] = useState([])

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
        getFilteredUsers,
    } = useContext(UserContext)

    useEffect(() => {
        if (!users) {
            getFilteredUsers({
                filters: {
                    admin: activeIndex
                }
            })
        }
        if (users) {
            setUserItems(users)
        }
    }, [users])

    useEffect(() => {
        if (users) {
            getFilteredUsers({
                filters: {
                    admin: activeIndex
                }
            })
            setUserItems(users)
        }
    }, [activeIndex])

    useEffect(() => {
        if (users) {
            if (searchQuery !== '') {
                const fuse = new Fuse(userItems, {
                    keys: [
                        'name',
                        'email',
                        'address',
                        'phone'
                    ]
                })

                const results = fuse.search(searchQuery)

                setUserItems(results.map(result => result.item))
            } else {
                getFilteredUsers({
                    filters: {
                        admin: activeIndex
                    }
                })
                setUserItems(users)
            }
        }
    }, [searchQuery])





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

            <SectionNavbar
                items={isAdmin ? filterItems : [
                    {
                        id: 0,
                        name: "Zákazníci",
                        filter: 0,
                    },]}
                activeIndex={activeIndex}
                setActiveIndex={handleChangeFilterItem}
            />

            <ScrollContainer>
                <TableContainer>
                    <TableHead>
                        <TableCol>Meno a priezvisko</TableCol>
                        <TableCol>Email</TableCol>
                        <TableCol>Možnosti</TableCol>
                    </TableHead>
                    {userItems.map((user, idx) => (
                        <TableRow key={idx}>
                            <TableCol>{user.name}</TableCol>
                            <TableCol>{user.email}</TableCol>
                            <TableCol>
                                <UpdateButton onClick={() => push(`zakaznici/${user._id}`)}>Upraviť</UpdateButton>
                                <DeleteButton onClick={() => alert("Pekný pokus! Tu velím zatiaľ ja :)")}>Odstrániť</DeleteButton>
                            </TableCol>
                        </TableRow>
                    ))}
                </TableContainer>
            </ScrollContainer>

        </section>
    )
}

export default CustomersSection
