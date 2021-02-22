import React, { useState, useEffect, useContext } from 'react'
import { OrderContext } from '../../../../context/order/order.context'

import { useFetchByQuery } from '../../../../hooks/useFetch'

import BackButton from '../../../../components/custom-back-button/custom-back-button.component'
import CartLensesRow from '../../../../components/order-cart-lenses-row/order-cart-lenses-row.component'
import CustomInput from '../../../../components/custom-input/custom-input.component'

import {
    LensesTableContainer,
    LensesTableHead,
    LensesTableRow,
    LensesImg,
    SelectLensesContainer,
    CartContainer,
    CartParagraph,
    CartTable,
    CartTableHead,
    NextButton,
    TableCol,
    ButtonOptions,
    HeaderContainer,
    SearchButton,
    SearchContainer,
    HeadingContainer,
    UnselectButton
} from './select-lenses.styles'

const SelectLensesComponent = ({ back, next }) => {
    const {
        cart,
        addLenses,
        createCombinedProducts,
        selectedProduct,
        selectProduct
    } = useContext(OrderContext)

    const [searchQuery, setSearchQuery] = useState("")

    const [lensesItems, setLensesItems] = useState([])
    const [query, setQuery] = useState({
        limit: 9,
        skip: 0
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

    useEffect(() => {
        if (isLoading) return
        console.log("UPDATE LENSES")

        setLensesItems(response.lenses)
    }, [isLoading])

    console.log(cart)

    return (
        <div>
            <BackButton onClick={back} />
            <HeaderContainer>
                <SearchContainer>
                    <h3>Vyhľadať produkt</h3>
                    <div>
                        <CustomInput
                            label='Vyhladať šošovky'
                            value={searchQuery}
                            handleChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={handleSearchOnEnter}
                        />
                    </div>
                    <SearchButton onClick={handleSearch}>Hľadať</SearchButton>
                </SearchContainer>
                <CartContainer>
                    <HeadingContainer>
                        <h3>Vybraté položky</h3>
                        {selectedProduct !== null && <UnselectButton onClick={() => selectProduct(null)}>Odznačiť</UnselectButton>}
                    </HeadingContainer>
                    <CartTableHead>
                        <TableCol>#</TableCol>
                        <TableCol>Produkt</TableCol>
                        <TableCol>Šosovky</TableCol>
                        <TableCol>Cena</TableCol>
                        <TableCol>Ks</TableCol>
                        <TableCol>Zľava v %</TableCol>
                        {/* <TableCol>Možnosti</TableCol> */}
                    </CartTableHead>
                    <CartTable>
                        {cart.map((item, idx) => {
                            if (item.product.type === 3 || item.product.type === 4 || item.product.type === 5) return
                            return (
                                <CartLensesRow
                                    key={idx}
                                    idx={idx}
                                    item={item}
                                />
                            )
                        })}

                        {cart.length === 0 && <CartParagraph>Nie sú vybrané žiadné produkty</CartParagraph>}
                    </CartTable>
                    <ButtonOptions>
                        <NextButton onClick={createCombinedProducts}>
                            Dokončiť objednávku
                        </NextButton>
                    </ButtonOptions>
                </CartContainer>
            </HeaderContainer>

            <SelectLensesContainer>
                <LensesTableContainer>
                    <LensesTableHead>
                        <TableCol>eanKód</TableCol>
                        <TableCol>Obrázok</TableCol>
                        <TableCol>Názov</TableCol>
                        <TableCol>Dioptrie</TableCol>
                        <TableCol>Cylinder</TableCol>
                        <TableCol>Cena</TableCol>
                    </LensesTableHead>

                    {lensesItems.map((lenses, idx) => (
                        <LensesTableRow key={idx} onClick={() => addLenses(lenses)}>
                            <TableCol>{lenses.eanCode}</TableCol>
                            <TableCol>
                                <LensesImg>
                                    {/* <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${lenses.image.imagePath}`} alt={lenses.image.alt} /> */}
                                </LensesImg>
                            </TableCol>
                            <TableCol>{lenses.name}</TableCol>
                            <TableCol>
                                {lenses.dioptersRange && <p>{`od ${lenses.dioptersRange[0]} do ${lenses.dioptersRange[1]}`}</p>}
                            </TableCol>
                            <TableCol>
                                {lenses.cylinderRange && <p>{`od ${lenses.cylinderRange[0]} do ${lenses.cylinderRange[1]}`}</p>}
                            </TableCol>
                            <TableCol>{(lenses.price / 100).toFixed(2)}€</TableCol>
                        </LensesTableRow>
                    ))}
                    <LensesTableRow onClick={() => addLenses(null)}>
                        <TableCol>-</TableCol>
                        <TableCol>
                            <LensesImg>
                                {/* <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${lenses.image.imagePath}`} alt={lenses.image.alt} /> */}
                            </LensesImg>
                        </TableCol>
                        <TableCol>Žiadné sklá</TableCol>
                        <TableCol>-</TableCol>
                        <TableCol>-</TableCol>
                        <TableCol>0€</TableCol>
                    </LensesTableRow>
                </LensesTableContainer>
            </SelectLensesContainer>
        </div >
    )
}

export default SelectLensesComponent
