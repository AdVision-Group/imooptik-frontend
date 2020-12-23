export const uploadImage = (token, img) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);

    const formdata = new FormData();
    formdata.append("name", "Placeholder image");
    formdata.append("alt", "placeholder");
    formdata.append("image", img);

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