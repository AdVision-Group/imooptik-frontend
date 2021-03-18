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

export const retailNames = [
    "eshop",
    "Centrálny sklad",
    "Obchodná, Bratislava",
    "Miletičova, Bratislava",
    "Vajnory, Bratislava",
    "Vajnorská 53, Bratislava",
    "OC Branč, Senica"
]

export const retailNamesTabs = [
    {
        id: 0,
        name: "Všetky",
    },
    {
        id: 1,
        name: "Centrálny sklad",
    },
    {
        id: 2,
        name: "Obchodná, Bratislava",
    },
    {
        id: 3,
        name: "Miletičova, Bratislava",
    },
    {
        id: 4,
        name: "Vajnory, Bratislava",
    },
    {
        id: 5,
        name: "Vajnorská 53, Bratislava",
    },
    {
        id: 6,
        name: "OC Branč, Senica",
    },
]

export const glassesColors = [
    "Čierná",
    "Modrá",
    "Červená",
    "Sivá",
    "Zlatá",
    "Strieborná",
    "Hnedá",
    "Fialová",
    "Zelená",
    "Sedá",
    "Bordová",
]

export const glassesMaterials = [
    "Acetát",
    "Kov",
    "Titán",
    "TR90",
    "Patent",
    "Optyl",
]

export const glassesShapes = [
    "Pilot",
    "Squared",
    "Browline",
    "Cat eye",
    "Tiny",
    "Oversize",
    "Okrúhle",
    "Oválne",
    "Obdĺžnikové",
    "Flat top",
    "Špeciálne"
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

export const formatfloatNumber = number => {
    let value = 0

    console.log(number)

    if (number.includes(',')) {
        value = number.split(',')[0] + '.' + number.split(',')[1]
        return value
    } else {
        return number
    }
}