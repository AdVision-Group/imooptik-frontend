import React, { useState, useEffect, useContext } from 'react'
import { OrderContext } from '../../../../context/order/order.context'

import { useFetchByQuery } from '../../../../hooks/useFetch'

import BackButton from '../../../../components/custom-back-button/custom-back-button.component'
import CartLensesRow from '../../../../components/order-cart-lenses-row/order-cart-lenses-row.component'
import CustomInput from '../../../../components/custom-input/custom-input.component'

import {
    LensesContainer,
    LensesImg,
    SelectLensesContainer,
    LensesFlexContainer,
    CartContainer,
    CartParagraph,
    CartTable,
    CartTableHead,
    NextButton,
    TableCol,
    ButtonOptions,
    HeaderContainer,
    SearchButton,
    SearchContainer
} from './select-lenses.styles'

const SelectLensesComponent = ({ back, next }) => {
    const {
        cart,
        addLenses,
        createCombinedProducts
    } = useContext(OrderContext)

    const [searchQuery, setSearchQuery] = useState("")

    const [lensesItems, setLensesItems] = useState([])
    const [query, setQuery] = useState({
        limit: 10,
        skip: 0
    })
    const { response, isLoading, refetch } = useFetchByQuery("api/admin/lenses/filter", query)

    const handleSearch = () => {
        if (searchQuery === '') return
        setQuery({
            ...query,
            // query: searchQuery
        })
        refetch()
    }
    const handleSearchOnEnter = (e) => {
        if (searchQuery !== "") {
            if (e.key === 'Enter') {
                setQuery({
                    ...query,
                    // query: searchQuery
                })
                refetch()
            }
        }
    }

    useEffect(() => {
        if (isLoading) return

        setLensesItems(response.lenses)
    }, [isLoading])

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
                    <h3>Vybraté položky</h3>
                    <CartTableHead>
                        <TableCol>#</TableCol>
                        <TableCol>Produkt</TableCol>
                        <TableCol>Šosovky</TableCol>
                        <TableCol>Cena</TableCol>
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
                <h3>Výber Šošoviek</h3>
                <LensesFlexContainer>
                    {lensesItems.map((lenses, idx) => (
                        <LensesContainer key={idx} onClick={() => addLenses(lenses)}>
                            <h4>{lenses.name}</h4>
                            <LensesImg>
                                {/* <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${lenses.image.imagePath}`} alt={lenses.image.alt} /> */}
                            </LensesImg>
                            <p>{lenses.description}</p>
                            {lenses.dioptersRange && <p>{`Dioptrie od ${lenses.dioptersRange[0]} do ${lenses.dioptersRange[1]}`}</p>}
                            {lenses.cylinderRange && <p>{`Cylinder  od ${lenses.cylinderRange[0]} do ${lenses.cylinderRange[1]}`}</p>}
                            <h5>{(lenses.price / 100).toFixed(2)}€</h5>
                        </LensesContainer>
                    ))}
                    <LensesContainer onClick={() => addLenses(null)}>
                        <h4>Žiadné sklá</h4>
                        <LensesImg>
                            {/* <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${lenses.image.imagePath}`} alt={lenses.image.alt} /> */}
                        </LensesImg>
                        <h5>0€</h5>

                    </LensesContainer>
                </LensesFlexContainer>
            </SelectLensesContainer>
        </div >
    )
}

export default SelectLensesComponent
