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
} from './modal-get-lenses-data.styles'

const GetLensesDataModal = ({ close, getSingleLenses, productObj, setProductObj, fillProductData }) => {
    const [searchQuery, setSearchQuery] = useState("")

    const [productItems, setProductItems] = useState([])

    const [query, setQuery] = useState({
        limit: 10,
        skip: 0,
    })

    const { response, isLoading, refetch } = useFetchByQuery("api/admin/lenses/filter", query)

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
                    query: searchQuery
                })
                refetch()
            }
        }
    }

    const handleClick = (id) => {
        getSingleLenses(id, (data) => {
            const { lenses } = data

            delete lenses['__v']
            delete lenses['_id']
            delete lenses['soldAmount']
            delete lenses['dateCreated']

            console.log("lenses")
            console.log("lenses")
            console.log(lenses)
            console.log(setProductObj)

            fillProductData({
                ...lenses,
                image: lenses.image._id,
                lensType: lenses.type || "číre",
                dioptric: lenses.dioptric || false,
                type: 0,
                price: (lenses.price / 100).toFixed(2),
            })

        })
        close()

    }

    useEffect(() => {
        if (isLoading) return

        setProductItems(response.lenses)
    }, [isLoading])

    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h2>Vyhľadať šošovky</h2>
                <div>
                    <CustomInput
                        label='Názov šošoviek, eanCode alebo popis'
                        value={searchQuery}
                        handleChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleSearchOnEnter}
                    />
                </div>
                <SearchButton onClick={handleSearch}>Hľadať</SearchButton>

                <TableContainer>
                    <ProductTableHead>
                        <TableCol isHead>eanKód</TableCol>
                        <TableCol isHead>Názov</TableCol>
                        <TableCol isHead>Dioptrie</TableCol>
                        <TableCol isHead>Cylinder</TableCol>
                        <TableCol isHead>Cena</TableCol>
                    </ProductTableHead>
                    {productItems.map((product, idx) => (
                        <ProductTableRow key={idx} onClick={() => handleClick(product._id)}>
                            <TableCol>{product.eanCode}</TableCol>
                            <TableCol>{product.name}</TableCol>
                            <TableCol>
                                {product.dioptersRange && <p>{`od ${product.dioptersRange[0]} do ${product.dioptersRange[1]}`}</p>}
                            </TableCol>
                            <TableCol>
                                {product.cylinderRange && <p>{`od ${product.cylinderRange[0]} do ${product.cylinderRange[1]}`}</p>}
                            </TableCol>
                            <TableCol>{(product.price / 100).toFixed(2)}€</TableCol>
                        </ProductTableRow>
                    ))}
                </TableContainer>
            </Modal>
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default GetLensesDataModal
