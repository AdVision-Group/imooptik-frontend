

export const fetchPosts = () => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/blogs`)
}

export const fetchSinglePost = (id) => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/blogs/${id}`)
}

export const createNewPost = (token, name, description, draft, html, img) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ "name": name, "description": description, "draft": draft, "html": html, 'image': img });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/blogs`, requestOptions)
}

export const updatePost = (token, name, description, draft, html, img, id) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ "name": name, "description": description, "draft": draft, "html": html, 'image': img });

    const requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/blogs/${id}`, requestOptions)

}

export const deletePost = (token, id) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");


    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/blogs/${id}`, requestOptions)

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

export const fetchImages = () => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/images`)
}