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