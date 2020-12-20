

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

    return fetch("http://195.110.58.166:8080/api/auth/login", requestOptions)
}

export const createNewUser = (credentials) => {
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

    return fetch("http://195.110.58.166:8080/api/auth/register", requestOptions)
}