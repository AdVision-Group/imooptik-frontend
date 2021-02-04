import React, { useState, useEffect, useContext } from 'react'
import { WarehouseContext } from '../../../../context/warehouse/warehouse.context'

import BackButton from '../../../../components/custom-back-button/custom-back-button.component'
import ParametersTable from '../../../../components/parameters-table/parameters-table.component'

import {
    ParametersContainer,
    LensesContainer,
    LensesImg,
    SelectLensesContainer,
    LensesFlexContainer
} from './select-lenses.styles'

const SelectLensesComponent = ({ back, next, addToOrder, order, showModal }) => {
    const [lensesItems, setLensesItems] = useState([])
    const {
        lensesProducts,
        getLenses
    } = useContext(WarehouseContext)

    const handleClick = (lenses) => {
        // if (!lenses) return showModal()
        addToOrder({
            name: "lenses",
            value: lenses
        })
        showModal()
    }

    useEffect(() => {
        if (!lensesProducts) {
            getLenses()
        }
        if (lensesProducts) {
            setLensesItems(lensesProducts)
        }
    }, [lensesProducts])

    return (
        <div>
            <BackButton onClick={back} />
            <div>
                <ParametersContainer>
                    <h3>Parametre zákaznika</h3>
                    <ParametersTable
                        parameters={order.user.lenses}
                        disabledInputs={true}
                    />
                </ParametersContainer>

            </div>
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
