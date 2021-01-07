import React, { useState, useContext, useEffect } from 'react'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { ImageContext } from '../../context/image/image.context'
import { AuthContext } from '../../context/auth/auth.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { useHistory, useParams } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import CustomInput from "../../components/custom-input/custom-input.component"
import ProductInputRow from '../../components/product-input-row/product-input-row.component'

import Popup from '../../components/popup/pop-up.component'
import ModalImage from '../../components/modal-images/modal-images.component'

import ProductGlassesForm from '../../components/product-glasses-form/product-glasses-form.component'
import ProductLensesForm from '../../components/product-lenses-form/product-lenses-form.component'


import {
    resetProductObj,
    initProductObj,
    initLensesObj,
    resetLensesObj
} from './product.utils'

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
    const { currentUser } = useContext(AuthContext)
    const {
        createNewProduct,
        products,
        lenses,
        updateProduct,
        handleProductDelete,
        createNewLenses,
        updateLenses
    } = useContext(WarehouseContext)

    const {
        closeModal,
        isLoading,
        showModal,
        message
    } = useContext(LoadingModalContext)

    const { setSelectedImage, selectedImage } = useContext(ImageContext)
    const { id } = useParams()
    const { push } = useHistory()

    const [product, setProduct] = useState(initProductObj)
    const [lense, setLense] = useState(initLensesObj)

    const handleChange = (e) => {
        const { name, value } = e.target
        setProduct({
            ...product,
            [name]: value
        })
    }
    const handleLensesChange = (e) => {
        const { name, value } = e.target
        setLense({
            ...lense,
            [name]: value
        })
    }

    const handleAvailableChange = (e, idx) => {
        let arr = product.available
        arr[idx] = Number(e.target.value)
        setProduct({
            ...product,
            available: arr
        })
    }


    const [isAdmin, setIsAdmin] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)

    const [showImageModal, setImageModal] = useState(false)
    const [showDeleteButton, setShowDeleteButton] = useState(false)

    const [draft, toggleDraft] = useState(false)

    const [image, setImage] = useState('')

    // Category variables
    const productCategories = [
        {
            name: "Dioptrické",
            value: 1
        },
        {
            name: "Slnečné",
            value: 2
        },
        {
            name: "Športové",
            value: 3
        },
        {
            name: "Šošovky",
            value: 4
        },
        {
            name: "Doplnky",
            value: 5
        },
    ]
    const [activeProductCategoryIndex, setActiveProductCategoryIndex] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!image) {
            alert("Ziaden obrazok!")
            return
        }

        if (id === 'novy-produkt') {
            if (activeProductCategoryIndex === 4) {
                createNewLenses({
                    ...lense,
                    eshop: draft
                })
            } else {
                createNewProduct({
                    ...product,
                    eshop: draft
                })
            }
            resetProduct()
            // push('/dashboard/sklad')

        } else {
            if (activeProductCategoryIndex === 4) {
                updateLenses({
                    ...lense,
                    eshop: draft
                })
            } else {
                updateProduct({
                    ...product,
                    eshop: draft
                })
            }
            // resetProduct()

        }
    }

    const resetProduct = () => {
        console.log("BEFORE Reset")
        console.log(product)
        setProduct({
            ...initProductObj,
            available: [0, 0, 0, 0, 0]
        })
        setLense(resetLensesObj())
        console.log("AFTER Reset")
        console.log(product)
    }

    const deleteProduct = () => {
        handleProductDelete(product.id)
        push('/dashboard/obchod')
    }

    useEffect(() => {
        resetProduct()

        if (currentUser.admin > 1) {
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
        }
        if (id === 'novy-produkt') {
            setSelectedImage(null)
            return
        }
        const product = products.find(prdct => prdct._id === id)
        setShowDeleteButton(true)
        setIsUpdating(true)

        if (product) {
            if (product.type !== 4) {
                setProduct({
                    id: product._id || '',
                    name: product.name || '',
                    description: product.description || '',
                    price: product.price.toString() || "0",
                    type: product.type || 1,
                    brandName: product.brand || "",
                    soldAmount: product.soldAmount,
                    available: product.available,
                    rimShape: product.specs.frameStyle || '',
                    rimColor: product.specs.frameColor || '',
                    rimMaterial: product.specs.frameMaterial || '',
                    sex: product.sex || "men",
                    size: product.specs.size,
                    lensColor: product.specs.lensColor || "",
                    eanCode: product.eanCode || "",
                    colorCode: product.colorCode || "",
                    colorName: product.specs.frameColor || '',
                    imagePath: product.image ? product.image.imagePath : "",
                    topProduct: product.topProduct || false
                })
            } else {

            }
            setActiveProductCategoryIndex(product.type)
            toggleDraft(product.eshop || false)

            if (product.image) {
                setImage(product.image._id)
                setSelectedImage(product.image)
            }
        }

        const lense = lenses.find(lnss => lnss._id === id)
        if (lense) {
            setLense(lense)
            setActiveProductCategoryIndex(4)
            toggleDraft(lense.eshop || false)


            if (lense.image) {
                // setImage(lense.image._id)
                setSelectedImage(lense.image)
            }

        }


    }, [id])

    useEffect(() => {
        if (activeProductCategoryIndex) {
            setProduct({
                ...product,
                type: activeProductCategoryIndex
            })
        }
    }, [activeProductCategoryIndex])

    useEffect(() => {
        if (image) {
            if (activeProductCategoryIndex === 4) {
                setLense({
                    ...lense,
                    image: image
                })
            }
            setProduct({
                ...product,
                imagePath: image
            })
        }
    }, [image])

    useEffect(() => {
        return () => {
            console.log('Unmount RESET')
            setProduct(initProductObj)
        }
    }, [])

    return (
        <form onSubmit={e => handleSubmit(e)}>
            { showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            {showImageModal && <ModalImage close={() => setImageModal(false)} setImage={setImage} />}
            <Header>
                <div>
                    <h1>{isUpdating ? "Upraviť produkt" : "Pridať nový produkt"}</h1>
                </div>
                <div>
                    <DraftCheckBox
                        label='Verejný'
                        isActive={draft}
                        handleClick={() => toggleDraft(!draft)}
                    />
                    {showDeleteButton && <DeleteButton onClick={deleteProduct}>Vymazať</DeleteButton>}
                    <AddButton type='submit'>{isUpdating ? "Upraviť produkt" : "Pridať product"}</AddButton>
                </div>
            </Header>

            <ScrollContainer>
                <div>
                    <CategoryTitle>Kategória</CategoryTitle>
                    <CategoryContainer>
                        {
                            productCategories.map((category, idx) => {
                                if (isUpdating && category.value === 4) return <></>
                                if (isUpdating && activeProductCategoryIndex === 4) return <></>
                                return (
                                    <CategoryCheckbox
                                        key={idx}
                                        label={category.name}
                                        name='type'
                                        isActive={category.value === activeProductCategoryIndex}
                                        handleClick={() => {
                                            setProduct({
                                                ...product,
                                                type: category.value
                                            })
                                            setActiveProductCategoryIndex(category.value)
                                        }}
                                    />
                                )
                            })
                        }
                    </CategoryContainer>
                </div>

                {
                    activeProductCategoryIndex === 4 ? (
                        <ProductLensesForm
                            lense={lense}
                            setLense={setLense}
                            handleChange={handleLensesChange}
                        />) : (
                            <ProductGlassesForm
                                product={product}
                                setProduct={setProduct}
                                handleChange={handleChange}
                            />
                        )

                }



                <div>
                    {activeProductCategoryIndex !== 4 && <div>
                        <Title>Skladové zásoby</Title>
                        {product && product.available.map((value, idx) => {
                            if (product.available.length - 1 === idx) return

                            return (
                                (currentUser.admin === idx || isAdmin) && (
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
                            )
                        })}
                    </div>}

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
