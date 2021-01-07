import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../..//context/auth/auth.context'
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
    const { currentUser, token } = useContext(AuthContext)

    const {
        isLoading,
        showModal,
        message,
        closeModal
    } = useContext(LoadingModalContext)

    const {
        products,
        lenses,
        getProducts,
        getLenses,
        handleProductDelete,
        deleteLense
    } = useContext(WarehouseContext)

    const { push } = useHistory()

    const [searchQuery, setSearchQuery] = useState('')
    const items = [
        {
            id: 0,
            name: "Všetko",
            permission: 0,
        },
        {
            id: 1,
            name: "Prevádzka 1",
            permission: 1,
        },
        {
            id: 2,
            name: "Prevádzka 2",
            permission: 2,
        },
        {
            id: 3,
            name: "Prevádzka 3",
            permission: 3,
        },
        {
            id: 4,
            name: "Prevádzka 4",
            permission: 4,
        },
        {
            id: 5,
            name: "Prevádzka 5",
            permission: 5,
        },
    ]

    const filteredItems = items.filter(item => item.permission === currentUser.premises || currentUser.admin >= 2)
    const [activeIndex, setActiveIndex] = useState(2)

    useEffect(() => {
        console.log("fetch products")
        if (!products) {
            getProducts()
            getLenses()
        }

        if (!message) {
            closeModal()
        }
    }, [products, lenses, token])

    useEffect(() => {
        if (filteredItems.length) {
            setActiveIndex(filteredItems[0].id)
        }
    }, [])

    let allProducts = []
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(10)

    if (products && lenses) {
        allProducts = [
            ...products,
            ...lenses
        ]
    }

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}

            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push('sklad/novy-produkt')}

                title="E-shop"
            />

            <SectionNavbar
                items={filteredItems}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />

            {/* Products container */}
            <ScrollContainer>
                {
                    currentProducts && currentProducts.map(product => (
                        <ProductOverview
                            key={product._id}
                            name={product.name}
                            stock={product.available ? activeIndex === 0 ? product.available.reduce((acc, currValue) => acc + currValue) : product.available[activeIndex - 1] : ''}
                            id={product._id}
                            price={(product.price / 100).toFixed(2)}
                            image={product.image}
                            handleUpdateButton={() => push(`sklad/${product._id}`)}
                            handleDeleteButton={() => handleProductDelete(product._id)}
                        />
                    ))
                }
                {/* {
                    lenses && lenses.map(product => (
                        <ProductOverview
                            key={product._id}
                            name={product.name}
                            id={product._id}
                            price={(product.price / 100).toFixed(2)}
                            image={product.image}
                            handleUpdateButton={() => push(`sklad/${product._id}`)}
                            handleDeleteButton={() => deleteLense(product._id)}
                        />
                    ))
                } */}

                <Pagination
                    productsPerPage={productsPerPage}
                    totalProducts={allProducts.length}
                    paginate={paginate}
                    activePage={currentPage}
                />
            </ScrollContainer>
        </section >
    )
}

export default EshopSection
