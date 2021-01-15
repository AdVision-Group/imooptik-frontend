

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
    myHeaders.append("Content-Type", "application/json");


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
        premises
    } = user

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");


    const raw = JSON.stringify({
        address: address || undefined,
        admin: admin,
        premises: Number(premises) === 0 ? undefined : premises,
        city: city || undefined,
        country: country || undefined,
        // email: email || undefined,
        lenses: {
            cylinder: cylinder,
            cylinderAxes: cylinderAxes,
            diopters: diopters,
            distance: distance,
        },
        name: name,
        phone: phone || undefined,
        psc: psc || undefined,
    })

    const requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    console.log(id)

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/users/${id}`, requestOptions)
}

export const postUser = (token, user) => {
    console.log(user)

    const {
        name,
        email,
    } = user


    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");


    const raw = JSON.stringify({
        email: email,
        name: name,
    })

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/auth/register`, requestOptions)
}

export const postAdmin = (token, user) => {
    console.log(user)

    const {
        name,
        email,
        password,
        premises,
        admin
    } = user

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");


    const raw = JSON.stringify({
        admin: Number(admin),
        email: email,
        name: name,
        premises: Number(premises),
        password
    })

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/auth/register`, requestOptions)
}