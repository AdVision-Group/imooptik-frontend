
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