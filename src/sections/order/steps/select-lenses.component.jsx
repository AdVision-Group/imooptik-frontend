import React, { useState, useEffect, useContext } from 'react'
import { WarehouseContext } from '../../../context/warehouse/warehouse.context'

import BackButton from '../../../components/custom-back-button/custom-back-button.component'
import ParametersTable from '../../../components/parameters-table/parameters-table.component'

import {
    ParametersContainer,
    LensesContainer,
    LensesImg,
    SelectLensesContainer
} from '../order.styles'

const SelectLensesComponent = ({ back, next, addToOrder, order }) => {
    const [lensesItems, setLensesItems] = useState([])
    const {
        lensesArr,
        getLenses
    } = useContext(WarehouseContext)

    const handleClick = (lenses) => {
        addToOrder({
            name: "lenses",
            value: lenses
        })
        next()
    }

    useEffect(() => {
        if (!lensesArr) {
            getLenses()
        }
        if (lensesArr) {
            setLensesItems(lensesArr)
        }
    }, [lensesArr])

    console.log(order)

    return (
        <div>
            <BackButton onClick={back} />
            <div>
                <ParametersContainer>
                    <h3>Parametre zákaznika</h3>
                    <ParametersTable parameters={order.user.lenses} />
                </ParametersContainer>

            </div>
            <SelectLensesContainer>
                <h3>Výber Šošoviek</h3>
                <div>
                    {lensesItems.map((lenses, idx) => (
                        <LensesContainer key={idx} onClick={() => handleClick(lenses)}>
                            <h4>{lenses.name}</h4>
                            <LensesImg>
                                {/* <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${lenses.image.imagePath}`} alt={lenses.image.alt} /> */}
                            </LensesImg>
                            <p>{lenses.description}</p>
                            <p>{`Dioptrie od ${lenses.dioptersRange[0]} do ${lenses.dioptersRange[1]}`}</p>
                            <p>{`Cylinder  od ${lenses.cylinderRange[0]} do ${lenses.cylinderRange[1]}`}</p>
                            <h5>{(lenses.price / 100).toFixed(2)}€</h5>
                        </LensesContainer>
                    ))}
                </div>
            </SelectLensesContainer>
        </div>
    )
}

export default SelectLensesComponent
