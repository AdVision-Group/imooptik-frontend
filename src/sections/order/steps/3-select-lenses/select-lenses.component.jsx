import React, { useState, useEffect, useContext } from 'react'
import { WarehouseContext } from '../../../../context/warehouse/warehouse.context'

import BackButton from '../../../../components/custom-back-button/custom-back-button.component'
import CartLensesRow from '../../../../components/order-cart-lenses-row/order-cart-lenses-row.component'

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
    HeaderContainer
} from './select-lenses.styles'

const SelectLensesComponent = ({ back, next, addToOrder, order, showModal }) => {
    const [lensesItems, setLensesItems] = useState([])
    const {
        lensesProducts,
        getLenses
    } = useContext(WarehouseContext)

    const [cartItems, setCartItems] = useState([])

    const handleClick = (lenses) => {
        setCartItems(prevValue => [...prevValue, { lens: { ...lenses } }])
        // if (!lenses) return showModal()
        // addToOrder({
        //     name: "lenses",
        //     value: lenses
        // })
        // showModal()
    }

    useEffect(() => {
        if (!lensesProducts) {
            getLenses()
        }
        if (lensesProducts) {
            setLensesItems(lensesProducts)
        }
    }, [lensesProducts])

    console.log(cartItems)

    return (
        <div>
            <BackButton onClick={back} />
            <HeaderContainer>

                <CartContainer>
                    <h3>Vybraté položky</h3>
                    <CartTableHead>
                        <TableCol>#</TableCol>
                        <TableCol>Produkt</TableCol>
                        <TableCol>Cena</TableCol>
                        <TableCol>Možnosti</TableCol>
                    </CartTableHead>
                    <CartTable>
                        {cartItems.map((item, idx) => (
                            <CartLensesRow
                                key={idx}
                                idx={idx}
                                item={item}
                            />
                        ))}

                        {cartItems.length === 0 && <CartParagraph>Nie sú vybrané žiadné produkty</CartParagraph>}
                    </CartTable>
                    <ButtonOptions>
                        <NextButton >
                            Dokončiť objednávku
                        </NextButton>
                    </ButtonOptions>
                </CartContainer>
            </HeaderContainer>

            <SelectLensesContainer>
                <h3>Výber Šošoviek</h3>
                <LensesFlexContainer>
                    {lensesItems.map((lenses, idx) => (
                        <LensesContainer key={idx} onClick={() => handleClick(lenses)}>
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
                    <LensesContainer onClick={() => handleClick(null)}>
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
