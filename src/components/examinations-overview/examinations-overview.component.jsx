import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchById } from '../../hooks/useFetch'
import { ExaminationContext } from '../../context/examination/examination.context'

import ExaminationUser from '../examination-user/examination-user.component'
import OptometristExaminationModal from '../modal-optometrist-examination/modal-optometrist-examination.component'

import {
    checkParameterValue
} from '../../utils/parameters.utils'

import {
    ExaminationsOverviewContainer,
    Header,
    ExaminationContainer,
    ExamHead,
    ExamTableContainer,
    HeadTableCol,
    TableCol,
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

    const handleUpdateClick = (e, id) => {
        e.preventDefault()
        setExaminationToUpdate(id)
        setShowOptometristModal(true)
    }

    const handleDelete = (e, id) => {
        e.preventDefault()
        deleteExamination(id)
        examinationData.refetch()
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
                            <h3>Dátum</h3>
                            <p>{new Date(examination?.date).toLocaleDateString("sk-SK", { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                        </ExamHead>
                        <ExamTableContainer>
                            <HeadTableCol>
                                <div>-</div>
                                <div>PO</div>
                                <div>ĽO</div>
                                <div>PO</div>
                                <div>ĽO</div>
                            </HeadTableCol>
                            <TableCol>
                                <div>sph</div>
                                {examination?.parameters?.sph.map((value, idx) => (
                                    <div key={idx}>
                                        {checkParameterValue(value)}
                                    </div>
                                ))}
                            </TableCol>
                            <TableCol>
                                <div>cyl</div>
                                {examination?.parameters?.cyl.map((value, idx) => (
                                    <div key={idx}>
                                        {checkParameterValue(value)}
                                    </div>
                                ))}
                            </TableCol>
                            <TableCol>
                                <div>ax</div>
                                {examination?.parameters?.ax.map((value, idx) => (
                                    <div key={idx}>
                                        {checkParameterValue(value)}
                                    </div>
                                ))}
                            </TableCol>
                            <TableCol>
                                <div>vizus D</div>
                                {examination?.parameters?.vizusD.map((value, idx) => (
                                    <div key={idx}>
                                        {checkParameterValue(value)}
                                    </div>
                                ))}
                            </TableCol>
                            <TableCol>
                                <div>vizus bino</div>
                                {examination?.parameters?.vizusBino.map((value, idx) => (
                                    <div key={idx}>
                                        {checkParameterValue(value)}
                                    </div>
                                ))}
                            </TableCol>
                            <TableCol>
                                <div>vizus B</div>
                                {examination?.parameters?.vizusB.map((value, idx) => (
                                    <div key={idx}>
                                        {checkParameterValue(value)}
                                    </div>
                                ))}
                            </TableCol>
                            <TableCol>
                                <div>prizma</div>
                                {examination?.parameters?.prizma.map((value, idx) => (
                                    <div key={idx}>
                                        {checkParameterValue(value)}
                                    </div>
                                ))}
                            </TableCol>
                            <TableCol>
                                <div>basis</div>
                                {examination?.parameters?.basis.map((value, idx) => (
                                    <div key={idx}>
                                        {checkParameterValue(value)}
                                    </div>
                                ))}
                            </TableCol>
                            <TableCol>
                                <div>PD</div>
                                {examination?.parameters?.pd.map((value, idx) => (
                                    <div key={idx}>
                                        {checkParameterValue(value)}
                                    </div>
                                ))}
                            </TableCol>
                            <TableCol>
                                <div>ADD</div>
                                {examination?.parameters?.add.map((value, idx) => {
                                    if (idx > 1) return
                                    return (
                                        <div key={idx}>
                                            {checkParameterValue(value)}
                                        </div>
                                    )
                                })}
                            </TableCol>
                        </ExamTableContainer>
                        <ExaminationOptions>
                            <ExaminationUser userId={examination.doneBy} />
                            <div>
                                <UpdateButton onClick={e => handleUpdateClick(e, examination._id)}>Upraviť</UpdateButton>
                                <DeleteButton onClick={e => handleDelete(e, examination._id)}>Vymazať</DeleteButton>
                            </div>
                        </ExaminationOptions>
                    </ExaminationContainer>
                ))}
            </div>
        </ExaminationsOverviewContainer>
    )
}

export default ExaminationsOverview
