import React, { useState, useContext, useEffect } from 'react'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { ImageContext } from '../../context/image/image.context'
import { useHistory, useParams } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import CustomInput from "../../components/custom-input/custom-input.component"
import CustomTextarea from '../../components/custom-textarea/custom-textarea.component'
import CustomCheckbox from '../../components/custom-checkbox/custom-checkbox.component'
import CustomRadiobutton from '../../components/custom-radiobutton/custom-radiobutton.component'

import ModalImage from '../../components/modal-images/modal-images.component'

import {
    Header,
    AddButton,
    DeleteButton,
    GridContainer,
    GridRow,
    GridRowRevert,
    Container,
    Title,
    StockInputContainer,
    ProductImage,
    ColoCodeInputContainer
} from './product.styles'

const ProductSection = () => {
    const { createNewProduct, products, updateProduct } = useContext(WarehouseContext)
    const { setSelectedImage, selectedImage } = useContext(ImageContext)
    const { id } = useParams()
    const { push } = useHistory()

    console.log(id)


    const [showImageModal, setImageModal] = useState(false)

    const [name, setName] = useState('')
    const [eanCode, setEanCode] = useState('')
    const [colorCode, setColorCode] = useState('')

    const [draft, toggleDraft] = useState(false)

    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')

    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const [checked, setChecked] = useState('2')

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
            checked
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
        if (id === 'novy-produkt') return
        const product = products.find(prdct => prdct._id === id)
        console.log(product)

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

        setChecked(product.type.toString() || '')

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
                    <h1>Pridať nový produkt</h1>
                </div>
                <div>
                    <CustomCheckbox
                        label='Public'
                        checked={draft}
                        onChange={() => toggleDraft(!draft)}
                    />
                    <DeleteButton>Vymazať</DeleteButton>
                    <AddButton onClick={handleSubmit}>Pridať product</AddButton>
                </div>
            </Header>

            <ScrollContainer>
                <GridContainer>
                    <Container>
                        <h3>Základné informacie</h3>
                        <GridRowRevert>
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
                                <CustomInput
                                    label="Názov"
                                    type='text'
                                    name='name'
                                    value={name}
                                    handleChange={(e) => setName(e.target.value)}
                                    required

                                />
                            </div>
                        </GridRowRevert>
                        <GridRow>
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
                                <CustomInput
                                    label="Cena"
                                    type='text'
                                    name='price'
                                    value={price}
                                    handleChange={(e) => setPrice(e.target.value)}
                                    required

                                />
                            </div>
                        </GridRow>
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

                        <Title>Kategória</Title>
                        <div>
                            <CustomRadiobutton
                                label="Dioptrické"
                                checked={checked === '1'}
                                onChange={(e) => setChecked(e.target.value)}
                                value='1'

                            />
                            <CustomRadiobutton
                                label="Slnečné"
                                checked={checked === "2"}
                                onChange={(e) => setChecked(e.target.value)}
                                value="2"

                            />
                            <CustomRadiobutton
                                label="Športové"
                                checked={checked === '3'}
                                onChange={() => setChecked('3')}
                                value="3"

                            />
                            <CustomRadiobutton
                                label="Šošovky"
                                checked={checked === '4'}
                                onChange={() => setChecked('4')}
                                value='4'

                            />
                            <CustomRadiobutton
                                label="Doplnky"
                                checked={checked === '5'}
                                onChange={() => setChecked('5')}
                                value="5"
                            />
                        </div>
                    </Container>
                    <div>
                        <Container>
                            <h3>Špecifikacie</h3>
                            <ColoCodeInputContainer>
                                <CustomInput
                                    label="Color code"
                                    type='text'
                                    name='eancode'
                                    value={colorCode}
                                    handleChange={(e) => setColorCode(e.target.value)}
                                    required
                                />
                            </ColoCodeInputContainer>
                            <Title>Skladové zásoby</Title>
                            <StockInputContainer>
                                <CustomInput
                                    label="Predajna 1"
                                    type='text'
                                    name='eancode'
                                    value={store1}
                                    handleChange={(e) => setStore1(e.target.value)}
                                />
                                <CustomInput
                                    label="Predajna 1"
                                    type='text'
                                    name='eancode'
                                    value={store2}
                                    handleChange={(e) => setStore2(e.target.value)}
                                />
                                <CustomInput
                                    label="Predajna 1"
                                    type='text'
                                    name='eancode'
                                    value={store3}
                                    handleChange={(e) => setStore3(e.target.value)}
                                />
                                <CustomInput
                                    label="Predajna 1"
                                    type='text'
                                    name='eancode'
                                    value={store4}
                                    handleChange={(e) => setStore4(e.target.value)}
                                />
                            </StockInputContainer>


                        </Container>
                        <Container>

                            <Title>Obrázok</Title>

                            <ProductImage onClick={() => setImageModal(true)} >
                                Vybrať obrázok
                                {selectedImage && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${selectedImage.imagePath}`} alt={selectedImage.alt} />}

                            </ProductImage>
                        </Container>
                    </div>
                </GridContainer>
            </ScrollContainer>
        </section>
    )
}

export default ProductSection
