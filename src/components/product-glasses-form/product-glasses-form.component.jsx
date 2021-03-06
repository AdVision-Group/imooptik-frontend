import React, { useState, useEffect } from "react"

import CustomInput from "../custom-input/custom-input.component"
import CustomTextarea from "../custom-textarea/custom-textarea.component"

import {
	glassesColors,
	glassesMaterials,
	glassesShapes,
	brands,
} from "../../utils/warehouse.utils"

import { AiOutlineCopy } from "react-icons/ai"

import { getOutletPrice } from "../../hooks/useProduct"

import {
	ImageContainer,
	ProductImage,
	GlassesContainerForm,
	GlassesContainer,
	GlassesParameterContainer,
	StockContainer,
	CustomSelect,
	BrandedCheckbox,
	CopyButton,
	UploadButton,
	DeleteButton,
	NewImageContainer,
	NewImagesContainer,
} from "./product-glasses-form.styles.jsx"

const ProductGlassesForm = ({
	product,
	handleChange,
	selectedImage,
	retailNames,
	currentUser,
	checkParameter,
	handleAvailableChange,
	handleGlassesParametersChange,
	handleGlassesSpecsSizeChange,
	handleSpecsChange,
	glassesParameters,
	setImageModal,
	// isUpdating,
	filters,
	handleGetProductData,
	productObj,
}) => {
	const [isBranded, setIsBranded] = useState(true)
	const [allBrands, setAllBrands] = useState([])

	const handleIsBrandedClick = (isBrandedBool) => {
		if (isBrandedBool) {
			handleChange({
				target: {
					name: "brand",
					value: "Neznačkové",
				},
			})
			setIsBranded(false)
		} else {
			handleChange({
				target: {
					name: "brand",
					value: "",
				},
			})

			setIsBranded(true)
		}
	}

	const [isOutlet, setIsOutlet] = useState(false)

	const handleIsOutletClick = (isOutletBool) => {
		if (isOutletBool) {
			handleChange({
				target: {
					name: "outlet",
					value: false,
				},
			})
			setIsOutlet(false)
		} else {
			handleChange({
				target: {
					name: "outlet",
					value: true,
				},
			})

			setIsOutlet(true)
		}
	}

	useEffect(() => {
		if (product.outlet) setIsOutlet(true)
	}, [isOutlet])

	useEffect(() => {
		if (product.brand === "Neznačkové") setIsBranded(false)
	}, [isBranded])

	useEffect(() => {
		if (!filters?.brands) return
		setAllBrands([...filters?.brands, ...brands])
	}, [brands, filters?.brands])

	return (
		<GlassesContainerForm>
			<GlassesContainer>
				<CopyButton onClick={() => handleGetProductData(true)}>
					<AiOutlineCopy />
				</CopyButton>
				<h3>Základné informácie</h3>
				<CustomInput
					label="eanCode*"
					type="text"
					name="eanCode"
					value={product.eanCode.toString() ?? ""}
					handleChange={(e) => handleChange(e)}
				/>
				<CustomInput
					label="Názov produktu*"
					type="text"
					name="name"
					value={product.name ?? ""}
					handleChange={(e) => handleChange(e)}
				/>
				<CustomInput
					label="Kód"
					type="text"
					name="subname"
					value={product.subname ?? ""}
					handleChange={(e) => handleChange(e)}
				/>

				<BrandedCheckbox
					label={"Značkové"}
					isActive={isBranded}
					handleClick={() => handleIsBrandedClick(isBranded)}
				/>

				{isBranded && (
					<React.Fragment>
						<CustomInput
							label="Značka"
							type="text"
							name="brand"
							value={product.brand ?? ""}
							handleChange={(e) => handleChange(e)}
							list="brands"
						/>
						<datalist id="brands">
							{allBrands.map((brand, idx) => (
								<option key={idx} value={brand} />
							))}
						</datalist>
					</React.Fragment>
				)}

				{!isBranded && (
					<React.Fragment>
						<CustomInput
							label="Značka"
							type="text"
							name="subbrand"
							value={product.subbrand ?? ""}
							handleChange={(e) => handleChange(e)}
							list="brands"
						/>
						<datalist id="brands">
							{allBrands.map((brand, idx) => (
								<option key={idx} value={brand} />
							))}
						</datalist>
					</React.Fragment>
				)}

				<div>
					<BrandedCheckbox
						label={"Outlet"}
						isActive={isOutlet}
						handleClick={() => handleIsOutletClick(isOutlet)}
					/>

					{isOutlet && (
						<React.Fragment>
							<CustomInput
								label="zľava v %"
								type="text"
								name="outletPercentage"
								value={product?.outletPercentage?.toString() || ""}
								handleChange={(e) => handleChange(e)}
							/>
						</React.Fragment>
					)}
				</div>

				{/* <CustomInput
                    label="Kategória"
                    type='text'
                    name='category'
                    value={product.category ?? ""}
                    handleChange={(e) => handleChange(e)}
                    list="categories"

                /> */}

				{/* <datalist id="categories">
                    {filters?.categories && filters?.categories.map((brand, idx) => (
                        <option key={idx} value={brand} />
                    ))}
                </datalist> */}

				{/* <CustomInput
                    label="Link"
                    type='text'
                    name='link'
                    value={product.link ?? ""}
                    handleChange={(e) => handleChange(e)}
                /> */}

				<CustomTextarea
					label="Popis"
					name="description"
					rows="5"
					value={product.description ?? ""}
					handleChange={(e) => handleChange(e)}
					required
				/>

				<CustomInput
					label="Cena*"
					type="text"
					name="price"
					value={product.price.toString() ?? ""}
					handleChange={(e) => handleChange(e)}
					required
				/>

				{isOutlet && (
					<div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
						<p>Outlet cena:</p>{" "}
						<span>
							{getOutletPrice(product.price * 100, product.outletPercentage)}
						</span>
					</div>
				)}

				<ImageContainer>
					<ProductImage
						onClick={() => setImageModal(true)}
						hasImage={selectedImage}
					>
						{!selectedImage && "Vybrať obrázok"}
						{selectedImage && (
							<img
								src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${selectedImage.imagePath}`}
								alt={selectedImage.alt}
							/>
						)}
					</ProductImage>
				</ImageContainer>

				<NewImagesContainer>
					{productObj?.bonusImages &&
						productObj?.bonusImages.map((img, idx) => (
							<NewImageContainer key={idx}>
								{/* <DeleteButton >&#10005;</DeleteButton> */}
								<img
									src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${img.imagePath}`}
									alt={img.alt}
								/>
							</NewImageContainer>
						))}
				</NewImagesContainer>
			</GlassesContainer>
			<div>
				<GlassesParameterContainer>
					<h3>Parametre</h3>
					<CustomInput
						label="Farebný kód"
						type="text"
						name="colorCode"
						value={glassesParameters.colorCode ?? ""}
						handleChange={(e) => handleGlassesParametersChange(e)}
					/>
					<div>
						<CustomInput
							label="Farba rámu"
							type="text"
							name="frameColor"
							value={glassesParameters.specs.frameColor ?? ""}
							handleChange={(e) => handleSpecsChange(e)}
							list="colors"
						/>
						<datalist id="colors">
							{glassesColors.map((color, idx) => (
								<option key={idx} value={color} />
							))}
						</datalist>
						<CustomInput
							label="Materiál rámu"
							type="text"
							name="frameMaterial"
							value={glassesParameters.specs.frameMaterial ?? ""}
							handleChange={(e) => handleSpecsChange(e)}
							list="materials"
						/>
						<datalist id="materials">
							{glassesMaterials.map((material, idx) => (
								<option key={idx} value={material} />
							))}
						</datalist>
						<CustomInput
							label="Tvar rámu"
							type="text"
							name="frameStyle"
							value={glassesParameters.specs.frameStyle ?? ""}
							handleChange={(e) => handleSpecsChange(e)}
							list="shapes"
						/>
						<datalist id="shapes">
							{glassesShapes.map((shape, idx) => (
								<option key={idx} value={shape} />
							))}
						</datalist>
						{/* <CustomInput
                            label="Farba šošovky"
                            type='text'
                            name='lensColor'
                            value={glassesParameters.specs.lensColor ?? ""}
                            handleChange={(e) => handleSpecsChange(e)}
                        /> */}
						<CustomSelect
							label="Pohlavie"
							type="text"
							name="sex"
							value={glassesParameters?.specs?.sex || ""}
							onChange={(e) => handleSpecsChange(e)}
						>
							<option value="">-</option>
							<option value="M">Pánske</option>
							<option value="W">Dámske</option>
							<option value="CH">Detské</option>
							<option value="U">Nezáleží</option>
						</CustomSelect>
					</div>
					<div>
						<h4>Velkosť</h4>
						{glassesParameters.specs.size.map((value, idx) => (
							<CustomInput
								key={idx}
								label={
									idx === 0
										? "Šírka očnice (mm)"
										: idx === 1
										? "Výška očnice (mm)"
										: idx === 2
										? "Veľkosť nosníka (mm)"
										: "Dĺžka stranice (mm)"
								}
								type="text"
								name="size"
								value={checkParameter(glassesParameters.specs.size, idx)}
								handleChange={(e) => handleGlassesSpecsSizeChange(e, idx)}
							/>
						))}
					</div>
				</GlassesParameterContainer>
				{currentUser.admin >= 2 ? (
					<StockContainer>
						<h3>Skladové zásoby</h3>
						{product.available.map((value, idx) => {
							if (idx === 0) return
							return (
								<CustomInput
									key={idx}
									label={
										currentUser.admin === 1
											? retailNames[currentUser.premises]
											: retailNames[idx]
									}
									type="number"
									name={"available"}
									value={checkParameter(product.available, idx)}
									handleChange={(e) => handleAvailableChange(e, idx)}
								/>
							)
						})}
					</StockContainer>
				) : (
					<StockContainer>
						<h3>Skladové zásoby</h3>
						<CustomInput
							label={
								currentUser.admin === 1
									? retailNames[currentUser.premises]
									: retailNames[currentUser.premises]
							}
							type="number"
							name={"available"}
							value={checkParameter(product.available, currentUser.premises)}
							handleChange={(e) =>
								handleAvailableChange(e, currentUser.premises)
							}
						/>
					</StockContainer>
				)}
			</div>
		</GlassesContainerForm>
	)
}

export default ProductGlassesForm
