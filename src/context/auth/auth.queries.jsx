

export const getUser = (credentials) => {
    const { email, password } = credentials
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ "email": email, "password": password });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/auth/login`, requestOptions)
}

export const createNewUser = (credentials) => {
    const { name, email, password } = credentials

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ "email": email, "password": password, "name": name });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/auth/register`, requestOptions)
}

export const resetPassword = (email) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ "email": email });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/auth/forgot`, requestOptions)
}

export const setNewPassword = (resetSecret, password) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ "resetSecret": resetSecret, "password": password });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/auth/reset`, requestOptions)
}

export const fetchUser = (token) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/user/profile`, requestOptions)
}