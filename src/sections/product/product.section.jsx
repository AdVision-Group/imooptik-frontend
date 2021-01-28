import React, { useState, useContext, useEffect } from 'react'
// import { AuthContext } from '../../context/auth/auth.context'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { ImageContext } from '../../context/image/image.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { useParams, Prompt } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import ModalImage from '../../components/modal-images/modal-images.component'
import Popup from '../../components/popup/pop-up.component'

// import CustomCheckbox from '../../components/custom-checkbox/custom-checkbox.component'
// import CustomFormSwitch from '../../components/custom-form-switch/custom-form-switch.component'
// import ProductGlassesForm from '../../components/product-glasses-form/product-glasses-form.component'
import ProductLensesForm from '../../components/product-lenses-form/product-lenses-form.component'

// import { useFetch } from '../../hooks/useFetch'

import { productCategories, checkParameter } from '../../context/warehouse/warehouse.utils'

import {
    Header,
    CategoryContainer,
    CategoryCheckbox,
    SubmitButton,
} from './product.styles'

const ProductSection = () => {
    const { closeModal, message, isLoading, showModal, getMessage, setShowModal } = useContext(LoadingModalContext)
    const { selectedImage, setSelectedImage } = useContext(ImageContext)
    const [showImageModal, setImageModal] = useState(false)

    const {
        lenses,
        handleLensesChange,
        handleLensesParameterChange,
        resetLenses,
        createLenses
    } = useContext(WarehouseContext)

    const [hasChanged, setHasChanged] = useState(false)
    const [productObj, setProductObj] = useState({})

    console.log("PRODUCT OBJECT")
    console.log(productObj)

    const handleChangeType = e => {
        setHasChanged(true)
        const { name, value } = e.target

        if (Object.keys(productObj).length > 1) {
            const confirm = window.confirm("Rozpisane polia budú vymazane")
            if (confirm) {
                resetLenses()
            }
        }

        setProductObj({
            [name]: value
        })
    }

    const handleChange = (e) => {
        setHasChanged(true)
        const { name, value } = e.target

        if (productObj.type === 0) {
            handleLensesChange(e)
        }

        if (value === '') {
            delete productObj[name]
            return
        }

        setProductObj({
            ...productObj,
            [name]: value
        })
    }

    const handleParameterChange = (e, idx) => {
        const { name, value } = e.target
        let arr = lenses[name]
        arr[idx] = value === '' ? 1001 : Number(value)

        handleLensesParameterChange(e, idx)
        setProductObj({
            ...productObj,
            [name]: arr
        })
    }

    const handleSelectImage = (imgId) => {
        setHasChanged(true)
        setProductObj({
            ...productObj,
            image: imgId
        })
    }

    console.log(lenses)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (productObj.type === 0) {
            if (!productObj.name || !productObj.brand || !productObj.description || !productObj.price || !productObj.image || !productObj.dioptersRange || !productObj.cylinderRange) {
                setShowModal(true)
                getMessage("Povinné údaje sú prázdne")
                return
            } else {
                setHasChanged(false)
                delete productObj['type']
                createLenses(productObj)
            }
        }
    }

    useEffect(() => {
        return () => {
            resetLenses()
            setProductObj({})
            setSelectedImage(null)
        }
    }, [])

    return (
        <section>
            <Prompt
                when={hasChanged}
                message="Chcete opustiť formulár?"
            />
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            {showImageModal && <ModalImage close={() => setImageModal(false)} setImage={handleSelectImage} />}
            <Header>
                <div>
                    <h1>Nový Produkt</h1>
                </div>
                <div>
                    <SubmitButton onClick={handleSubmit}>Vytvoriť</SubmitButton>
                </div>
            </Header>

            <ScrollContainer>
                <CategoryContainer>
                    <h3>Aký produkt chcete pridať?</h3>
                    {productCategories.map((category, idx) => (
                        <CategoryCheckbox
                            key={idx}
                            label={category.name}
                            value={category.value}
                            name='type'
                            isActive={category.value === productObj.type}
                            handleClick={() => handleChangeType({
                                target: {
                                    name: "type",
                                    value: category.value
                                }
                            })}
                        />
                    ))}
                </CategoryContainer>

                {productObj.type === 0 && (
                    <ProductLensesForm
                        lenses={lenses}
                        selectedImage={selectedImage}
                        setImageModal={setImageModal}
                        handleChange={handleChange}
                        handleParameterChange={handleParameterChange}
                        checkParameter={checkParameter}
                    />
                )}

            </ScrollContainer>

        </section >
    )
}

export default ProductSection
