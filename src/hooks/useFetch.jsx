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