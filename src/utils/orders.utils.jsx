
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
        return available > 0 ? "Na sklade" : "Nedostupné"
    } else {
        return available.reduce((acc, currValue) => acc + currValue) > 0 ? "Na sklade" : "Nedostupné"
    }

}