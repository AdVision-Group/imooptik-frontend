import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import CustomInput from '../custom-input/custom-input.component'
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component'

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

    const handleSortByChange = e => {
        const { name, value } = e.target

        if (value === '') {
            if (Object.keys(filter?.sortBy).length > 1) {
                delete filter?.sortBy[name]
                setFilter({
                    ...filter
                })
            } else {
                delete filter["sortBy"]
                setFilter({
                    ...filter
                })
            }
            return
        }

        setFilter(prevValue => ({
            ...prevValue,
            sortBy: {
                ...prevValue?.sortBy,
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
                        />
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
                </Container>
                <Container>
                    <h3>Zoradit podla:</h3>
                    <div>
                        <h4>Dátumu</h4>
                        <CustomCheckbox
                            label="Vzostupne"
                            isActive={filter?.sortBy?.date === 1}
                            handleClick={() => handleSortByChange({
                                target: {
                                    name: 'date',
                                    value: filter?.sortBy?.date ? filter?.sortBy?.date === -1 ? 1 : "" : 1
                                }
                            })}
                        />
                        <CustomCheckbox
                            label="Zostupne"
                            isActive={filter?.sortBy?.date === -1}
                            handleClick={() => handleSortByChange({
                                target: {
                                    name: 'date',
                                    value: filter?.sortBy?.date ? filter?.sortBy?.date === 1 ? -1 : '' : -1
                                }
                            })}
                        />
                    </div>
                    <div>
                        <h4>Ceny</h4>
                        <CustomCheckbox
                            label="Vzostupne"
                            isActive={filter?.sortBy?.price === 1}
                            handleClick={() => handleSortByChange({
                                target: {
                                    name: 'price',
                                    value: filter?.sortBy?.price ? filter?.sortBy?.price === -1 ? 1 : "" : 1
                                }
                            })}
                        />
                        <CustomCheckbox
                            label="Zostupne"
                            isActive={filter?.sortBy?.price === -1}
                            handleClick={() => handleSortByChange({
                                target: {
                                    name: 'price',
                                    value: filter?.sortBy?.price ? filter?.sortBy?.price === 1 ? -1 : '' : -1
                                }
                            })}
                        />
                    </div>
                    <div>
                        <h4>Počtu predaných kusov</h4>
                        <CustomCheckbox
                            label="Vzostupne"
                            isActive={filter?.sortBy?.soldAmount === 1}
                            handleClick={() => handleSortByChange({
                                target: {
                                    name: 'soldAmount',
                                    value: filter?.sortBy?.soldAmount ? filter?.sortBy?.soldAmount === -1 ? 1 : "" : 1
                                }
                            })}
                        />
                        <CustomCheckbox
                            label="Zostupne"
                            isActive={filter?.sortBy?.soldAmount === -1}
                            handleClick={() => handleSortByChange({
                                target: {
                                    name: 'soldAmount',
                                    value: filter?.sortBy?.soldAmount ? filter?.sortBy?.soldAmount === 1 ? -1 : '' : -1
                                }
                            })}
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
