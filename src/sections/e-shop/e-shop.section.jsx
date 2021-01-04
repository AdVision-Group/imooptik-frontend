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
            id: 1,
            name: "Všetko",
            permission: 0,
        },
        {
            id: 2,
            name: "Prevádzka 1",
            permission: 1,
        },
        {
            id: 3,
            name: "Prevádzka 2",
            permission: 2,
        },
        {
            id: 4,
            name: "Prevádzka 3",
            permission: 3,
        },
        {
            id: 5,
            name: "Prevádzka 4",
            permission: 4,
        },
    ]




    const filteredItems = items.filter(item => item.permission === currentUser.premises || currentUser.premises === 4)

    const [activeIndex, setActiveIndex] = useState(2)

    console.log(currentUser)

    useEffect(() => {
        console.log("fetch products")
        if (!products) {
            getProducts()
            getLenses()
        }
    }, [products, lenses, token])

    useEffect(() => {
        setActiveIndex(filteredItems[0].id)
    }, [])

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
                    products && products.map(product => (
                        <ProductOverview
                            key={product._id}
                            name={product.name}
                            stock={product.available[0]}
                            id={product._id}
                            price={(product.price / 100).toFixed(2)}
                            image={product.image}
                            handleUpdateButton={() => push(`sklad/${product._id}`)}
                            handleDeleteButton={() => handleProductDelete(product._id)}
                        />
                    ))
                }
                {
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
                }
            </ScrollContainer>
        </section >
    )
}

export default EshopSection
