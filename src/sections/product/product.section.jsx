import React, { useState, useContext, useEffect } from 'react'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { ImageContext } from '../../context/image/image.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { useParams } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import CustomInput from "../../components/custom-input/custom-input.component"
import ProductInputRow from '../../components/product-input-row/product-input-row.component'

import Popup from '../../components/popup/pop-up.component'
import ModalImage from '../../components/modal-images/modal-images.component'

import ProductGlassesForm from '../../components/product-glasses-form/product-glasses-form.component'
// import ProductLensesForm from '../../components/product-lenses-form/product-lenses-form.component'

import {
    Header,
    AddButton,
    DeleteButton,
    Title,
    ProductImage,
    CategoryContainer,
    CategoryCheckbox,
    DraftCheckBox,
    ImageContainer,
    CategoryTitle,
} from './product.styles'

const ProductSection = () => {
    const [showImageModal, setImageModal] = useState(false)

    const { id } = useParams()
    const warData = useContext(WarehouseContext)
    const {
        isUpdating,
        activeCategoryIndex,
        categories,
        toggleDraft,
        handleCategoryChange,
        handleAvailableChange,
        handleSizeChange,
        selectImage,
        product,
        createNewProduct,
        updateProduct,
        handleProductDelete,
        resetProduct,
        // createNewLenses,
        // updateLenses,
        getSingleProduct,
        handleChange,
        handleSpecsChange
    } = warData

    const {
        closeModal,
        isLoading,
        showModal,
        message
    } = useContext(LoadingModalContext)

    const { selectedImage } = useContext(ImageContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!product.imagePath) {
            alert("Ziaden obrazok!")
            return
        }

        if (id === 'novy-produkt') {
            createNewProduct(product)
            resetProduct()

        } else {
            updateProduct(product)
            resetProduct()
        }
    }

    useEffect(() => {
        if (id !== "novy-produkt") {
            getSingleProduct(id)
        }
    }, [id])

    useEffect(() => {
        return () => {
            console.log("UNMOUNT")
            resetProduct()
        }
    }, [])

    return (
        <form onSubmit={e => handleSubmit(e)}>
            { showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            {showImageModal && <ModalImage close={() => setImageModal(false)} setImage={selectImage} />}
            <Header>
                <div>
                    <h1>{isUpdating ? "Upraviť produkt" : "Pridať nový produkt"}</h1>
                </div>
                <div>
                    <DraftCheckBox
                        label='Verejný'
                        isActive={product.eshop}
                        handleClick={() => toggleDraft()}
                    />
                    {isUpdating && <DeleteButton onClick={() => handleProductDelete(product._id)}>Vymazať</DeleteButton>}
                    <AddButton type='submit'>{isUpdating ? "Upraviť produkt" : "Pridať product"}</AddButton>
                </div>
            </Header>

            <ScrollContainer>
                <div>
                    <CategoryTitle>Kategória</CategoryTitle>
                    <CategoryContainer>
                        {
                            categories.map((category, idx) => {
                                return (
                                    <CategoryCheckbox
                                        key={idx}
                                        label={category.name}
                                        value={category.value}
                                        name='type'
                                        isActive={category.value === activeCategoryIndex}
                                        handleClick={() => handleCategoryChange(category.value)}
                                    />
                                )
                            })
                        }
                    </CategoryContainer>
                </div>

                <ProductGlassesForm
                    product={product}
                    handleSizeChange={handleSizeChange}
                    handleChange={handleChange}
                    handleSpecsChange={handleSpecsChange}
                />

                {/* <ProductLensesForm
                    lense={lense}
                    setLense={setLense}
                    handleChange={handleLensesChange}
                /> */}

                <div>
                    <div>
                        <Title>Skladové zásoby</Title>
                        {product && product.available.map((value, idx) => {
                            if (product.available.length - 1 === idx) return

                            return (
                                <ProductInputRow
                                    key={idx}
                                    label={`Počet kusov na predajni ${idx}`}
                                    example="napr: 0"
                                >
                                    <CustomInput
                                        label={`Predajna ${idx}`}
                                        type='number'
                                        // name={store.name}
                                        value={value.toString()}
                                        handleChange={e => handleAvailableChange(e, idx)}
                                    />
                                </ProductInputRow>
                            )
                        })}
                    </div>

                    <ImageContainer>

                        <Title>Obrázok</Title>

                        <ProductImage onClick={() => setImageModal(true)} hasImage={selectedImage}>
                            {!selectedImage && "Vybrať obrázok"}
                            {selectedImage && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${selectedImage.imagePath}`} alt={selectedImage.alt} />}
                        </ProductImage>
                    </ImageContainer>
                </div>
            </ScrollContainer>

        </form >
    )
}

export default ProductSection
