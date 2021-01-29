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

import Pagination from '../../components/pagination/pagination.component'



const EshopSection = () => {
    const { push } = useHistory()
    const { closeModal, showModal, isLoading, message } = useContext(LoadingModalContext)
    const [searchQuery, setSearchQuery] = useState('')
    const [productItems, setProductItems] = useState([])

    const {
        totalProducts,
        // totalLenses,
        activePremisesTab,
        products,
        retailPremisesTabs,
        getProductsByQuery,
        handleChangePremisesTab,
        productCategoryTypeTabs,
        activeCategoryTypeTab,
        handleChangeCategoryTypeTab
    } = useContext(WarehouseContext)

    const handleSearch = () => {
        if (searchQuery !== '') {
            if (activeCategoryTypeTab === 0) {
                getProductsByQuery({
                    query: searchQuery
                })
            }
        }
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

    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(10)

    const paginate = (pageNumber) => {
        getProductsByQuery({
            limit: 10,
            skip: (pageNumber - 1) * productsPerPage
        })
        setCurrentPage(pageNumber)
    }


    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}

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

            <SectionNavbar
                items={productCategoryTypeTabs}
                activeIndex={activeCategoryTypeTab}
                setActiveIndex={handleChangeCategoryTypeTab}
            />

            <ScrollContainer>
                {productItems.map((product, idx) => (
                    <ProductOverview
                        key={idx}
                        product={product}
                        activePremisesTab={activePremisesTab}
                    />
                ))}

                {activeCategoryTypeTab === 0 && <Pagination
                    productsPerPage={10}
                    totalProducts={totalProducts}
                    paginate={paginate}
                    activePage={currentPage}
                />}
            </ScrollContainer>
        </section >
    )
}

export default EshopSection
