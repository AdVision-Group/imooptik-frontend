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
    type: 1,
    // brand name: Adidas
    brandName: "",
    //kolko sa ich zatial predalo
    soldAmount: 0,
    //kolko je kusov na ktorej prevádzke [arr] 
    available: ["0", "0", "0", "0", "0"],
    // Oválne
    rimShape: "",
    // Čierna
    rimColor: "",
    // Titán
    rimMaterial: "",
    // Unisex
    sex: "men",
    // available sizes: [arr] [47, 21, 140]
    size: ["0", "0", "0"],
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

export const initLensesObj = {
    // id [5fd4cae9f9432022689dd223]
    id: "",
    // Lense name
    name: "",
    // Paradne sosovky
    description: "",
    //vsetky skla su dostupne len pre isty interval dioptrií a cylindrov, ak si zvolím ze mam dioptrie
    //mimo tohto intervalu tak si tieto skla k mojim okuliarom vybrat nemozem
    dioptersRange: ["0", "0"],
    cylinderRange: ["0", "0"],
    //cena v centoch
    price: "0",
    brand: ""
}


export const resetProductObj = () => {
    return initProductObj
}

export const resetLensesObj = () => {
    return initLensesObj
}
