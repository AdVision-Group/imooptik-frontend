import React, { createContext, useContext, useState, useEffect} from 'react'

export const FetchContext = createContext({
    isLoading: false,
    response: null,
    error: null,
    message: null,
    fetchData: () => {},
})

export const useFetchContext = () => useContext(FetchContext)

const FetchProvider = ({children}) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async (path, data, callback, method = "GET", hasHeader = true) => {
        setIsLoading(true)

        console.log("FETCH_DATA")
        console.log({
            hasHeader,
            method,
            path,
            data,
        })

        const myHeaders = new Headers();
        myHeaders.append("auth-token", localStorage.getItem(process.env.REACT_APP_ADMIN_TOKEN));
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: method,
            ...(hasHeader) && {headers: myHeaders},
            ...(data) && {body: JSON.stringify(data)},
            redirect: 'follow'
        };

        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}${path}`, requestOptions)
            const data = await res.json()

            callback(data)
            setIsLoading(false)
        } catch (err) {
            setError(err)
            setIsLoading(false)
            setMessage("Niečo sa pokazilo")
        }
    } 

    return (
        <FetchContext.Provider
            value={{
                isLoading,
                response,
                error,
                message,
                fetchData
            }}
        >
            {children}
        </FetchContext.Provider>
    )
}

export default FetchProvider