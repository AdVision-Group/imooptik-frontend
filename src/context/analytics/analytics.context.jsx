import React, { createContext, useState, useContext } from 'react'
import { AuthContext } from '../auth/auth.context'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'

export const AnalyticsContext = createContext({
    stats: null,
    getAnalytics: () => { },
    generateReport: () => { },
    updateRegistry: () => {}
})

export const useAnalytics = () => useContext(AnalyticsContext)

const AnalyticsProvider = ({ children }) => {
    const { token } = useContext(AuthContext)
    const { closeModal, getMessage, setShowModal, setIsLoading } = useContext(LoadingModalContext)

    const [stats, setStats] = useState(null)

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const getAnalytics = async (time) => {
        setShowModal(true)
        setIsLoading(true)

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/stats?timespan=${time}`, requestOptions)
            const data = await response.json()

            if (data.stats) {
                setStats(data.stats)
                closeModal()
                return
            }

            getMessage(data.messageSK)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const generateReport = async (reportParametersObj) => {
        setShowModal(true)
        setIsLoading(true)

        const raw = JSON.stringify(reportParametersObj)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/stats/generateReport`, requestOptions)
            const data = await response.json()


            if (data.name) {
                setTimeout(() => {
                    const win = window.open(`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/excel/${data.name}`, "_blank", "noreferrer noopener");
                    win?.focus();
                }, 2000)
            }

            getMessage(data.messageSK)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieo sa pokazilo")
            setIsLoading(false)
        }
    }

    const updateRegistry = async (dataObj, callback = () => {}) => {
        setShowModal(true)
        setIsLoading(true)

        const raw = JSON.stringify(dataObj)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/stats/modifyRegister`, requestOptions)
            const data = await response.json()

            getMessage(data.messageSK)
            callback(data)
            setIsLoading(false)
        }   catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }
    }

    return (
        <AnalyticsContext.Provider
            value={{
                stats,
                getAnalytics,
                generateReport,
                updateRegistry
            }}
        >
            {children}
        </AnalyticsContext.Provider>
    )
}

export default AnalyticsProvider