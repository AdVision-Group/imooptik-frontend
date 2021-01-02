

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


export const postProduct = (token, newProduct) => {
    console.log("PRODUCT BEFORE POST")
    console.log(newProduct)
    console.log("PRODUCT BEFORE POST")
    const {
        eanCode,
        type,
        name,
        price,
        brandName,
        colorCode,
        description,
        draft,
        imagePath,
        available,
        rimColor,
        rimMaterial,
        rimShape,
        sex,
        size,
        topProduct,
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
        "brand": brandName,
        "colorCode": colorCode,
        "description": description,
        "eshop": draft,
        "specs": {
            "frameColor": rimColor,
            "frameStyle": rimShape,
            "frameMaterial": rimMaterial,
            "lensColor": lensColor,
            "size": size.map(val => Number(val))
        },
        "image": imagePath,
        "available": newArr.length > 1 ? newArr : Number(available),
        // "sex": sex,
        "topProduct": topProduct
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
    console.log("UPDATE PRODUCT")
    console.log(product)
    console.log("UPDATE PRODUCT")
    const {
        id,
        eanCode,
        type,
        name,
        price,
        brandName,
        colorCode,
        description,
        draft,
        image,
        imagePath,
        available,
        rimColor,
        rimMaterial,
        rimShape,
        sex,
        size,
        topProduct,
        lensColor
    } = product

    console.log(image)
    console.log(imagePath)

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
        "brand": brandName,
        "colorCode": colorCode,
        "description": description,
        "eshop": draft,
        "specs": {
            "frameColor": rimColor,
            "frameStyle": rimShape,
            "frameMaterial": rimMaterial,
            "lensColor": lensColor,
            "size": size.map(val => Number(val))
        },
        "image": imagePath,
        "available": newArr.length > 1 ? newArr : Number(available),
        // "sex": sex,
        "topProduct": topProduct
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