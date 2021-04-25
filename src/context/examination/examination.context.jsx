import React, { createContext, useContext, useState } from 'react'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import {useFetchContext} from '../fetch-context/fetch.context'
import examSchema from './exam.json'
import lodash from 'lodash'

export const ExaminationContext = createContext({
    createExamination: () => { },
    updateExamination: () => { },
    deleteExamination: () => { },
    getPDF: () => {},
})

export const useExaminationContext = () => useContext(ExaminationContext)

const ExaminationProvider = ({ children }) => {
    const { fetchData } = useFetchContext()


    const {
        closeModal,
        getMessage,
        setIsLoading,
        setShowModal
    } = useContext(LoadingModalContext)

    const getPDF = async (examId) => {
        setIsLoading(true)
        setShowModal(true)

        fetchData(`/api/admin/exams/${examId}/createPdf`, null, (data) => {
            getMessage(data.messageSK)
            
            setTimeout(() => {
                const win = window.open(`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/pdf/${data.filename}`, "_blank", "noreferrer noopener");
                win?.focus();
            }, 100)
            setIsLoading(false)

        }, "POST")
    }

    const createExamination = (examsToAdd, callback = () => {}) => {
        setIsLoading(true)
        setShowModal(true)

        // console.log(examSchema)
        // console.log(examsToAdd)

        fetchData("/api/admin/exams/", examsToAdd, (data) => {
            console.log("CREATE new examination")
            console.log(data)
            setIsLoading(false)

            if (data.exam) {
                callback(data)
                closeModal()
                return
            }

            getMessage(data.messageSK)
            setIsLoading(false)
        }, "POST")

    }

    const updateExamination = async (examToUpdate, examId, callback = () => {}) => {
        setIsLoading(true)
        setShowModal(true)

        fetchData(`/api/admin/exams/${examId}`, examToUpdate, (data) => {
            console.log("UPDATE existed examination")
            console.log(data)
            setIsLoading(false)

            if (data.exam) {
                callback(data)
                closeModal()
                return
            }

            getMessage(data.messageSK)
            setIsLoading(false)
        }, "PATCH")

    }

    const deleteExamination = async (examId, callback = () => {}) => {
        setIsLoading(true)
        setShowModal(true)

        fetchData(`/api/admin/exams/${examId}`, null, (data) => {
            console.log("DELETE existed examination")
            console.log(data)
            setIsLoading(false)

            if (data.exam) {
                callback(data)
                closeModal()
                return
            }

            getMessage(data.messageSK)
            setIsLoading(false)
        }, "DELETE")
    }

    return (
        <ExaminationContext.Provider
            value={{
                createExamination,
                updateExamination,
                deleteExamination,
                getPDF
            }}
        >
            {children}
        </ExaminationContext.Provider>
    )
}

export default ExaminationProvider