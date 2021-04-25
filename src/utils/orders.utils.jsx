
export const getPercentageDiscount = (fullPrice, percent) => {
    const num = fullPrice / 100
    const finalValue = num * percent
    return ((fullPrice - finalValue) / 100).toFixed(2)
}

const updatePrice = (price, amount, isFlat) => {
    if (amount == undefined) {
        return price
    }

    if (isFlat) {
        const formatedAmount = Number(amount.replace(",", ".")) * 100
        return price - formatedAmount > 0 ? parseFloat((price - formatedAmount).toFixed(0)) : 0
    }
    const percDis = parseFloat((price * ((100 - amount) / 100)).toFixed(0))
    return percDis > 0 ? percDis : 0
}

export const getTotalDiscountedPrice = (productPrice, lensesPrice, productQuant, lensesQuant, discountObj) => {

    let productDiscPrice = productPrice ? productPrice * productQuant : 0
    let lensDiscPrice = lensesPrice ? lensesPrice * lensesQuant : 0

    if(!discountObj) return ""
    productDiscPrice = updatePrice(productDiscPrice, discountObj?.product?.flat, true)
    productDiscPrice = updatePrice(productDiscPrice, discountObj?.product?.percent, false)

    lensDiscPrice = updatePrice(lensDiscPrice, discountObj?.lenses?.flat, true)
    lensDiscPrice = updatePrice(lensDiscPrice, discountObj?.lenses?.percent, false)

    return productDiscPrice + lensDiscPrice

}

export const isAvailable = (available) => {
    if (!available) return false
    if (typeof available === "number") {
        return available > 0 ? true : false
    } else {
        return available.reduce((acc, currValue) => acc + currValue) > 0 ? true : false
    }

}

export const formatAvailable = (available) => {
    if (!available) return "Nedostupné"
    if (typeof available === "number") {
        return available > 0 ? `${available}ks` : "Nedostupné"
    } else {
        const totalCount = available.reduce((acc, currValue) => acc + currValue)
        return totalCount > 0 ? `${totalCount}ks` : "Nedostupné"
    }
}

export const translatePaymentMethod = value => {
    if (value === 'cash') return "Hotovosť"
    if (value === 'card') return "Karta"
    if (value === 'coupon') return "Kupón"
    return value
}

export const translateStatus = status => {
    if (status === 'finished') return "Dokončené"
    if (status === 'fulfilled') return "Vybavené"
    if (status === 'pending') return "Čaká na vybavenie"
    if (status === 'paid') return "Zaplatené"
    if (status === 'half-paid') return "Zálohované"
    if (status === 'cancelled') return "Zrušené"
}
