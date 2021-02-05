import { useEffect, useState } from 'react'

export const useFetch = (path, skip = false) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [refetchIndex, setRefetchIndex] = useState(0)

    const refetch = () => setRefetchIndex(prevRefetchIndex => prevRefetchIndex + 1)

    useEffect(() => {
        const fetchData = async () => {
            if (skip) return
            try {
                const res = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/${path}`)
                const data = await res.json()

                setMessage(data.message)
                setResponse(data)
                setIsLoading(false)
            } catch (err) {
                setError(err)
                setIsLoading(false)
                setMessage("Niečo sa pokazilo")
            }
        }
        fetchData()
    }, [refetchIndex])

    return { response, isLoading, error, message, refetch }
}

export const useFetchByQuery = (path, queryObj, skip = false) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [refetchIndex, setRefetchIndex] = useState(0)

    const refetch = () => setRefetchIndex(prevRefetchIndex => prevRefetchIndex + 1)

    const myHeaders = new Headers();
    myHeaders.append("auth-token", localStorage.getItem(process.env.REACT_APP_ADMIN_TOKEN));
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(queryObj)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    useEffect(() => {
        const fetchData = async () => {
            if (skip) return
            setIsLoading(true)
            try {
                const res = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/${path}`, requestOptions)
                const data = await res.json()

                setResponse(data)
                setIsLoading(false)
            } catch (err) {
                setError(err)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [refetchIndex, path])

    return { response, isLoading, error, refetch }
}

export const useFetchById = (path, id, skip = false) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [refetchIndex, setRefetchIndex] = useState(0)

    const refetch = () => setRefetchIndex(prevRefetchIndex => prevRefetchIndex + 1)

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
            if (skip) return
            setIsLoading(true)
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
    }, [refetchIndex, path, id])

    return { response, isLoading, error, refetch }
}
