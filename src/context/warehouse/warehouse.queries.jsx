

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
    const { eanCode, checked, name, price, brand, colorCode, description, draft, image } = newProduct

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "eanCode": eanCode,
        "type": Number(checked),
        "name": name,
        "price": Number(price),
        "brand": brand,
        "colorCode": colorCode,
        "description": description,
        "eshop": draft,
        "specs": {
            "frameColor": "cierna",
            "frameStyle": "okruhly",
            "frameMaterial": "kov",
            "lensColor": "priehladne",
            "size": [20, 120, 59]
        },
        "image": image
    });


    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/products`, requestOptions)
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