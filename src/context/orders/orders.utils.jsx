export const initCombinedProductObj = {
    lenses: {
        cylinder: [0, 0, 0, 0],
        cylinderAxes: [0, 0, 0, 0],
        diopters: [0, 0, 0, 0],
        distance: [0, 0, 0, 0],
        addition: [0, 0, 0, 0],
        basis: [0, 0, 0, 0],
        prism: [0, 0, 0, 0],
    },
    // "_id": "5ff46112adf1801b447ff3cd",
    product: "",
    lens: "",
    price: 0,
    // "__v": 0
}

export const paymentOptionsArr = [
    {
        name: "Hotovosť",
        value: "cash"
    },
    {
        name: "Karta",
        value: "card"
    },
    {
        name: "Záloha",
        value: "coupon"
    }
]

export const stepsArr = [
    'eshop',
    'lenses',
    'diopters',
    'summary'
]

export const tabItems = [
    {
        id: 1,
        name: "Nevybavené",
    },
    {
        id: 2,
        name: "Dokončené",
    },
    {
        id: 3,
        name: "Zrušené",
    }
]