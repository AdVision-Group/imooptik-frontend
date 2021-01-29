export const initProductObj = {
    name: "",
    description: "",
    price: 0,
    type: 0,
    brand: "",
    soldAmount: 0,
    available: [1001, 1001, 1001, 1001, 0],
    eanCode: "",
    image: "",
    eshop: true,
    link: '',
    category: ''
}

export const initGlassesObj = {
    colorCode: "",
    specs: {
        frameColor: "",
        frameMaterial: "",
        frameStyle: "",
        lensColor: "",
        sex: "M",
        size: [1001, 1001, 1001],
    }
}

export const initContactLensesObj = {
    allowedCurves: [1001],
    allowedDiameters: [1001],
    dioptersRange: [1001, 1001]
}

export const initLensesObj = {
    id: "",
    name: "",
    description: "",
    dioptersRange: [1001, 1001],
    cylinderRange: [1001, 1001],
    price: 0,
    brand: "",
    image: ''
}

export const retailNames = [
    "Obchodná 57, Bratislava",
    "Miletičova 38, Bratislava",
    "Vajnory, Bratislava",
    "Senica, OC Branč",
    "Trnava, City Aréna"
]

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
        name: "Kontaktné Šošovky",
        value: 3
    },
    {
        name: "Športové",
        value: 4
    },
    {
        name: "Doplnky",
        value: 5
    },
    {
        name: "Šošovky",
        value: 0
    },
]

export const premisesTabs = [
    {
        id: 0,
        name: "Všetko",
        premises: 0,

    },
    {
        id: 1,
        name: "Obchodná 57, Bratislava",
        premises: 1,
    },
    {
        id: 2,
        name: "Miletičova 38, Bratislava",
        premises: 2,
    },
    {
        id: 3,
        name: "Senica, OC Branč",
        premises: 3,
    },
    {
        id: 4,
        name: "Vajnory, Bratislava",
        premises: 4,
    },
    // {
    //     id: 5,
    //     name: "Trnava, City Aréna",
    //     permission: 5,
    // },
]

export const categoryTabs = [
    {
        id: 0,
        name: "Okuliare",
    },
    {
        id: 1,
        name: "Šosovky",
    },
]

export const lensesBrands = [
    "Acuvue",
    "Adore",
    "Air Optix",
    "Biofinity",
    "Biomedics",
    "Clariti",
    "ColourVue",
    "Comfilcon A",
    "Dailies",
    "Freshlook",
    "Lenjoy",
    "Proclear",
    "Purevision",
    "Soflens",
]

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

export const formatPrice = price => {
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

export const formatfloatNumber = number => {
    let value = 0
    if (number.includes(',')) {
        value = number.split(',')[0] + '.' + number.split(',')[1]
        return Number(value)
    } else {
        return Number(number)

    }
}

export const formatAvailable = (available, activePremisesTab) => {
    if (available === undefined) return "Šosovka"

    if (typeof available === "number") {
        return `Na sklade ${available} kusov`
    } else {
        if (activePremisesTab === 0) {
            return `Vo všetkých skladoch je ${available.reduce((acc, currValue) => acc + currValue)} kusov`
        } else {
            return `Na sklade ${available[activePremisesTab]} kusov`
        }
    }
}

export const checkParameter = (parameter, idx) => {
    if (parameter.length === 0) {
        return ""
    }
    if (parameter[idx] === 1001) {
        return ""
    }

    return parameter[idx].toString()
}

const dia = "áäčďéíľĺňóôŕšťúýžÁČĎÉÍĽĹŇÓŠŤÚÝŽ";
const nodia = "aacdeillnoorstuyzACDEILLNOSTUYZ";

export const diaConvert = (text) => {
    let convertText = "";
    for (let i = 0; i < text.length; i++) {
        if (dia.indexOf(text.charAt(i)) != -1) {
            convertText += nodia.charAt(dia.indexOf(text.charAt(i)));
        }
        else {
            convertText += text.charAt(i);
        }
    }
    return convertText;
}

export const formatLink = (text) => {
    return diaConvert(text).replaceAll(" ", "-").toLowerCase().trim()
}