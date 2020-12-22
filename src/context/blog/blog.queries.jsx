

export const fetchPosts = () => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/blogs`)
}

export const createNewPost = (token, name, description, draft, html) => {
    var myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ "name": name, "description": description, "draft": draft, "html": html });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/blogs`, requestOptions)
}


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