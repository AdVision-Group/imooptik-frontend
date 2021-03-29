import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import CustomInput from '../custom-input/custom-input.component'
import { useFetchByQuery } from '../../hooks/useFetch'

import { formatAvailable } from '../../utils/orders.utils'

import {
    ModalContainer,
    Modal,
    CloseButton,
    SearchButton,
    ProductTableHead,
    ProductTableRow,
    TableCol,
    TableContainer
} from './modal-get-product-data.styles'

const GetProductDataModal = ({ close, getSingleProduct, productObj, setProductObj }) => {
    const [searchQuery, setSearchQuery] = useState("")

    const [productItems, setProductItems] = useState([])

    const [query, setQuery] = useState({
        limit: 10,
        skip: 0,
        filters: {
            type: productObj.type
        },
        sortBy: {
            date: -1
        }
    })
    const { response, isLoading, refetch } = useFetchByQuery("api/admin/products/filter", query)

    const handleSearch = () => {
        if (searchQuery === '') return
        setQuery({
            ...query,
            query: searchQuery
        })
        refetch()
    }
    const handleSearchOnEnter = (e) => {
        if (searchQuery !== "") {
            if (e.key === 'Enter') {
                setQuery({
                    ...query,
                    query: searchQuery,
                })
                refetch()
            }
        }
    }

    const handleClick = (id) => {
        getSingleProduct(id, (data) => {
            const { product } = data

            if (product.type === 1 || product.type === 2 || product.type === 4) {
                delete product['__v']
                delete product['soldAmount']
                delete product['ordered']
                delete product['_id']
                delete product['boughtTogether']
                delete product['contactLenses']
                delete product['date']

                setProductObj({
                    ...product,
                    // id: product._id,
                    ...(!product._id) && { _id: product._id },
                    price: (product.price / 100).toFixed(2),
                    eanCode: product.eanCode,
                    image: product.image._id,
                    specs: {
                        ...product.specs,
                        size: [...Array(4)].map((value, idx) => product.specs.size[idx] ? product.specs.size[idx] : 0)
                    }
                })
            }
            if (product.type === 3) {
                delete product['__v']
                delete product['soldAmount']
                delete product['ordered']
                delete product['_id']
                delete product['boughtTogether']
                delete product['specs']
                delete product['date']

                setProductObj({
                    ...product,
                    // id: product._id,
                    ...(!product._id) && { _id: product._id },
                    price: (product.price / 100).toFixed(2),
                    // colorCode: product.colorCode ?? "",
                    image: product.image._id,
                    // specs: {
                    //     ...product.specs,
                    //     size: [...Array(4)].map((value, idx) => product.specs.size[idx] ? product.specs.size[idx] : 0)
                    // }
                })
            }
        })
        close()
    }

    useEffect(() => {
        if (isLoading) return

        setProductItems(response.products)
    }, [isLoading])

    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h2>Vyhľadať produkt</h2>
                <div>
                    <CustomInput
                        label='Názov produktu, eanCode alebo popis'
                        value={searchQuery}
                        handleChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleSearchOnEnter}
                    />
                </div>
                <SearchButton onClick={handleSearch}>Hľadať</SearchButton>

                <TableContainer>
                    <ProductTableHead>
                        <TableCol isHead>eanKód</TableCol>
                        <TableCol isHead>Obrázok</TableCol>
                        <TableCol isHead>Názov</TableCol>
                        <TableCol isHead>Značka</TableCol>
                        <TableCol isHead>Cena</TableCol>
                        <TableCol isHead>Na sklade</TableCol>
                    </ProductTableHead>
                    {productItems.map((product, idx) => (
                        <ProductTableRow key={idx} onClick={() => handleClick(product._id)}>
                            <TableCol>{product.eanCode}</TableCol>
                            <TableCol>
                                {product?.image && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${product.image.imagePath}`} alt={product.image.alt} />}
                            </TableCol>
                            <TableCol>{product.name}</TableCol>
                            <TableCol>{product.brand}</TableCol>
                            <TableCol>{(product.price / 100).toFixed(2)}€</TableCol>
                            <TableCol>{product.type === 6 ? 'Služba' : formatAvailable(product.available)}</TableCol>
                        </ProductTableRow>
                    ))}
                </TableContainer>
            </Modal>
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default GetProductDataModal
