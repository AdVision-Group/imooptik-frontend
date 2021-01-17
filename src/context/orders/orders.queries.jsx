export const fetchOrders = (token) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);


    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/orders`, requestOptions)
}

export const postOrder = (token, orderToAdd, isDifferentAddress, overwrite, coupon, deposit, paymentOption) => {
    const {
        user,
        combinedProducts
    } = orderToAdd

    const myHeaders = new Headers();
    // myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    console.log(user._id)
    console.log(combinedProducts.map(product => product._id))

    console.log(paymentOption)

    const raw = JSON.stringify({
        user: user._id,
        combinedProducts: combinedProducts.map(product => product._id),
        overwrite: isDifferentAddress ? overwrite : undefined,
        coupon: coupon === "" ? undefined : coupon,
        deposit: paymentOption === "Záloha" ? deposit > 0 ? Number(deposit) : 0 : undefined,
        // paymentOption: paymentOption || undefined
    })

    console.log(raw)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/store/orders`, requestOptions)
}

export const postCombinedProduct = (combinedProductToAdd) => {
    const {
        product,
        lens,
        // price,
        lenses: {
            diopters,
            distance,
            cylinder,
            cylinderAxes
        }
    } = combinedProductToAdd

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        lenses: {
            diopters: diopters,
            distance: distance,
            cylinder: cylinder,
            cylinderAxes: cylinderAxes
        },
        // "_id": "5ff46112adf1801b447ff3cd",
        product: product,
        lens: lens || undefined,
        // price: price,
        // "__v": 0
    })

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/store/combinedProducts`, requestOptions)
}

export const fetchUserOrder = (token, id) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);


    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/orders/${id}`, requestOptions)
}