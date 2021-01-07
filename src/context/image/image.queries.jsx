export const uploadImage = (token, img, imgName, imgAlt) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);

    const formdata = new FormData();
    formdata.append("image", img);
    formdata.append("name", imgName);
    formdata.append("alt", imgAlt);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
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