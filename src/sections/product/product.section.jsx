import React, { useState, useContext, useEffect } from 'react'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { ImageContext } from '../../context/image/image.context'
import { AuthContext } from '../../context/auth/auth.context'
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
    CategoryTitle,
    CustomSelect,
    FormCheckbox
} from './product.styles'

const ProductSection = () => {
    const { currentUser } = useContext(AuthContext)
    const { createNewProduct, products, updateProduct, handleProductDelete } = useContext(WarehouseContext)
    const { setSelectedImage, selectedImage } = useContext(ImageContext)
    const { id } = useParams()
    const { push } = useHistory()

    const [product, setProduct] = useState({
        // Product id
        id: "",
        // Product name: Ultra glasses
        name: "",
        // Product description: Awesome product
        description: "",
        // price in cents: 1050 => 10.50
        price: '0',
        // product type: glesses, lenses, ...
        type: "",
        // brand name: Adidas
        brandName: "",
        //kolko sa ich zatial predalo
        soldAmount: 5,
        //kolko je kusov na ktorej prevádzke [arr] 
        available: ["0", "0", "0", "0"],
        // Oválne
        rimShape: "",
        // Čierna
        rimColor: "",
        // Titán
        rimMaterial: "",
        // Unisex
        sex: "Unisex",
        // available sizes: [arr] [47, 21, 140]
        size: [],
        // Priehľadné
        lensColor: "",
        //ean kod = unikatny kod ktory ma kazdy produkt
        eanCode: "",
        //farebny kod, ktory spolu s ean kodom tvori "identitu" produktu. Moze existovat viacero
        //produktov s rovnakym ean kodom ale rozlicnym color kodom. Je to takto urobené kvôli skladovému
        //systému napr. mam na sklade iny pocet zltych ramov isteho druhu ako ciernych
        colorCode: "",
        //meno farby
        colorName: "Čierna",
        //path k obrazku na serveri (toto bude mozno array este sa uvidi)
        imagePath: "/uploads/resized/okuliare.png",

    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setProduct({
            ...product,
            [name]: value
        })
    }

    console.log(product)

    const [isAdmin, setIsAdmin] = useState(false)
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

        if (id === 'novy-produkt') {
            createNewProduct(newProduct)
            resetProduct()
            push('/dashboard/sklad')

        } else {
            updateProduct(newProduct)
            resetProduct()
            push('/dashboard/sklad')

        }
    }

    const resetProduct = () => {
        setProduct({
            id: "",
            name: "",
            description: "",
            price: '0',
            type: "",
            brandName: "",
            soldAmount: 5,
            available: ["0", "0", "0", "0"],
            rimShape: "",
            rimColor: "",
            rimMaterial: "",
            sex: "men",
            size: [],
            lensColor: "",
            eanCode: "",
            colorCode: "",
            colorName: "",
            imagePath: "",
        })
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
            type: 1,
            brandName: product.brand || "",
            soldAmount: product.soldAmount,
            available: [
                product.available[0].toString() || '0',
                product.available[1].toString() || '0',
                product.available[2].toString() || '0',
                product.available[4].toString() || '0',
            ],
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
                                name='eanCode'
                                value={product.eanCode}
                                handleChange={(e) => handleChange(e)}
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
                                value={product.name}
                                handleChange={(e) => handleChange(e)}
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
                                name='brandName'
                                value={product.brandName}
                                handleChange={(e) => handleChange(e)}
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
                                value={product.price}
                                handleChange={(e) => handleChange(e)}
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
                                value={product.description}
                                handleChange={(e) => handleChange(e)}
                                required

                            />
                        </div>
                        <div>
                            <p>Popis produktu</p>
                        </div>
                    </TextareaRow>



                    <h3>Špecifikacie</h3>
                    <InputRow>
                        <div>
                            <CustomInput
                                label="Color code"
                                type='text'
                                name='colorCode'
                                value={product.colorCode}
                                handleChange={(e) => handleChange(e)}
                                required
                            />
                        </div>
                        <div>
                            <p>Farebný kód produktu <span>napr: 02AR</span></p>
                        </div>
                    </InputRow>
                    <InputRow>
                        <div>
                            <CustomSelect name='sex' value={product.sex} onChange={e => handleChange(e)}>
                                <option value='men'>Muži</option>
                                <option value='women'>Ženy</option>
                                <option value='unisex'>Nezáleží</option>
                            </CustomSelect>
                        </div>
                        <div>
                            <p>Pohlavie pre ktoré je produkt určený</p>
                        </div>
                    </InputRow>

                    <InputRow>
                        <div>
                            <CustomInput
                                label="Farba rámu"
                                type='text'
                                name='rimColor'
                                value={product.rimColor}
                                handleChange={(e) => handleChange(e)}
                                required
                            />
                        </div>
                        <div>
                            <p>Farba <span>napr: čierna</span></p>
                        </div>
                    </InputRow>
                    <InputRow>
                        <div>
                            <CustomInput
                                label="Materiál rámu"
                                type='text'
                                name='rimMaterial'
                                value={product.rimMaterial}
                                handleChange={(e) => handleChange(e)}
                                required
                            />
                        </div>
                        <div>
                            <p>Materiál <span>napr: titán</span></p>
                        </div>
                    </InputRow>
                    <InputRow>
                        <div>
                            <CustomInput
                                label="Tvar rámu"
                                type='text'
                                name='rimShape'
                                value={product.rimShape}
                                handleChange={(e) => handleChange(e)}
                                required
                            />
                        </div>
                        <div>
                            <p>Tvar <span>napr: okruhlý</span></p>
                        </div>
                    </InputRow>
                    <InputRow>
                        <div>
                            <FormCheckbox
                                label="Top produkt"
                                isActive={product.topProduct}
                                handleClick={() => setProduct({ ...product, topProduct: !product.topProduct })}
                            />
                        </div>
                        {/* <div>
                            <p>Farebný kód produktu <span>napr: 02AR</span></p>
                        </div> */}
                    </InputRow>

                    <Title>Skladové zásoby</Title>

                    {(currentUser.admin === 1 || isAdmin) && <InputRow>
                        <div>
                            <CustomInput
                                label="Predajna 1"
                                type='text'
                                name='available'
                                value={product.available[0]}
                                handleChange={(e) => setStore1(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>Počet kusov na predajni <span>napr: 0</span></p>
                        </div>
                    </InputRow>}

                    {(currentUser.admin === 2 || isAdmin) && <InputRow>
                        <div>
                            <CustomInput
                                label="Predajna 2"
                                type='text'
                                name='available'
                                value={product.available[1]}
                                handleChange={(e) => setStore2(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>Počet kusov na predajni <span>napr: 0</span></p>
                        </div>
                    </InputRow>}
                    {(currentUser.admin === 3 || isAdmin) && <InputRow>
                        <div>
                            <CustomInput
                                label="Predajna 3"
                                type='text'
                                name='available'
                                value={product.available[2]}
                                handleChange={(e) => setStore3(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>Počet kusov na predajni <span>napr: 0</span></p>
                        </div>
                    </InputRow>}
                    {(currentUser.admin === 4 || isAdmin) && <InputRow>
                        <div>
                            <CustomInput
                                label="Predajna 4"
                                type='text'
                                name='available'
                                value={product.available[3]}
                                handleChange={(e) => setStore4(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>Počet kusov na predajni <span>napr: 0</span></p>
                        </div>
                    </InputRow>}



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
