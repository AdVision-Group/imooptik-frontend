import React, { useState, useContext, useEffect } from 'react'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { ImageContext } from '../../context/image/image.context'
import { AuthContext } from '../../context/auth/auth.context'
import { useHistory, useParams } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import CustomInput from "../../components/custom-input/custom-input.component"
import ProductInputRow from '../../components/product-input-row/product-input-row.component'

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
    const { setSelectedImage, selectedImage } = useContext(ImageContext)
    const { id } = useParams()
    const { push } = useHistory()

    const [product, setProduct] = useState(initProductObj)
    const [lense, setLense] = useState(initLensesObj)

    console.log(lenses)

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

        if (id === 'novy-produkt') {
            if (activeProductCategoryIndex === 4) {
                createNewLenses({
                    ...lense,
                    eshop: draft
                })
            } else {
                createNewProduct(product)
            }
            resetProduct()
            push('/dashboard/sklad')

        } else {
            if (activeProductCategoryIndex === 4) {
                updateLenses({
                    ...lense,
                    eshop: draft
                })
            } else {
                updateProduct(product)
            }
            resetProduct()
            push('/dashboard/sklad')

        }
    }

    const resetProduct = () => {
        setProduct(resetProductObj())
        setLense(resetLensesObj())
    }

    const deleteProduct = () => {
        handleProductDelete(product.id)
        push('/dashboard/sklad')
    }

    useEffect(() => {
        if (currentUser.admin > 1) {
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
        }
        if (id === 'novy-produkt') {
            resetProduct()
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
                    available: product.available.map(value => value.toString()),
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

    return (
        <form onSubmit={e => handleSubmit(e)}>
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
                            productCategories.map((category, idx) => (
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
                            ))
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
                            const newArr = product.available
                            const handleArrChange = (e) => {
                                newArr[idx] = e.target.value
                                setProduct({
                                    ...product,
                                    available: newArr
                                })
                            }

                            return (
                                (currentUser.admin === idx || isAdmin) && (
                                    <ProductInputRow
                                        key={idx}
                                        label={`Počet kusov na predajni ${idx}`}
                                        example="napr: 0"
                                    >
                                        <CustomInput
                                            label={`Predajna ${idx}`}
                                            type='text'
                                            // name={store.name}
                                            value={value.toString()}
                                            handleChange={e => handleArrChange(e)}
                                        />
                                    </ProductInputRow>
                                )
                            )
                        })}
                    </div>}

                    <ImageContainer>

                        <Title>Obrázok</Title>

                        <ProductImage onClick={() => setImageModal(true)} >
                            Vybrať obrázok
                                {selectedImage && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${selectedImage.imagePath}`} alt={selectedImage.alt} />}

                        </ProductImage>
                    </ImageContainer>
                </div>
            </ScrollContainer>

        </form >
    )
}

export default ProductSection
