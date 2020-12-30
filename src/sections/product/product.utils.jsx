export const initProductObj = {
    // Product id
    id: "",
    // Product name: Ultra glasses
    name: "",
    // Product description: Awesome product
    description: "",
    // price in cents: 1050 => 10.50
    price: '0',
    // product type: glesses, lenses, ...
    type: "",
    // brand name: Adidas
    brandName: "",
    //kolko sa ich zatial predalo
    soldAmount: 5,
    //kolko je kusov na ktorej prevádzke [arr] 
    available: [
        {
            name: "",
            value: "0"
        },
    ],
    // Oválne
    rimShape: "",
    // Čierna
    rimColor: "",
    // Titán
    rimMaterial: "",
    // Unisex
    sex: "men",
    // available sizes: [arr] [47, 21, 140]
    size: [],
    // Priehľadné
    lensColor: "",
    //ean kod = unikatny kod ktory ma kazdy produkt
    eanCode: "",
    //farebny kod, ktory spolu s ean kodom tvori "identitu" produktu. Moze existovat viacero
    //produktov s rovnakym ean kodom ale rozlicnym color kodom. Je to takto urobené kvôli skladovému
    //systému napr. mam na sklade iny pocet zltych ramov isteho druhu ako ciernych
    colorCode: "",
    //meno farby
    colorName: "",
    //path k obrazku na serveri (toto bude mozno array este sa uvidi)
    imagePath: "",
}

export const resetProductObj = () => {
    return {
        id: "",
        name: "",
        description: "",
        price: '0',
        type: "",
        brandName: "",
        soldAmount: 5,
        available: ["0", "0", "0", "0"],
        rimShape: "",
        rimColor: "",
        rimMaterial: "",
        sex: "men",
        size: [],
        lensColor: "",
        eanCode: "",
        colorCode: "",
        colorName: "",
        imagePath: "",
    }
}
