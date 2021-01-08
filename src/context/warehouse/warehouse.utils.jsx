export const initProductObj = {
    // Product id
    // Product name: Ultra glasses
    name: "",
    // Product description: Awesome product
    description: "",
    // price in cents: 1050 => 10.50
    price: '0',
    // product type: glesses, lenses, ...
    type: 1,
    // brand name: Adidas
    brand: "",
    //kolko sa ich zatial predalo
    soldAmount: 0,
    //kolko je kusov na ktorej prevádzke [arr] 
    available: [0, 0, 0, 0, 0],
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
    image: null,
    eshop: false,

    specs: {
        frameColor: "",
        frameMaterial: "",
        frameStyle: "",
        lensColor: "",
        sex: "M",
        size: [0, 0, 0],
    }
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

// Category variables
export const productCategories = [
    {
        name: "Dioptrické",
        value: 1
    },
    {
        name: "Slnečné",
        value: 2
    },
    {
        name: "Športové",
        value: 3
    },
    {
        name: "Šošovky",
        value: 4
    },
    {
        name: "Doplnky",
        value: 5
    },
]



export const resetProductObj = () => {
    return initProductObj
}

export const resetLensesObj = () => {
    return initLensesObj
}

export const brands = [
    "Adidas",
    "Armani Exchange",
    "Arnette",
    "Blackfin",
    "Blumarine",
    "Burberry",
    "Bvlgari",
    "Calvin Klein",
    "Carolina Herrera",
    "Carrera",
    "David Beckham",
    "Dior",
    "Dolce & Gabbana",
    "Elle",
    "Emporio Armani",
    "Esprit",
    "Etnia Barcelona",
    "Fendi",
    "Fossil",
    "Furla",
    "Giorgio Armani",
    "Givenchy",
    "Gucci",
    "Guess",
    "H.I.S",
    "Hawkers",
    "Hugo Boss",
    "Jaguar",
    "Jimmy Choo",
    "Lacoste",
    "Liu Jo",
    "Marc Jacobs",
    "Max Mara",
    "Max&Co",
    "Meller",
    "Mexx",
    "Michael Kors",
    "Moschino",
    "Oakley",
    "Persol",
    "Polaroid",
    "Police",
    "Polo Ralph Lauren",
    "Prada",
    "Prada Linea Rossa",
    "Ralph",
    "Ralph Lauren",
    "Ray-Ban",
    "Salvatore Ferragamo",
    "Smith",
    "Strellson",
    "Tiffany&Co.",
    "Tom Ford",
    "Tommy Hilfiger",
    "Versace",
    "Vogue"
]