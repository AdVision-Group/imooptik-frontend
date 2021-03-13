import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { useHistory } from 'react-router-dom'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from "../../components/section-navbar/section-navbar.component"
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import Popup from '../../components/popup/pop-up.component'
import ListArrows from '../../components/list-arrows/list-arrows.component'

import { useFetchByQuery } from '../../hooks/useFetch'
import { userTabs } from '../../utils/user.utils'

import {
    FixedContainer,
    FlexContainer
} from '../../global.styles'

import {
    TableCol,
    TableContainer,
    TableHead,
    TableRow,
    UpdateButton,
    Container,
    DeleteButton
} from './customers.styles'

const CustomersSection = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const { push } = useHistory()
    const { isAdmin } = useContext(AuthContext)
    const [userItems, setUserItems] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    const [filterQuery, setFilterQuery] = useState({
        limit: 10,
        skip: 0,
        filters: {
            admin: activeIndex
        },
        sortBy: {
            date: -1
        }
    })

    const { response, isLoading, refetch } = useFetchByQuery('api/admin/users/filter', filterQuery)

    const {
        // isLoading,
        showModal,
        message,
        closeModal
    } = useContext(LoadingModalContext)

    const handleSearch = () => {
        if (searchQuery !== '') {
            setFilterQuery({
                limit: 10,
                skip: 0,
                query: searchQuery,
                filters: {
                    admin: activeIndex
                },
                sortBy: {
                    date: -1
                }
            })
            refetch()
        }
    }

    const handleActiveIndexChange = (index) => {
        setActiveIndex(index)
        setFilterQuery({
            limit: 10,
            skip: 0,
            filters: {
                admin: index
            },
            sortBy: {
                date: -1
            }
        })
        refetch()
    }

    const getNextPage = () => {
        if (userItems.length < 10) return
        setFilterQuery({
            ...filterQuery,
            skip: filterQuery.skip + 10
        })
        refetch()

    }

    const getPrevPage = () => {
        if (filterQuery.skip === 0) return
        setFilterQuery({
            ...filterQuery,
            skip: filterQuery.skip - 10
        })
        refetch()

    }

    useEffect(() => {
        if (isLoading) return
        if (response) {
            setUserItems(response.users)
            closeModal()
        }
    }, [isLoading])

    useEffect(() => {
        if (searchQuery === '') {
            setFilterQuery({
                limit: 10,
                skip: 0,
                filters: {
                    admin: activeIndex
                },
                sortBy: {
                    date: -1
                }
            })
            refetch()
        }
    }, [searchQuery])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            <SectionHeader
                searchQuery={searchQuery}
                handleSearch={handleSearch}
                handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push('zakaznici/novy-zakaznik')}
                title="Zákazníci"
            />

            <FlexContainer>
                <FixedContainer>
                    <SectionNavbar
                        items={isAdmin ? userTabs : [
                            {
                                id: 0,
                                name: "Zákazníci",
                                filter: 0,
                            },]}
                        activeIndex={activeIndex}
                        setActiveIndex={handleActiveIndexChange}
                    />

                </FixedContainer>
            </FlexContainer>

            <ScrollContainer>
                <Container>
                    <TableContainer>
                        <TableHead>
                            <TableCol>Meno a priezvisko</TableCol>
                            <TableCol>Email</TableCol>
                            <TableCol>Možnosti</TableCol>
                        </TableHead>
                        {userItems && userItems.map((user, idx) => (
                            <TableRow key={idx}>
                                <TableCol>{user.name}</TableCol>
                                <TableCol>{user.email}</TableCol>
                                <TableCol>
                                    <UpdateButton onClick={() => push(`zakaznici/${user._id}`)}>Upraviť</UpdateButton>
                                    {/* <DeleteButton onClick={() => alert("Pekný pokus! Tu velím zatiaľ ja :)")}>Odstrániť</DeleteButton> */}
                                </TableCol>
                            </TableRow>
                        ))}
                    </TableContainer>
                </Container>

                <ListArrows
                    listItems={userItems}
                    handleClickPrev={getPrevPage}
                    handleClickNext={getNextPage}
                />
            </ScrollContainer>

        </section>
    )
}

export default CustomersSection
