import React, { useState, useEffect, useContext } from 'react'
import { OrderContext } from '../../../../context/order/order.context'

import CartDiscountRow from '../../../../components/order-cart-row/order-cart-row.component'
import CustomInput from '../../../../components/custom-input/custom-input.component'
import BackButton from '../../../../components/custom-back-button/custom-back-button.component'

import {
    formatAvailable,
    isAvailable
} from '../../../../utils/orders.utils'

import { useFetchByQuery } from '../../../../hooks/useFetch'

import {
    SearchContainer,
    SearchButton,
    TableContainer,
    ProductTableHead,
    ProductTableRow,
    TableCol,
    HeaderContainer,
    CartContainer,
    CartTable,
    CartTableHead,
    CartParagraph,
    NextButton,
    ButtonOptions,
    NextLensesButton,
} from './select-product.styles'

const SelectProductComponent = ({ back, next, showErrorMessage }) => {
    const {
        addProduct,
        cart,
        createCombinedProducts
    } = useContext(OrderContext)

    const [searchQuery, setSearchQuery] = useState("")

    const [productItems, setProductItems] = useState([])
    const [query, setQuery] = useState({
        limit: 100,
        skip: 0,
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
                    query: searchQuery
                })
                refetch()
            }
        }
    }

    useEffect(() => {
        if (isLoading) return

        setProductItems(response.products)
    }, [isLoading])

    return (
        <div>
            <BackButton onClick={back} />
            <HeaderContainer>
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
                <CartContainer>
                    <h3>Vybrané položky</h3>
                    <CartTableHead>
                        <TableCol>#</TableCol>
                        <TableCol>Produkt</TableCol>

                        <TableCol>Cena</TableCol>
                        <TableCol>Množstvo</TableCol>
                        <TableCol>Viac</TableCol>
                    </CartTableHead>
                    <CartTable>
                        {cart.map((item, idx) => (
                            <CartDiscountRow
                                key={idx}
                                item={item}
                                idx={idx}
                            />
                        ))}

                        {cart.length === 0 && <CartParagraph>Nie sú vybrané žiadné produkty</CartParagraph>}
                    </CartTable>
                    <ButtonOptions>
                        <NextLensesButton onClick={() => next("select-lenses")}>
                            Preisť na šošovky
                        </NextLensesButton>
                        <NextButton onClick={createCombinedProducts}>
                            Dokončiť objednávku
                        </NextButton>
                    </ButtonOptions>
                </CartContainer>
            </HeaderContainer>

            <TableContainer>
                <ProductTableHead>
                    <TableCol>eanKód</TableCol>
                    <TableCol>Obrázok</TableCol>
                    <TableCol>Názov</TableCol>
                    <TableCol>Farba</TableCol>
                    <TableCol>Veľkosť</TableCol>
                    <TableCol>Značka</TableCol>
                    <TableCol>Cena</TableCol>
                    <TableCol>Na sklade</TableCol>
                </ProductTableHead>
                {productItems.map((product, idx) => (
                    <ProductTableRow key={idx} onClick={() => isAvailable(product.available) ? addProduct(product) : product.type === 6 ? addProduct(product) : showErrorMessage("Produkt nieje na sklade.")}>
                        <TableCol>{product.eanCode}</TableCol>
                        <TableCol>
                            {product?.image && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${product.image.imagePath}`} alt={product.image.alt} />}
                        </TableCol>
                        <TableCol>{product.name}</TableCol>
                        <TableCol>{product.specs.frameColor}</TableCol>
                        <TableCol>{(product.type === 1 || product.type === 2 || product.type === 4) && `${product.specs.size[0]}-${product.specs.size[1]}-${product.specs.size[2]}-${product.specs.size[3]}`}</TableCol>
                        <TableCol>{product.brand}</TableCol>
                        <TableCol>{(product.price / 100).toFixed(2)}€</TableCol>
                        <TableCol>{product.type === 6 ? 'Služba' : formatAvailable(product.available)}</TableCol>
                    </ProductTableRow>
                ))}
            </TableContainer>
        </div>
    )
}

export default SelectProductComponent
