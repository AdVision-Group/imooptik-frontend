export const uploadImage = (token, img, imgName, imgAlt) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");


    const raw = JSON.stringify({ "name": imgName || " ", "alt": imgAlt || " ", 'image': img });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/images/upload`, requestOptions)
}

export const fetchImages = () => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/images`)
}

export const deleteImage = (token, id) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);

    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/images/${id}`, requestOptions)
}