import React, { useState, useContext, useEffect } from 'react'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { ImageContext } from '../../context/image/image.context'
import { useHistory, useParams } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import CustomInput from "../../components/custom-input/custom-input.component"
import CustomTextarea from '../../components/custom-textarea/custom-textarea.component'

import ModalImage from '../../components/modal-images/modal-images.component'

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
    TextareaRow,
    ImageContainer,
    CategoryTitle
} from './product.styles'

const ProductSection = () => {
    const { createNewProduct, products, updateProduct } = useContext(WarehouseContext)
    const { setSelectedImage, selectedImage } = useContext(ImageContext)
    const { id } = useParams()
    const { push } = useHistory()

    const [isUpdating, setIsUpdating] = useState(false)

    const [showImageModal, setImageModal] = useState(false)
    const [showDeleteButton, setShowDeleteButton] = useState(false)

    const [name, setName] = useState('')
    const [eanCode, setEanCode] = useState('')
    const [colorCode, setColorCode] = useState('')

    const [draft, toggleDraft] = useState(false)

    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')

    const [description, setDescription] = useState('')
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
    const [store2, setStore2] = useState('')
    const [store3, setStore3] = useState('')
    const [store4, setStore4] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const newProduct = {
            id,
            name,
            eanCode,
            colorCode,
            draft,
            brand,
            price,
            description,
            image,
            // checked
        }

        console.log(newProduct)
        console.log(id)

        if (id === 'novy-produkt') {
            createNewProduct(newProduct)
            push('/dashboard/sklad')

        } else {
            updateProduct(newProduct)
            push('/dashboard/sklad')

        }

    }

    useEffect(() => {
        if (id === 'novy-produkt') {
            setSelectedImage(null)
            return
        }
        const product = products.find(prdct => prdct._id === id)
        setShowDeleteButton(true)
        setIsUpdating(true)

        setName(product.name || '')
        setEanCode(product.eanCode || '')
        setColorCode(product.colorCode || '')

        toggleDraft(product.eshop || '')

        setBrand(product.brand || '')
        setPrice(product.price.toString() || '')

        setDescription(product.description || '')
        if (product.image) {
            setImage(product.image._id)
            setSelectedImage(product.image)
        }

        setStore1(product.available[0] + " ")
        setStore2(product.available[1] + " ")
        setStore3(product.available[2] + " ")
        setStore4(product.available[3] + " ")

    }, [id])

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
                    {showDeleteButton && <DeleteButton>Vymazať</DeleteButton>}
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
                                    isActive={idx === activeProductCategoryIndex}
                                    handleClick={() => setActiveProductCategoryIndex(idx)}
                                />
                            ))
                        }
                    </CategoryContainer>
                </div>

                <div>
                    <h3>Základné informacie</h3>
                    <InputRow>
                        <div>
                            <CustomInput
                                label="Ean kód"
                                type='text'
                                name='eancode'
                                value={eanCode}
                                handleChange={(e) => setEanCode(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <p>Unikátny kód produktu <span>napr: 123abx</span></p>
                        </div>
                    </InputRow>
                    <InputRow>
                        <div>
                            <CustomInput
                                label="Názov"
                                type='text'
                                name='name'
                                value={name}
                                handleChange={(e) => setName(e.target.value)}
                                required

                            />
                        </div>
                        <div>
                            <p>Názov produktu <span>napr: Super brejle</span></p>
                        </div>
                    </InputRow>
                    <InputRow>
                        <div>
                            <CustomInput
                                label="Značka"
                                type='text'
                                name='brand'
                                value={brand}
                                handleChange={(e) => setBrand(e.target.value)}
                                required

                            />
                        </div>
                        <div>
                            <p>Značka <span>napr: Abrejlas</span></p>
                        </div>
                    </InputRow>
                    <InputRow>
                        <div>
                            <CustomInput
                                label="Cena"
                                type='text'
                                name='price'
                                value={price}
                                handleChange={(e) => setPrice(e.target.value)}
                                required

                            />
                        </div>
                        <div>
                            <p>Cena v centoch <span>napr: 1055 = 10,55€</span></p>
                        </div>
                    </InputRow>
                    <TextareaRow>
                        <div>
                            <CustomTextarea
                                label="Popis"
                                name='description'
                                rows='5'
                                value={description}
                                handleChange={(e) => setDescription(e.target.value)}
                                required

                            />
                        </div>
                        {/* <div>
                            <p><span>Lorem ipsum...</span></p>
                        </div> */}
                    </TextareaRow>



                    <h3>Špecifikacie</h3>
                    <InputRow>
                        <div>
                            <CustomInput
                                label="Color code"
                                type='text'
                                name='eancode'
                                value={colorCode}
                                handleChange={(e) => setColorCode(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <p>Farebný kód produktu <span>napr: 02AR</span></p>
                        </div>
                    </InputRow>

                    <Title>Skladové zásoby</Title>
                    <InputRow>
                        <div>
                            <CustomInput
                                label="Predajna 1"
                                type='text'
                                name='eancode'
                                value={store1}
                                handleChange={(e) => setStore1(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>Počet kusov na predajni <span>napr: 0</span></p>
                        </div>
                    </InputRow>
                    <InputRow>
                        <div>
                            <CustomInput
                                label="Predajna 2"
                                type='text'
                                name='eancode'
                                value={store2}
                                handleChange={(e) => setStore2(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>Počet kusov na predajni <span>napr: 0</span></p>
                        </div>
                    </InputRow>
                    <InputRow>
                        <div>
                            <CustomInput
                                label="Predajna 3"
                                type='text'
                                name='eancode'
                                value={store3}
                                handleChange={(e) => setStore3(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>Počet kusov na predajni <span>napr: 0</span></p>
                        </div>
                    </InputRow>
                    <InputRow>
                        <div>
                            <CustomInput
                                label="Predajna 4"
                                type='text'
                                name='eancode'
                                value={store4}
                                handleChange={(e) => setStore4(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>Počet kusov na predajni <span>napr: 0</span></p>
                        </div>
                    </InputRow>



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
