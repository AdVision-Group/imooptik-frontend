import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import CustomInput from '../custom-input/custom-input.component'
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component'

import { brands } from '../../utils/warehouse.utils'

import {
    ModalContainer,
    Modal,
    CloseButton,
    Container,
    ApplyButton,
    ResetButton,
    OptionsContainer
} from './modal-eshop-filter.styles'

const EshopFilterModal = ({ close, applyFilter, resetFilter }) => {
    const [filter, setFilter] = useState({})

    const handleChangeFilters = e => {
        const { name, value } = e.target

        if (value === '') {
            if (Object.keys(filter?.filters).length > 1) {
                delete filter?.filters[name]
                setFilter({
                    ...filter
                })
            } else {
                delete filter["filters"]
                setFilter({
                    ...filter
                })
            }
            return
        }

        setFilter(prevValue => ({
            ...prevValue,
            filters: {
                ...prevValue?.filters,
                [name]: value
            }
        }))
    }

    useEffect(() => {
        return () => {
            setFilter({})
        }
    }, [])

    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h2>Vybrať filter</h2>
                <Container>
                    <div>
                        <h4>Typ produktu</h4>
                        <CustomCheckbox
                            label="Dioptrické"
                            isActive={filter?.filters?.type === 1}
                            handleClick={() => handleChangeFilters({
                                target: {
                                    name: 'type',
                                    value: filter?.filters?.type ? filter?.filters?.type === 1 ? '' : 1 : 1
                                }
                            })}
                        />
                        <CustomCheckbox
                            label="Slnečné"
                            isActive={filter?.filters?.type === 2}
                            handleClick={() => handleChangeFilters({
                                target: {
                                    name: 'type',
                                    value: filter?.filters?.type ? filter?.filters?.type === 2 ? '' : 2 : 2
                                }
                            })}
                        />
                        <CustomCheckbox
                            label="Športové"
                            isActive={filter?.filters?.type === 4}
                            handleClick={() => handleChangeFilters({
                                target: {
                                    name: 'type',
                                    value: filter?.filters?.type ? filter?.filters?.type === 4 ? '' : 4 : 4
                                }
                            })}
                        />
                        <CustomCheckbox
                            label="Kontaktné šosovky"
                            isActive={filter?.filters?.type === 3}
                            handleClick={() => handleChangeFilters({
                                target: {
                                    name: 'type',
                                    value: filter?.filters?.type ? filter?.filters?.type === 3 ? '' : 3 : 3
                                }
                            })}
                        />
                    </div>
                    <h3>Filtovat podla:</h3>
                    <div>
                        <CustomInput
                            label='Meno produktu'
                            name='name'
                            value={filter?.filters?.name || ""}
                            handleChange={handleChangeFilters}
                        />
                    </div>
                    <div>
                        <CustomInput
                            label='Značka produktu'
                            name='brand'
                            value={filter?.filters?.brand || ""}
                            handleChange={handleChangeFilters}
                            list="brands"

                        />
                        <datalist id="brands">
                            {brands.map((brand, idx) => (
                                <option key={idx} value={brand} />
                            ))}
                        </datalist>
                    </div>
                    <div>
                        <CustomInput
                            label='Kategoria produktu'
                            name='category'
                            value={filter?.filters?.category || ""}
                            handleChange={handleChangeFilters}
                        />


                    </div>
                    <div>
                        <CustomInput
                            label='Eankód produktu'
                            name='eanCode'
                            value={filter?.filters?.eanCode || ""}
                            handleChange={handleChangeFilters}
                        />
                    </div>


                </Container>

                <OptionsContainer>
                    <ResetButton onClick={() => resetFilter()}>Resetovať filter</ResetButton>
                    <ApplyButton onClick={() => applyFilter(filter)}>Filtrovať</ApplyButton>
                </OptionsContainer>
            </Modal>
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default EshopFilterModal