import React, { useState, useContext, useEffect } from 'react'
// import { AuthContext } from '../..//context/auth/auth.context'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { useHistory } from 'react-router-dom'


import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import ProductOverview from '../../components/product-overview/product-overview.component'
import Popup from '../../components/popup/pop-up.component'
import EshopFilterModal from '../../components/modal-eshop-filter/modal-eshop-filter.component'

import ListArrows from '../../components/list-arrows/list-arrows.component'

import {
    FlexContainer,
    Filterbutton,
    ResetButton
} from './e-shop.styles'

const EshopSection = () => {
    const { push } = useHistory()
    const { closeModal, showModal, isLoading, message } = useContext(LoadingModalContext)
    const [searchQuery, setSearchQuery] = useState('')
    const [productItems, setProductItems] = useState([])
    const [queryFilter, setQueryFilter] = useState({
        limit: 10,
        skip: 0,
    })

    const [showFilterModal, setShowFilterModal] = useState(false)
    const [hasFilter, setHasFilter] = useState(false)


    const {
        activePremisesTab,
        products,
        retailPremisesTabs,
        getProductsByQuery,
        handleChangePremisesTab,
        productCategoryTypeTabs,
        activeCategoryTypeTab,
        handleChangeCategoryTypeTab,
        deleteProduct,
        deleteLenses,
    } = useContext(WarehouseContext)

    const applyFilter = filter => {
        getProductsByQuery(filter)
        setShowFilterModal(false)
        setHasFilter(true)
    }

    const resetFilter = () => {
        getProductsByQuery({
            limit: 10,
            skip: 0,
        })
        setShowFilterModal(false)
        setHasFilter(false)
    }

    const handleSearch = () => {
        if (searchQuery !== '') {
            if (activeCategoryTypeTab === 0) {
                getProductsByQuery({
                    query: searchQuery
                })
            }
        }
    }

    const handleDeleteProduct = (id) => {
        deleteProduct(id)
    }

    useEffect(() => {
        if (!products) {
            getProductsByQuery({
                limit: 10
            })
        }
        if (products) {
            setProductItems(products)
        }
    }, [products])

    useEffect(() => {
        if (!searchQuery && products) {
            if (activeCategoryTypeTab === 0) {
                getProductsByQuery({
                    limit: 10
                })
            }
        }
    }, [searchQuery])


    const getNextPage = () => {
        if (productItems.length < 10) return
        getProductsByQuery({
            ...queryFilter,
            skip: queryFilter.skip + 10
        })
        setQueryFilter({
            ...queryFilter,
            skip: queryFilter.skip + 10
        })
    }

    const getPrevPage = () => {
        if (queryFilter.skip === 0) return
        getProductsByQuery({
            ...queryFilter,
            skip: queryFilter.skip - 10
        })
        setQueryFilter({
            ...queryFilter,
            skip: queryFilter.skip - 10
        })
    }

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            {showFilterModal && <EshopFilterModal applyFilter={applyFilter} resetFilter={resetFilter} close={() => setShowFilterModal(false)} />}

            <SectionHeader
                title="Sklad"
                searchQuery={searchQuery}
                handleSearch={handleSearch}
                handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push('sklad/novy-produkt')}

            />

            <SectionNavbar
                items={retailPremisesTabs}
                activeIndex={activePremisesTab}
                setActiveIndex={handleChangePremisesTab}
            />

            <FlexContainer>
                <SectionNavbar
                    items={productCategoryTypeTabs}
                    activeIndex={activeCategoryTypeTab}
                    setActiveIndex={handleChangeCategoryTypeTab}
                />
                {activeCategoryTypeTab === 0 && <div>
                    {hasFilter && <ResetButton onClick={resetFilter}>reset</ResetButton>}
                    <Filterbutton onClick={() => setShowFilterModal(true)}>Filter</Filterbutton>
                </div>}
            </FlexContainer>

            <ScrollContainer>
                {productItems.map((product, idx) => (
                    <ProductOverview
                        key={idx}
                        product={product}
                        activePremisesTab={activePremisesTab}
                        handleUpdateButton={() => push(`sklad/${product._id}`)}
                        handleDeleteButton={activeCategoryTypeTab === 0 ? () => handleDeleteProduct(product._id) : () => deleteLenses((product._id))}
                    />
                ))}

                <ListArrows
                    listItems={productItems}
                    handleClickPrev={getPrevPage}
                    handleClickNext={getNextPage}
                />
            </ScrollContainer>
        </section >
    )
}

export default EshopSection
