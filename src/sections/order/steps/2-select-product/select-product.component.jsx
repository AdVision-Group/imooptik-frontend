import React, { useState, useEffect, useContext } from 'react'
import { WarehouseContext } from '../../../../context/warehouse/warehouse.context'

import CustomInput from '../../../../components/custom-input/custom-input.component'
import BackButton from '../../../../components/custom-back-button/custom-back-button.component'

import {
    formatAvailable,
    isAvailable
} from '../../../../utils/orders.utils'

import {
    SearchContainer,
    SearchButton,
    TableContainer,
    ProductTableHead,
    ProductTableRow,
    TableCol
} from './select-product.styles'

const SelectProductComponent = ({ back, next, addToOrder, showModal, showErrorMessage }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [productItems, setProductItems] = useState([])

    const {
        products,
        getProductsByQuery
    } = useContext(WarehouseContext)

    const handleSearch = () => {
        if (searchQuery === '') return
        getProductsByQuery({
            query: searchQuery
        })
    }
    const handleSearchOnEnter = (e) => {
        if (searchQuery !== "") {
            if (e.key === 'Enter') {
                getProductsByQuery({
                    query: searchQuery
                })
            }
        }
    }

    const handleClick = (product) => {
        addToOrder({
            name: "product",
            value: product
        })
        if (product.type === 1) {
            next("selectLenses")
            // next("summary")
        } else {
            showModal()
        }
    }

    useEffect(() => {
        if (!products || productItems.length < 1) {
            getProductsByQuery({
                limit: 10
            })
        }
        if (products) {
            setProductItems(products)
        }
    }, [products])

    useEffect(() => {
        if (products) {
            if (searchQuery === '') {
                getProductsByQuery({
                    limit: 10
                })
            }
        }
    }, [searchQuery])

    useEffect(() => {
        return () => {
            setProductItems([])
        }
    }, [])

    return (
        <div>
            <BackButton onClick={back} />
            <SearchContainer>
                <h3>Vyhľadať produkt</h3>
                <div>
                    <CustomInput
                        label='Názov produktu, eanCode alebo popis'
                        value={searchQuery}
                        handleChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleSearchOnEnter}
                    />
                </div>
                <SearchButton onClick={handleSearch}>Hľadať</SearchButton>
            </SearchContainer>

            <TableContainer>
                <ProductTableHead>
                    <TableCol>eanCode</TableCol>
                    <TableCol>Obrázok</TableCol>
                    <TableCol>Názov</TableCol>
                    <TableCol>Značka</TableCol>
                    <TableCol>Cena</TableCol>
                    <TableCol>Dostupnosť</TableCol>
                </ProductTableHead>
                {productItems.map((product, idx) => (
                    <ProductTableRow key={idx} onClick={() => isAvailable(product.available) ? handleClick(product) : showErrorMessage("Produkt nieje na sklade.")}>
                        <TableCol>{product.eanCode}</TableCol>
                        <TableCol>
                            {product?.image && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${product.image.imagePath}`} alt={product.image.alt} />}
                        </TableCol>
                        <TableCol>{product.name}</TableCol>
                        <TableCol>{product.brand}</TableCol>
                        <TableCol>{(product.price / 100).toFixed(2)}€</TableCol>
                        <TableCol>{formatAvailable(product.available)}</TableCol>
                    </ProductTableRow>
                ))}
            </TableContainer>
        </div>
    )
}

export default SelectProductComponent