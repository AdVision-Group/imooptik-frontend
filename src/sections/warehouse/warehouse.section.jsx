import React, { useState } from 'react'

import SectionHeader from '../../components/section-header/section-header.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import ProductOverview from '../../components/product-overview/product-overview.component'


const WarehouseSection = () => {
    const [searchQuery, setSearchQuery] = useState('')


    return (
        <section>
            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
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
