import React, { createContext, useContext } from 'react'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { AuthContext } from '../auth/auth.context'

export const ExaminationContext = createContext({
    createExamination: () => { },
    updateExamination: () => { },
    deleteExamination: () => { },
})

const ExaminationProvider = ({ children }) => {
    const { token } = useContext(AuthContext)
    const {
        closeModal,
        getMessage,
        setIsLoading,
        setShowModal
    } = useContext(LoadingModalContext)

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const createExamination = async (examsToAdd) => {
        setIsLoading(true)
        setShowModal(true)

        const raw = JSON.stringify(examsToAdd)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/exams/`, requestOptions)
            const data = await response.json()

            console.log(data)

            if (data.exam) {
                closeModal()
                return
            }

            getMessage(data.message)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const updateExamination = async () => { }
    const deleteExamination = async (examId) => {
        setIsLoading(true)
        setShowModal(true)

        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/exams/${examId}`, requestOptions)
            const data = await response.json()

            console.log(data)

            if (data.exam) {
                closeModal()
                return
            }

            getMessage(data.message)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    return (
        <ExaminationContext.Provider
            value={{
                createExamination,
                updateExamination,
                deleteExamination
            }}
        >
            {children}
        </ExaminationContext.Provider>
    )
}

export default ExaminationProvider