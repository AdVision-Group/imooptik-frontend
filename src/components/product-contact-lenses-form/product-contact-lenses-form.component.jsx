import React, { useEffect, useState } from "react"

import CustomInput from "../custom-input/custom-input.component"
import CustomTextarea from "../custom-textarea/custom-textarea.component"

// import { lensesBrands } from '../../utils/warehouse.utils'
import { AiOutlineCopy } from "react-icons/ai"

import { getOutletPrice } from "../../hooks/useProduct"

import {
	ContactLensesContainer,
	ContactLensesFormContainer,
	StockContainer,
	ContactLensesParametersContainer,
	IncreaseButton,
	ImageContainer,
	ProductImage,
	CopyButton,
	DeleteButton,
	NewImageContainer,
	NewImagesContainer,
	BrandedCheckbox,
} from "./product-contact-lenses-form.styles"

const ProductContactLensesForm = ({
	product,
	handleChange,
	setImageModal,
	selectedImage,
	checkParameter,
	handleContactLensesChange,
	handleAddNewParameter,
	contactLensesParameters,
	retailNames,
	currentUser,
	handleAvailableChange,
	isUpdating,
	filters,
	productObj,
	handleGetProductData,
}) => {
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

	return (
		<ContactLensesFormContainer>
			<ContactLensesContainer>
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
					label="Názov doplnku*"
					type="text"
					name="name"
					value={product.name ?? ""}
					handleChange={(e) => handleChange(e)}
				/>

				<CustomInput
					label="Značka"
					type="text"
					name="brand"
					value={product.brand ?? ""}
					handleChange={(e) => handleChange(e)}
					list="brands"
				/>
				<datalist id="brands">
					{filters?.brands &&
						filters?.brands.map((brand, idx) => (
							<option key={idx} value={brand} />
						))}
				</datalist>

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
				{/* 
                <CustomInput
                    label="Kategória"
                    type='text'
                    name='category'
                    value={product.category ?? ""}
                    handleChange={(e) => handleChange(e)}
                    list="categories"
                />

                <datalist id="categories">
                    {filters?.categories && filters?.categories.map((brand, idx) => (
                        <option key={idx} value={brand} />
                    ))}
                </datalist> */}

				{/* {isUpdating && <CustomInput
                    label="Link"
                    type='text'
                    name='link'
                    value={product.link ?? ""}
                    handleChange={(e) => handleChange(e)}
                />} */}

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
						productObj?.bonusImages.map((img) => (
							<NewImageContainer key={img._id}>
								{/* <DeleteButton >&#10005;</DeleteButton> */}
								<img
									src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${img.imagePath}`}
									alt={img.alt}
								/>
							</NewImageContainer>
						))}
				</NewImagesContainer>
			</ContactLensesContainer>
			<div>
				<ContactLensesParametersContainer>
					<h3>Parametre</h3>
					<div>
						<h4>Zakrivenie</h4>
						{contactLensesParameters.allowedCurves.map((value, idx) => {
							return (
								<CustomInput
									key={idx}
									label={idx + 1}
									type="text"
									name={"allowedCurves"}
									value={checkParameter(
										contactLensesParameters.allowedCurves,
										idx
									)}
									handleChange={(e) => handleContactLensesChange(e, idx)}
								/>
							)
						})}
						<IncreaseButton
							onClick={() =>
								handleAddNewParameter({
									target: {
										name: "allowedCurves",
									},
								})
							}
						>
							Pridať
						</IncreaseButton>
					</div>
					<div>
						<h4>Priemery</h4>
						{contactLensesParameters.allowedDiameters.map((value, idx) => {
							return (
								<CustomInput
									key={idx}
									label={idx + 1}
									type="text"
									name={"allowedDiameters"}
									value={checkParameter(
										contactLensesParameters.allowedDiameters,
										idx
									)}
									handleChange={(e) => handleContactLensesChange(e, idx)}
								/>
							)
						})}
						<IncreaseButton
							onClick={() =>
								handleAddNewParameter({
									target: {
										name: "allowedDiameters",
									},
								})
							}
						>
							Pridať
						</IncreaseButton>
					</div>

					<div>
						<h4>Dioptrie</h4>
						{contactLensesParameters.dioptersRange.map((value, idx) => {
							const inputLabel = idx === 0 ? "minimum" : "maximum"

							return (
								<CustomInput
									key={idx}
									label={inputLabel}
									type="text"
									name={"dioptersRange"}
									value={checkParameter(
										contactLensesParameters.dioptersRange,
										idx
									)}
									handleChange={(e) => handleContactLensesChange(e, idx)}
								/>
							)
						})}
					</div>
				</ContactLensesParametersContainer>

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
		</ContactLensesFormContainer>
	)
}

export default ProductContactLensesForm
