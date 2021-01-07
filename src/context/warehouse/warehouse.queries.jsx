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


export const fetchFilteredProducts = (token, limit, order) => {
    var myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "limit": limit, "sortBy": { "date": order } });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/products/filter`, requestOptions)

    // const myHeaders = new Headers();
    // myHeaders.append("auth-token", token);

    // const requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     redirect: 'follow'
    // };
    // return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/products`, requestOptions)
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
        eanCode,
        type,
        name,
        price,
        brandName,
        colorCode,
        description,
        eshop,
        imagePath,
        available,
        rimColor,
        rimMaterial,
        rimShape,
        // sex,
        size,
        // topProduct,
        lensColor
    } = newProduct

    let newArr = []

    if (Array.isArray(available)) {
        newArr = available.map(num => Number(num))
    }

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "eanCode": eanCode,
        "type": type,
        "name": name,
        "price": Number(price),
        "brand": brandName || " ",
        "colorCode": colorCode || " ",
        "description": description || " ",
        "eshop": eshop,
        "specs": {
            "frameColor": rimColor || " ",
            "frameStyle": rimShape || " ",
            "frameMaterial": rimMaterial || " ",
            "lensColor": lensColor || " ",
            "size": size.map(val => Number(val))
        },
        "image": imagePath,
        "available": newArr.length > 1 ? newArr : Number(available),
        // "sex": sex,
        // "topProduct": topProduct
    });


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
        id,
        eanCode,
        type,
        name,
        price,
        brandName,
        colorCode,
        description,
        eshop,
        imagePath,
        available,
        rimColor,
        rimMaterial,
        rimShape,
        // sex,
        size,
        // topProduct,
        lensColor
    } = product

    let newArr = []

    console.log(available)

    // if (Array.isArray(available)) {
    //     newArr = available.map(num => Number(num))
    // }

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "eanCode": eanCode,
        "type": type,
        "name": name,
        "price": Number(price),
        "brand": brandName || " ",
        "colorCode": colorCode || " ",
        "description": description || " ",
        "eshop": eshop,
        "specs": {
            "frameColor": rimColor || " ",
            "frameStyle": rimShape || " ",
            "frameMaterial": rimMaterial || " ",
            "lensColor": lensColor || " ",
            "size": size.map(val => Number(val))
        },
        "image": imagePath,
        "available": available.length > 1 ? available : Number(available),
        // "sex": sex,
        // "topProduct": topProduct
    });


    const requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/products/${id}`, requestOptions)
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