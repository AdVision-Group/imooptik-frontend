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
    "Obchodná 57, Bratislava",
    "Obchodná 57, Bratislava",
    "Miletičova 38, Bratislava",
    "Vajnory, Bratislava",
    "Senica, OC Branč",
    // "Trnava, City Aréna"
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