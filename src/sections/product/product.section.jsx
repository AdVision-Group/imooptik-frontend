import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { ImageContext } from '../../context/image/image.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { useParams } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'

import Popup from '../../components/popup/pop-up.component'
import ModalImage from '../../components/modal-images/modal-images.component'

import CustomFormSwitch from '../../components/custom-form-switch/custom-form-switch.component'
import ProductGlassesForm from '../../components/product-glasses-form/product-glasses-form.component'
import ProductLensesForm from '../../components/product-lenses-form/product-lenses-form.component'

import {
    Header,
    AddButton,
    DeleteButton,
    Title,
    ProductImage,
    DraftCheckBox,
    ImageContainer,
} from './product.styles'

const ProductSection = () => {
    const [showImageModal, setImageModal] = useState(false)
    const { currentUser } = useContext(AuthContext)
    const { id } = useParams()
    const warData = useContext(WarehouseContext)
    const {
        switchFormButtons,
        formToShow,
        toggleProductForms,
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
        lenses,
        handleLensesChange,
        handleLensesDioptersRangeChange,
        handleLensesCylinderRangeChange,
        getSigleLenses,
        createNewLenses,
        updateLenses,
        deleteLenses,
        getSingleProduct,
        handleChange,
        handleSpecsChange,
        lensesParameters,
        handleParameterChange
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

        if (formToShow === 0) {
            if (!product.imagePath) {
                alert("Žiaden obrazok!")
                return
            }

            if (id === 'novy-produkt') {
                createNewProduct(product)
                resetProduct()
            } else {
                updateProduct(product)
                resetProduct()
            }
        } else {
            if (!lenses.imagePath) {
                alert("Žiaden obrazok!")
                return
            }

            if (id === 'novy-produkt') {
                createNewLenses(lenses)
            } else {
                updateLenses(lenses)
            }

        }

    }

    useEffect(() => {
        if (id !== "novy-produkt") {

            console.log("formToShow")
            console.log(formToShow)
            console.log("formToShow")
            if (formToShow === 0) {
                getSingleProduct(id)
            } else {
                getSigleLenses(id)
            }
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
                        isActive={formToShow === 0 ? product.eshop : lenses.eshop}
                        handleClick={() => toggleDraft()}
                    />
                    {isUpdating && <DeleteButton onClick={formToShow === 0 ? () => handleProductDelete(product._id) : () => deleteLenses(lenses._id)}>Vymazať</DeleteButton>}
                    <AddButton type='submit'>{isUpdating ? "Upraviť produkt" : "Pridať product"}</AddButton>
                </div>
            </Header>

            <ScrollContainer>
                {!isUpdating &&
                    <CustomFormSwitch
                        items={switchFormButtons}
                        title="Aký produkt chcete pridať?"
                        activeIndex={formToShow}
                        handleClick={toggleProductForms}
                    />
                }

                {formToShow === 0 ? (
                    <ProductGlassesForm
                        activeCategoryIndex={activeCategoryIndex}
                        categories={categories}
                        product={product}
                        handleChange={handleChange}
                        handleSizeChange={handleSizeChange}
                        handleSpecsChange={handleSpecsChange}
                        handleCategoryChange={handleCategoryChange}
                        handleAvailableChange={handleAvailableChange}
                        lensesParameters={lensesParameters}
                        handleParameterChange={handleParameterChange}
                        currentUser={currentUser}
                    />
                ) : (
                        <ProductLensesForm
                            lense={lenses}
                            handleChange={handleLensesChange}
                            handleLensesDioptersRangeChange={handleLensesDioptersRangeChange}
                            handleLensesCylinderRangeChange={handleLensesCylinderRangeChange}
                        />
                    )
                }

                <div>
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
