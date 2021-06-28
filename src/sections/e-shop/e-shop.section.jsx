import React, { useState, useContext, useEffect } from "react"
// import { AuthContext } from '../..//context/auth/auth.context'
import { WarehouseContext } from "../../context/warehouse/warehouse.context"
import { LoadingModalContext } from "../../context/loading-modal/loading-modal.contenxt"
import { useHistory } from "react-router-dom"

import SectionHeader from "../../components/section-header/section-header.component"
import SectionNavbar from "../../components/section-navbar/section-navbar.component"
import ScrollContainer from "../../components/scroll-container/scroll-container.component"
import ProductOverview from "../../components/product-overview/product-overview.component"
import Popup from "../../components/popup/pop-up.component"
import EshopFilterModal from "../../components/modal-eshop-filter/modal-eshop-filter.component"

import ListArrows from "../../components/list-arrows/list-arrows.component"

import { FixedContainer, FlexContainer } from "../../global.styles"

import { Filterbutton, ResetButton, PublicButton } from "./e-shop.styles"

const EshopSection = () => {
	const { push } = useHistory()
	const { closeModal, showModal, isLoading, message } =
		useContext(LoadingModalContext)
	const [productItems, setProductItems] = useState([])
	const [queryFilter, setQueryFilter] = useState({
		limit: 100,
		skip: 0,
		sortBy: {
			date: -1,
		},
	})

	const [showFilterModal, setShowFilterModal] = useState(false)
	const [hasFilter, setHasFilter] = useState(false)

	const [selectedProducts, setSelectedProducts] = useState([])

	const selectProduct = (productID) => {
		setSelectedProducts((prevValue) => [...prevValue, productID])
	}

	const deselectProduct = (selectedProductsArr, productID) => {
		const newArr = selectedProductsArr.filter(
			(product) => product !== productID
		)

		setSelectedProducts(newArr)
	}

	const {
		activePremisesTab,
		products,
		retailPremisesTabs,
		getProductsByQuery,
		handleChangePremisesTab,
		productCategoryTypeTabs,
		activeCategoryTypeTab,
		handleChangeCategoryTypeTab,
		deleteProduct,
		deleteLenses,
		deactivateMany,
		getFilteredLenses,
		getLenses,
		searchQuery: savedSearchQuery,
		handleSearchQueryChange,
	} = useContext(WarehouseContext)

	const [searchQuery, setSearchQuery] = useState(
		savedSearchQuery ? savedSearchQuery : ""
	)

	const handleSearchQuery = (e) => {
		const { value } = e.target

		handleSearchQueryChange(value)
		setSearchQuery(value)
	}

	const handleDeactivateMany = (productIDs, boolean) => {
		const dataObj = {
			products: productIDs,
			activate: boolean,
		}
		deactivateMany(dataObj)
		setSelectedProducts([])
	}

	const applyFilter = (filter) => {
		getProductsByQuery(filter)
		setShowFilterModal(false)
		setHasFilter(true)
	}

	const resetFilter = () => {
		getProductsByQuery({
			limit: 100,
			skip: 0,
			sortBy: {
				date: -1,
			},
		})
		setShowFilterModal(false)
		setHasFilter(false)
	}

	const handleSearch = () => {
		if (searchQuery !== "") {
			if (activeCategoryTypeTab === 0) {
				getProductsByQuery({
					query: searchQuery,
					sortBy: {
						date: -1,
					},
				})
			}
			if (activeCategoryTypeTab === 1) {
				getFilteredLenses({
					query: searchQuery,
					// sortBy: {
					//     date: -1
					// }
				})
			}
		}
	}

	const handleDeleteProduct = (id) => {
		deleteProduct(id)
	}

	useEffect(() => {
		if (!products) {
			getProductsByQuery({
				limit: 100,
				sortBy: {
					date: -1,
				},
			})
		}
		if (products) {
			setProductItems(products)
		}
	}, [products])

	useEffect(() => {
		if (!searchQuery && products) {
			if (activeCategoryTypeTab === 0) {
				getProductsByQuery({
					limit: 100,
					sortBy: {
						date: -1,
					},
				})
			}
			if (activeCategoryTypeTab === 1) {
				getLenses({
					sortBy: {
						dateCreated: -1,
					},
				})
			}
		}
	}, [searchQuery])

	const getNextPage = () => {
		if (productItems.length < 100) return
		getProductsByQuery({
			...queryFilter,
			skip: queryFilter.skip + 100,
		})
		setQueryFilter({
			...queryFilter,
			skip: queryFilter.skip + 100,
		})
	}

	const getPrevPage = () => {
		if (queryFilter.skip === 0) return
		getProductsByQuery({
			...queryFilter,
			skip: queryFilter.skip - 100,
		})
		setQueryFilter({
			...queryFilter,
			skip: queryFilter.skip - 100,
		})
	}

	return (
		<section>
			{showModal && (
				<Popup loading={isLoading} title={message} close={closeModal} />
			)}
			{showFilterModal && (
				<EshopFilterModal
					applyFilter={applyFilter}
					resetFilter={resetFilter}
					close={() => setShowFilterModal(false)}
				/>
			)}

			<SectionHeader
				title="Sklad"
				searchQuery={searchQuery}
				handleSearch={handleSearch}
				handleChange={(e) => handleSearchQuery(e)}
				handleAddButton={() => push("sklad/novy-produkt")}
			/>

			<FlexContainer>
				<FixedContainer>
					<SectionNavbar
						items={retailPremisesTabs}
						activeIndex={activePremisesTab}
						setActiveIndex={handleChangePremisesTab}
					/>
				</FixedContainer>
			</FlexContainer>

			<FlexContainer>
				<FixedContainer>
					<SectionNavbar
						items={productCategoryTypeTabs}
						activeIndex={activeCategoryTypeTab}
						setActiveIndex={handleChangeCategoryTypeTab}
					/>
					{selectedProducts.length > 0 && (
						<div>
							<PublicButton
								onClick={() => handleDeactivateMany(selectedProducts, false)}
							>
								Neverejné
							</PublicButton>
							<PublicButton
								onClick={() => handleDeactivateMany(selectedProducts, true)}
							>
								Verejné
							</PublicButton>
						</div>
					)}
					{activeCategoryTypeTab === 0 && (
						<div>
							{hasFilter && (
								<ResetButton onClick={resetFilter}>reset</ResetButton>
							)}
							<Filterbutton onClick={() => setShowFilterModal(true)}>
								Filter
							</Filterbutton>
						</div>
					)}
				</FixedContainer>
			</FlexContainer>

			<ScrollContainer>
				{productItems.map((product, idx) => (
					<ProductOverview
						key={idx}
						product={product}
						activePremisesTab={activePremisesTab}
						handleUpdateButton={() => push(`sklad/${product._id}`)}
						handleDeleteButton={
							activeCategoryTypeTab === 0
								? () => handleDeleteProduct(product._id)
								: () => deleteLenses(product._id)
						}
						selectProduct={selectProduct}
						deselectProduct={deselectProduct}
						selectedProducts={selectedProducts}
					/>
				))}

				<ListArrows
					listItems={productItems}
					handleClickPrev={getPrevPage}
					handleClickNext={getNextPage}
				/>
			</ScrollContainer>
		</section>
	)
}

export default EshopSection
