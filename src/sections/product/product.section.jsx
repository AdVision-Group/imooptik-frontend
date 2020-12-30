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


import {
    resetProductObj,
    initProductObj
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
    InputRow,
    ImageContainer,
    CategoryTitle,
} from './product.styles'
import styled from 'styled-components'

const ProductSection = () => {
    const { currentUser } = useContext(AuthContext)
    const { createNewProduct, products, updateProduct, handleProductDelete } = useContext(WarehouseContext)
    const { setSelectedImage, selectedImage } = useContext(ImageContext)
    const { id } = useParams()
    const { push } = useHistory()

    const [product, setProduct] = useState(initProductObj)

    const handleChange = (e) => {
        const { name, value } = e.target
        setProduct({
            ...product,
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

    const [store1, setStore1] = useState('')
    const [store3, setStore3] = useState('')
    const [store4, setStore4] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(product)

        if (id === 'novy-produkt') {
            createNewProduct(product)
            resetProduct()
            push('/dashboard/sklad')

        } else {
            updateProduct(product)
            resetProduct()
            push('/dashboard/sklad')

        }
    }

    const resetProduct = () => {
        setProduct(resetProductObj())
    }

    const deleteProduct = () => {
        handleProductDelete(product.id)
        push('/dashboard/sklad')
    }

    useEffect(() => {
        if (currentUser.admin === 4) {
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

        console.log(" ------ PRDOCUTK ------")
        console.log(product)
        console.log(" ------ PRDOCUTK ------")

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
            imagePath: product.image.imagePath,
            topProduct: product.topProduct || false
        })

        setActiveProductCategoryIndex(product.type)
        toggleDraft(product.eshop || false)

        if (product.image) {
            setImage(product.image._id)
            setSelectedImage(product.image)
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

    console.log(product)

    return (
        <section>
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
                    <AddButton onClick={handleSubmit}>{isUpdating ? "Upraviť produkt" : "Pridať product"}</AddButton>
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

                <ProductGlassesForm
                    product={product}
                    setProduct={setProduct}
                    handleChange={handleChange}
                />


                <div>

                    <Title>Skladové zásoby</Title>

                    {
                        product && product.available.map((value, idx) => {
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
                        })
                    }
                    {/* {(currentUser.admin === 1 || isAdmin) && (

                    )} */}

                    <ImageContainer>

                        <Title>Obrázok</Title>

                        <ProductImage onClick={() => setImageModal(true)} >
                            Vybrať obrázok
                                {selectedImage && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${selectedImage.imagePath}`} alt={selectedImage.alt} />}

                        </ProductImage>
                    </ImageContainer>
                </div>
                <div>

                </div>
            </ScrollContainer>
        </section >
    )
}

export default ProductSection
