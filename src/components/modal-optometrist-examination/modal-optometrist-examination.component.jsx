import React, { useState, useContext, useEffect } from 'react'
import { ExaminationContext } from '../../context/examination/examination.context'
import { useFetchById } from '../../hooks/useFetch'
import CustomInput from '../custom-input/custom-input.component'
import CustomTextarea from '../custom-textarea/custom-textarea.component'

import {
    checkParameter,
    formatParameter,
} from '../../utils/parameters.utils'

import {
    CloseButton,
    Modal,
    ModalContainer,
    TableContainer,
    HeadTableCol,
    TableCol,
    TableBlock,
    TwoCols,
    SubmitButton
} from './modal-optometrist-examination.styles'

const OptometristExaminationModal = ({ close, refetch, userId, examinationToUpdate }) => {
    const examinationData = useFetchById('api/admin/exams', examinationToUpdate, !examinationToUpdate)

    const { createExamination, updateExamination } = useContext(ExaminationContext)
    const [examinationObj, setExaminationObj] = useState({})
    const [parameters, setParameters] = useState({})

    const handleParameterChange = (e, idx) => {
        const { name, value } = e.target
        let arr = parameters[name] || [1001, 1001, 1001, 1001]
        arr[idx] = value === '' ? 1001 : value

        setParameters({
            ...parameters,
            [name]: arr
        })
    }

    const handleChange = e => {
        const { name, value } = e.target

        if (value === '') {
            delete examinationObj[name]
            setExaminationObj({
                ...examinationObj,
            })
            return
        }

        setExaminationObj({
            ...examinationObj,
            [name]: value
        })
    }

    const formatParameters = (e, newParameters) => {
        if (newParameters) {
            const { name } = e.target
            setParameters({
                ...parameters,
                [name]: newParameters.map(value => formatParameter(value))
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let examObj = {
            ...examinationObj,
            doneTo: userId,
            parameters: {
                ...parameters
            }
        }

        console.log("EXAMINATION OBJECT BEFORE SEND")
        console.log(examObj)

        if (examinationToUpdate) {
            console.log("UPDATE EXAMINATION")
            delete examObj["doneTo"]
            delete examObj["doneBy"]
            delete examObj["date"]
            delete examObj["_id"]
            delete examObj["__v"]

            console.log(examObj)
            updateExamination(examObj, examinationToUpdate)

        } else {
            console.log("CREATE EXAMINATION")

            createExamination(examObj)
        }
        refetch()
        close()
    }

    console.log(examinationData)

    useEffect(() => {
        if (!examinationData.isLoading) {
            if (examinationData.response) {
                setParameters(examinationData.response?.exam?.parameters)
                setExaminationObj(examinationData.response?.exam)
            }
        }
    }, [examinationToUpdate, examinationData.isLoading])

    useEffect(() => {
        return () => {
            setExaminationObj({})
            setParameters({})
        }
    }, [])

    return (
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h3>Nová prehliadka</h3>

                <TableContainer>
                    <HeadTableCol>
                        <TableBlock>
                            <p>-</p>
                        </TableBlock>
                        <TableBlock>
                            <p>PO</p>
                        </TableBlock>
                        <TableBlock>
                            <p>ĽO</p>
                        </TableBlock>
                        <TableBlock>
                            <p>PO</p>
                        </TableBlock>
                        <TableBlock>
                            <p>ĽO</p>
                        </TableBlock>
                    </HeadTableCol>
                    {/* sph */}
                    <TableCol>
                        <TableBlock>
                            sph
                        </TableBlock>
                        {[...Array(4)].map((value, idx) => (
                            <TableBlock key={idx}>
                                <input
                                    name='sph'
                                    type='text'
                                    value={checkParameter(parameters?.sph, idx)}
                                    onChange={e => handleParameterChange(e, idx)}
                                    onBlur={(e) => formatParameters(e, parameters?.sph)}
                                />
                            </TableBlock>
                        ))}
                    </TableCol>

                    {/* cyl */}
                    <TableCol>
                        <TableBlock>
                            cyl
                        </TableBlock>
                        {[...Array(4)].map((value, idx) => (
                            <TableBlock key={idx}>
                                <input
                                    name='cyl'
                                    type='text'
                                    value={checkParameter(parameters?.cyl, idx)}
                                    onChange={e => handleParameterChange(e, idx)}
                                    onBlur={(e) => formatParameters(e, parameters?.cyl)}
                                />
                            </TableBlock>
                        ))}
                    </TableCol>

                    {/* ax */}
                    <TableCol>
                        <TableBlock>
                            ax
                        </TableBlock>
                        {[...Array(4)].map((value, idx) => (
                            <TableBlock key={idx}>
                                <input
                                    name='ax'
                                    type='text'
                                    value={checkParameter(parameters?.ax, idx)}
                                    onChange={e => handleParameterChange(e, idx)}
                                    onBlur={(e) => formatParameters(e, parameters?.ax)}
                                />
                            </TableBlock>
                        ))}
                    </TableCol>

                    {/* vizus D */}
                    <TableCol>
                        <TableBlock>
                            vizus D
                        </TableBlock>
                        {[...Array(4)].map((value, idx) => (
                            <TableBlock key={idx}>
                                <input
                                    name='vizusD'
                                    type='text'
                                    value={checkParameter(parameters?.vizusD, idx)}
                                    onChange={e => handleParameterChange(e, idx)}
                                    onBlur={(e) => formatParameters(e, parameters?.vizusD)}
                                />
                            </TableBlock>
                        ))}
                    </TableCol>

                    {/* vizus Bino */}
                    <TableCol>
                        <TableBlock>
                            vizus Bino
                        </TableBlock>
                        {[...Array(4)].map((value, idx) => (
                            <TableBlock key={idx}>
                                <input
                                    name='vizusBino'
                                    type='text'
                                    value={checkParameter(parameters?.vizusBino, idx)}
                                    onChange={e => handleParameterChange(e, idx)}
                                    onBlur={(e) => formatParameters(e, parameters?.vizusBino)}
                                />
                            </TableBlock>
                        ))}
                    </TableCol>

                    {/* vizus B */}
                    <TableCol>
                        <TableBlock>
                            vizus B
                        </TableBlock>
                        {[...Array(4)].map((value, idx) => (
                            <TableBlock key={idx}>
                                <input
                                    name='vizusB'
                                    type='text'
                                    value={checkParameter(parameters?.vizusB, idx)}
                                    onChange={e => handleParameterChange(e, idx)}
                                    onBlur={(e) => formatParameters(e, parameters?.vizusB)}
                                />
                            </TableBlock>
                        ))}
                    </TableCol>

                    {/* prizma */}
                    <TableCol>
                        <TableBlock>
                            prizma
                        </TableBlock>
                        {[...Array(4)].map((value, idx) => (
                            <TableBlock key={idx}>
                                <input
                                    name='prizma'
                                    type='text'
                                    value={checkParameter(parameters?.prizma, idx)}
                                    onChange={e => handleParameterChange(e, idx)}
                                    onBlur={(e) => formatParameters(e, parameters?.prizma)}
                                />
                            </TableBlock>
                        ))}
                    </TableCol>

                    {/* basis */}
                    <TableCol>
                        <TableBlock>
                            basis
                        </TableBlock>
                        {[...Array(4)].map((value, idx) => (
                            <TableBlock key={idx}>
                                <input
                                    name='basis'
                                    type='text'
                                    value={checkParameter(parameters?.basis, idx)}
                                    onChange={e => handleParameterChange(e, idx)}
                                    onBlur={(e) => formatParameters(e, parameters?.basis)}
                                />
                            </TableBlock>
                        ))}
                    </TableCol>

                    {/* PD */}
                    <TableCol>
                        <TableBlock>
                            PD
                        </TableBlock>
                        {[...Array(4)].map((value, idx) => (
                            <TableBlock key={idx}>
                                <input
                                    name='pd'
                                    type='text'
                                    value={checkParameter(parameters?.pd, idx)}
                                    onChange={e => handleParameterChange(e, idx)}
                                    onBlur={(e) => formatParameters(e, parameters?.pd)}
                                />
                            </TableBlock>
                        ))}
                    </TableCol>

                    {/* ADD */}
                    <TableCol>
                        <TableBlock>
                            ADD
                        </TableBlock>
                        {[...Array(2)].map((value, idx) => (
                            <TableBlock key={idx}>
                                <input
                                    name='add'
                                    type='text'
                                    value={checkParameter(parameters?.add, idx)}
                                    onChange={e => handleParameterChange(e, idx)}
                                    onBlur={(e) => formatParameters(e, parameters?.add)}
                                />
                            </TableBlock>
                        ))}
                    </TableCol>
                </TableContainer>


                <TwoCols>
                    <div>
                        <CustomInput
                            label="Typ"
                            name='type'
                            value={examinationObj?.type || ""}
                            handleChange={handleChange}
                        />
                        <CustomInput
                            label="Bc"
                            name='bc'
                            value={examinationObj?.bc || ""}
                            handleChange={handleChange}
                        />
                    </div>
                    <div>
                        <CustomInput
                            label="dptr PO"
                            name='dptrPO'
                            value={examinationObj?.dptrPO || ""}
                            handleChange={handleChange}
                        />
                        <CustomInput
                            label="dptr ĽO"
                            name='dptrLO'
                            value={examinationObj?.dptrLO || ""}
                            handleChange={handleChange}
                        />
                    </div>
                </TwoCols>
                <div>
                    <CustomTextarea
                        label='Poznámka'
                        name='note'
                        value={examinationObj?.note || ""}
                        handleChange={handleChange}
                        rows='5'
                    />
                    <CustomInput
                        label="Doporučenie"
                        name='recommendation'
                        value={examinationObj?.recommendation || ""}
                        handleChange={handleChange}
                    />
                </div>


                <SubmitButton onClick={handleSubmit}>{examinationToUpdate ? "Uložiť" : "Odoslať prehliadku"}</SubmitButton>
            </Modal>
        </ModalContainer>
    )
}

export default OptometristExaminationModal
