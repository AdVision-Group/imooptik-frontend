
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
