import React, { useEffect, useState } from "react"

import CustomInput from "../custom-input/custom-input.component"
import CustomTextarea from "../custom-textarea/custom-textarea.component"

import { getOutletPrice } from "../../hooks/useProduct"

import {
	ServiceFormContainer,
	ServiceContainer,
	ImageContainer,
	ProductImage,
	BrandedCheckbox,
} from "./product-service-form.styles"

const ProductServiceForm = ({
	product,
	// isUpdating,
	handleChange,
	selectedImage,
	setImageModal,
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
		<ServiceFormContainer>
			<ServiceContainer>
				<h3>Základné informácie</h3>
				<CustomInput
					label="eanCode*"
					type="text"
					name="eanCode"
					value={product.eanCode.toString() ?? ""}
					handleChange={(e) => handleChange(e)}
				/>

				<CustomInput
					label="Názov služby*"
					type="text"
					name="name"
					value={product.name ?? ""}
					handleChange={(e) => handleChange(e)}
				/>

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

				<CustomTextarea
					label="Popis"
					name="description"
					rows="5"
					value={product.description ?? ""}
					handleChange={(e) => handleChange(e)}
					required
				/>

				{/* <ImageContainer>
                    <ProductImage onClick={() => setImageModal(true)} hasImage={selectedImage}>
                        {!selectedImage && "Vybrať obrázok"}
                        {selectedImage && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${selectedImage.imagePath}`} alt={selectedImage.alt} />}
                    </ProductImage>
                </ImageContainer> */}
			</ServiceContainer>
		</ServiceFormContainer>
	)
}

export default ProductServiceForm
