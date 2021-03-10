export const initProductObj = {
    name: "",
    description: "",
    price: 0,
    type: 0,
    brand: "",
    soldAmount: 0,
    available: [0, 1001, 1001, 1001, 1001, 1001],
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
        sex: "",
        size: [1001, 1001, 1001, 1001],
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
    // "-",
    "Obchodná 57, Bratislava",
    "Miletičova 38, Bratislava",
    "Vajnory, Bratislava",
    "Senica, OC Branč",
    "Vajnorská 53, Bratislava",
    // "Trnava, City Aréna"
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
        name: "Služby",
        value: 6
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
        name: "Vajnory, Bratislava",
        premises: 3,
    },
    {
        id: 4,
        name: "Senica, OC Branč",
        premises: 4,
    },
    {
        id: 5,
        name: "Vajnorská 53, Bratislava",
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
        if (available < 0) {
            return <>
                <p style={{ color: "var(--color-red)" }}>0 ks</p>
                <p style={{ color: "var(--color-red)" }}>Chýba {Math.abs(available)}</p>
            </>
        } else if (available === 0) {
            return <p style={{ color: "var(--color-red)" }}>0 ks</p>
        } else {
            return `${available} ks`
        }
    } else {
        if (activePremisesTab === 0) {
            if (available.reduce((acc, currValue) => acc + currValue) < 0) {
                return <p style={{ color: "var(--color-red)" }}>Všetky: 0 ks</p>
            } else if (available.reduce((acc, currValue) => acc + currValue) === 0) {
                return <p style={{ color: "var(--color-red)" }}>Všetky: 0 ks</p>
            } else {
                return `Všetky: ${available.reduce((acc, currValue) => acc + currValue)} ks`
            }
        } else {
            if (available[activePremisesTab] < 0) {
                return <>
                    <p style={{ color: "var(--color-red)" }}>0 ks</p>
                    <p style={{ color: "var(--color-red)" }}>Chýba {Math.abs(available[activePremisesTab])}</p>
                </>
            } else if (available[activePremisesTab] === 0) {
                return <p style={{ color: "var(--color-red)" }}>0 ks</p>
            } else {
                return `${available[activePremisesTab]} ks`
            }
        }
    }
}

export const checkParameter = (parameter, idx) => {
    if (parameter === undefined) return
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
        if (dia.indexOf(text.charAt(i)) !== -1) {
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