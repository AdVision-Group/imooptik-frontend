export const fetchProducts = (token) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/products`, requestOptions)
}

export const fetchSingleProduct = (id) => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/store/products/${id}`)
}

export const fetchLenses = (token) => {
    var myHeaders = new Headers();
    myHeaders.append("auth-token", token);


    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/lenses`, requestOptions)

}
export const delLense = (token, id) => {
    var myHeaders = new Headers();
    myHeaders.append("auth-token", token);


    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/lenses/${id}`, requestOptions)

}


export const postLenses = (token, newProduct) => {

    const {
        brand,
        cylinderRange,
        description,
        dioptersRange,
        name,
        price,
        image,
        eshop
    } = newProduct

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "brand": brand,
        "cylinderRange": cylinderRange.map(val => Number(val)),
        "name": name,
        "price": Number(price),
        "description": description,
        "image": image,
        "dioptersRange": dioptersRange.map(val => Number(val)),
        "eshop": eshop
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/lenses`, requestOptions)
}
export const patchLenses = (token, newProduct) => {

    const {
        _id,
        brand,
        cylinderRange,
        description,
        dioptersRange,
        name,
        price,
        image,
        eshop
    } = newProduct

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "id": _id,
        "brand": brand,
        "cylinderRange": cylinderRange.map(val => Number(val)),
        "name": name,
        "price": Number(price),
        "description": description,
        "image": image,
        "dioptersRange": dioptersRange.map(val => Number(val)),
        "eshop": eshop
    });

    const requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/lenses/${_id}`, requestOptions)
}


export const postProduct = (token, newProduct) => {
    const {
        available,
        brand,
        colorCode,
        // colorName,
        description,
        eanCode,
        eshop,
        name,
        price,
        specs: {
            frameColor,
            frameMaterial,
            frameStyle,
            lensColor,
            sex,
        },
        type,
        imagePath
    } = newProduct

    // let newArr = []

    // if (Array.isArray(available)) {
    //     newArr = available.map(num => Number(num))
    // }

    console.log(newProduct)

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    let raw = {}

    if (type === 4 || type === 5) {
        raw = JSON.stringify({
            available,
            brand: brand || " ",
            colorCode: colorCode || " ",
            // colorName,
            description: description || " ",
            eanCode,
            eshop,
            name,
            price,
            // specs: {
            // frameColor: frameColor || " ",
            // frameMaterial: frameMaterial || " ",
            // frameStyle: frameStyle || " ",
            // lensColor: lensColor || " ",
            // sex,
            // },
            type,
            image: imagePath
        })
    } else {
        raw = JSON.stringify({
            available,
            brand: brand || " ",
            colorCode: colorCode || " ",
            // colorName,
            description: description || " ",
            eanCode,
            eshop,
            name,
            price,
            specs: {
                frameColor: frameColor || " ",
                frameMaterial: frameMaterial || " ",
                frameStyle: frameStyle || " ",
                lensColor: lensColor || " ",
                sex,
            },
            type,
            image: imagePath
        })
    }

    console.log(raw)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/products`, requestOptions)
}

export const patchProduct = (token, product) => {
    const {
        available,
        brand,
        colorCode,
        // colorName,
        description,
        eanCode,
        eshop,
        name,
        price,
        specs: {
            frameColor,
            frameMaterial,
            frameStyle,
            lensColor,
            sex,
        },
        type,
        imagePath,
        _id
    } = product

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    let raw = {}


    if (type === 4 || type === 5) {
        raw = JSON.stringify({
            available,
            brand: brand || " ",
            colorCode: colorCode || " ",
            // colorName,
            description: description || " ",
            eanCode,
            eshop,
            name,
            price,
            // specs: {
            // frameColor: frameColor || " ",
            // frameMaterial: frameMaterial || " ",
            // frameStyle: frameStyle || " ",
            // lensColor: lensColor || " ",
            // sex,
            // },
            type,
            image: imagePath
        })
    } else {
        raw = JSON.stringify({
            available,
            brand: brand || " ",
            colorCode: colorCode || " ",
            // colorName,
            description: description || " ",
            eanCode,
            eshop,
            name,
            price,
            specs: {
                frameColor: frameColor || " ",
                frameMaterial: frameMaterial || " ",
                frameStyle: frameStyle || " ",
                lensColor: lensColor || " ",
                sex,
            },
            type,
            image: imagePath
        })
    }

    console.log(raw)

    const requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/products/${_id}`, requestOptions)
}

export const deleteProduct = (token, id) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/products/${id}`, requestOptions)

}