import React, { useState, useContext, useEffect } from 'react'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { useHistory } from 'react-router-dom'

import SectionHeader from '../../components/section-header/section-header.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import ProductOverview from '../../components/product-overview/product-overview.component'
import Popup from '../../components/popup/pop-up.component'


const WarehouseSection = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const { push } = useHistory()
    const {
        isLoading,
        showModal,
        message,
        closeModal
    } = useContext(LoadingModalContext)

    const {
        products,
        getProducts
    } = useContext(WarehouseContext)

    useEffect(() => {
        if (!products) {
            getProducts()
        }
    }, [products])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}

            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push('sklad/novy-produkt')}
                title="Sklad"
            />

            <ScrollContainer>
                <ProductOverview
                    name='Product name'
                    stock='[x]'
                    id='[productId]'
                    price='99.99'
                />
                <ProductOverview
                    name='Product name'
                    stock='[x]'
                    id='[productId]'
                    price='99.99'
                />
                <ProductOverview
                    name='Product name'
                    stock='[x]'
                    id='[productId]'
                    price='99.99'
                />

            </ScrollContainer>
        </section>
    )
}

export default WarehouseSection
