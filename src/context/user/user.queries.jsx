

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

    const raw = JSON.stringify({
        address: address || " ",
        admin: admin,
        premises: premises,
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
        admin: admin,
        email: email,
        name: name,
        premises,
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