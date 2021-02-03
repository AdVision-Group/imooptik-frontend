import { useEffect, useState } from 'react'

export const useFetch = (path, options) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/${path}`, options)
                const data = await res.json()

                setResponse(data)
                setIsLoading(false)
            } catch (err) {
                setError(err)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    return { response, isLoading, error }
}

export const useFetchById = (path, id) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const myHeaders = new Headers();
    myHeaders.append("auth-token", localStorage.getItem(process.env.REACT_APP_ADMIN_TOKEN));
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/${path}/${id}`, requestOptions)
                const data = await res.json()

                setResponse(data)
                setIsLoading(false)
            } catch (err) {
                setError(err)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    return { response, isLoading, error }
}