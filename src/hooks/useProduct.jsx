import { useState } from "react"

export const useProduct = () => {
	// const []
}

export const getOutletPrice = (price = 0, outletPercentage = 0) => {
	return `${(((price / 100) * (100 - outletPercentage || 0)) / 100).toFixed(
		2
	)}€`
}

export const getOriginalPriceFromOutlet = (price) => {
	return (price / 100).toFixed(2)
}
