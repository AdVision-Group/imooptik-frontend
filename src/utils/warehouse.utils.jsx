export const retailNames = [
    "Obchodná 57, Bratislava",
    "Miletičova 38, Bratislava",
    "Vajnory, Bratislava",
    "Senica, OC Branč",
    "Trnava, City Aréna"
]

export const retailNamesTabs = [
    {
        id: 0,
        name: "E-shop",
    },
    {
        id: 1,
        name: "Obchodná 57, Bratislava",
    },
    {
        id: 2,
        name: "Miletičova 38, Bratislava",
    },
    {
        id: 3,
        name: "Vajnory, Bratislava",
    },
    {
        id: 4,
        name: "Senica, OC Branč",
    },
]

export const formatPrice = (price = "") => {
    price.toString()
    let value = 0
    if (price.includes(',')) {
        if (price.split(',')[1].length === 1) {
            value = price.split(',')[0] + price.split(',')[1] + "0"
            return Number(value)
        } else {
            value = price.split(',')[0] + price.split(',')[1]
            return Number(value)
        }
    } else {
        return Number(price * 100)
    }
}