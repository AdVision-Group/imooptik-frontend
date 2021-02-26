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

export const postOrder = (token, orderToAdd, isDifferentAddress, overwrite, coupon, deposit, paymentOption, paymentMethod) => {
    const {
        user,
        combinedProducts
    } = orderToAdd

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        user: user._id,
        combinedProducts: combinedProducts.map(product => product._id),
        overwrite: isDifferentAddress ? overwrite : undefined,
        coupon: coupon === "" ? undefined : coupon,
        paidAlready: paymentMethod === "coupon" ? deposit > 0 ? Number(deposit) : 0 : undefined,
        status: paymentOption,
        paymentType: paymentMethod
    })

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/orders`, requestOptions)
}

export const postCombinedProduct = (combinedProductToAdd) => {
    // const {
    //     product,
    //     lens,
    //     // price,
    //     lenses: {
    //         diopters,
    //         distance,
    //         cylinder,
    //         cylinderAxes
    //     }
    // } = combinedProductToAdd

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        ...combinedProductToAdd
        // lenses: {
        //     diopters: diopters,
        //     distance: distance,
        //     cylinder: cylinder,
        //     cylinderAxes: cylinderAxes
        // },
        // "_id": "5ff46112adf1801b447ff3cd",
        // product: product,
        // lens: lens || undefined,
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

export const postFulfill = (token, id) => {
    // /api/admin/orders/:id/fulfill

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);


    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/orders/${id}/fulfill`, requestOptions)
}


export const postFinish = (token, id) => {
    // /api/admin/orders/:id/fulfill

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);


    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/orders/${id}/finish`, requestOptions)
}