import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchById } from '../../hooks/useFetch'
import { ExaminationContext } from '../../context/examination/examination.context'

import ExaminationUser from '../examination-user/examination-user.component'
import OptometristExaminationModal from '../modal-optometrist-examination/modal-optometrist-examination.component'

// import {
//     checkParameterValue
// } from '../../utils/parameters.utils'

import {
    ExaminationsOverviewContainer,
    Header,
    ExaminationContainer,
    ExamHead,
    // ExamTableContainer,
    // HeadTableCol,
    // TableCol,
    ExaminationOptions,
    AddButton,
    UpdateButton,
    DeleteButton
} from './examinations-overview.styles'

const ExaminationsOverview = () => {
    const params = useParams()
    const examinationData = useFetchById("api/admin/exams/user", params.id)
    const { deleteExamination } = useContext(ExaminationContext)
    const [showOptometristModal, setShowOptometristModal] = useState(false)
    const [examinations, setExaminations] = useState([])
    const [examinationToUpdate, setExaminationToUpdate] = useState(null)

    const [isDisabled, setIsDisabled] = useState(false)


    const handleUpdateClick = (e, id) => {
        e.preventDefault()
        setExaminationToUpdate(id)
        setShowOptometristModal(true)
    }

    const handleDelete = (e, id) => {
        e.preventDefault()
        if (isDisabled) {
            return;
        }
        setIsDisabled(true);
        deleteExamination(id)

        setTimeout(() => {
            examinationData.refetch()
            setIsDisabled(false);
        }, 100)
    }

    const handleCloseModal = () => {
        setShowOptometristModal(false)
        setExaminationToUpdate(null)
    }

    useEffect(() => {
        if (!examinationData.isLoading) {
            if (examinationData.response) {
                setExaminations(examinationData.response.exams)
            }
        }
    }, [examinationData.isLoading])

    return (
        <ExaminationsOverviewContainer>
            {showOptometristModal && <OptometristExaminationModal
                userId={params.id}
                examinationToUpdate={examinationToUpdate}
                refetch={examinationData.refetch}
                close={handleCloseModal}
            />}
            <Header>
                <h2>Vyšetrenia</h2>
                <div>
                    <AddButton type='button' onClick={() => setShowOptometristModal(true)}>Pridať prehliadku</AddButton>
                </div>
            </Header>


            <div>
                {examinations && examinations.map((examination, idx) => (
                    <ExaminationContainer key={idx}>
                        <ExamHead>
                            <h3>Dátum:</h3>
                            <p>{new Date(examination?.date).toLocaleDateString("sk-SK", { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                        </ExamHead>
                        <ExamHead>
                            <h3>Typ vyšetrenia:</h3>
                            <p>{examTypes[examination?.type - 1].name}</p>
                        </ExamHead>

                        <ExaminationOptions>
                            <ExaminationUser userId={examination.doneBy} />
                            <div>
                                <UpdateButton onClick={e => handleUpdateClick(e, examination._id)}>Upraviť</UpdateButton>

                                <DeleteButton disabled={isDisabled} onClick={e => handleDelete(e, examination._id)}>
                                    {isDisabled ? 'Mažem...' : 'Vymazať'}
                                </DeleteButton>
                            </div>
                        </ExaminationOptions>
                    </ExaminationContainer>
                ))}
            </div>
        </ExaminationsOverviewContainer>
    )
}

export default ExaminationsOverview

const examTypes = [
    {
        name: "Refrakcia",
        value: 1
    },
    {
        name: "Apl. KŠ",
        value: 2
    },
    {
        name: "Kontrola",
        value: 3
    },
]