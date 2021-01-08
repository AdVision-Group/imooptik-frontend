

export const fetchUsers = (token) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/users`, requestOptions)

}

export const fetchUser = (token, id) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/users/${id}`, requestOptions)
}

export const patchUser = (token, user) => {
    const {
        _id: id,
        address,
        admin,
        city,
        country,
        email,
        lenses: {
            cylinder,
            cylinderAxes,
            diopters,
            distance,
        },
        name,
        phone,
        psc,
    } = user

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);

    const raw = JSON.stringify({
        address: address || " ",
        admin: admin,
        city: city || " ",
        country: country || " ",
        email: email,
        lenses: {
            cylinder: cylinder,
            cylinderAxes: cylinderAxes,
            diopters: diopters,
            distance: distance,
        },
        name: name,
        phone: phone || " ",
        psc: psc || " ",
    })

    const requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/users/${id}`, requestOptions)
}
