import React, { useState, useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'

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
    SubmitButton,
    Container,
    ExamTypeCheckbox,
    TwoColContainer,
    InputContainer,
    IsSuitableCheckbox,
    Col,
    Table,
    TableTitleCol
} from './modal-optometrist-examination.styles'

const OptometristExaminationModal = ({ close, refetch, userId, examinationToUpdate }) => {
    const examinationData = useFetchById('api/admin/exams', examinationToUpdate, !examinationToUpdate)

    const { createExamination, updateExamination } = useContext(ExaminationContext)
    const [examinationObj, setExaminationObj] = useState({})
    const [parameters, setParameters] = useState({})

    const [activeExamType, setActiveExamType] = useState(1)

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

    console.log(examinationObj)

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

    if (true) return (
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h1>Tu sa práve pracuje.</h1>
            </Modal>
        </ModalContainer>
    )

    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h3>Vyšetrenie</h3>
                <Container>
                    <h4>Typ prehliadky</h4>
                    <div>
                        {examTypes.map((type, idx) => (
                            <ExamTypeCheckbox
                                key={idx}
                                label={type.name}
                                isActive={activeExamType === type.value}
                                handleClick={() => setActiveExamType(type.value)}
                            />
                        ))}
                    </div>
                </Container>

                {activeExamType === 1 && (
                    <Container>
                        <h4>Refrakcia</h4>
                        <TwoColContainer>
                            <div>
                                <h5>Nosi od:</h5>
                                <CustomInput
                                    label={''}
                                    value={examinationObj?.nosi_od || ""}
                                    type="date"
                                    name="nosi_od"
                                    handleChange={handleChange}
                                />
                            </div>
                            <div>
                                <h5>Posledná korekcia:</h5>
                                <CustomInput
                                    label={''}
                                    value={examinationObj?.posledna_korekcia || ""}
                                    type="date"
                                    name="posledna_korekcia"
                                    handleChange={handleChange}
                                />
                            </div>
                        </TwoColContainer>
                        <TwoColContainer>
                            <InputContainer>
                                <CustomInput
                                    label={'Typ, spôsob'}
                                    value={examinationObj?.typ_sposob || ""}
                                    type="text"
                                    name="typ_sposob"
                                    handleChange={handleChange}
                                />
                            </InputContainer>
                            <InputContainer>
                                <IsSuitableCheckbox
                                    label={"Vyhovuje"}
                                    isActive={examinationObj?.vyhovuje || false}
                                    handleClick={() => handleChange({
                                        target: {
                                            name: "vyhovuje",
                                            value: examinationObj?.vyhovuje ? !examinationObj.vyhovuje : true
                                        }
                                    })}
                                />
                            </InputContainer>
                        </TwoColContainer>
                        <InputContainer>
                            <CustomTextarea
                                label='Anamnéza'
                                name="anamneza"
                                value={examinationObj?.anamneza || ''}
                                rows="5"
                                handleChange={handleChange}
                            />
                        </InputContainer>
                        <InputContainer>
                            <CustomTextarea
                                label='Doplňujúce informácie'
                                name="dopl_info"
                                value={examinationObj?.dopl_info || ""}
                                rows="3"
                                handleChange={handleChange}
                            />
                        </InputContainer>

                        <h4>Vlastné okuliare</h4>

                        <Table>
                            <TableTitleCol>
                                <Col>{" "}</Col>
                                <Col>P.</Col>
                                <Col>L.</Col>
                            </TableTitleCol>
                        </Table>

                    </Container>
                )}

                {activeExamType === 2 && (
                    <Container>
                        <h4>Anamnéza</h4>
                    </Container>
                )}

                {activeExamType === 3 && (
                    <Container>
                        <h4>Kontrola</h4>
                    </Container>
                )}

                <SubmitButton onClick={handleSubmit}>{examinationToUpdate ? "Uložiť" : "Odoslať prehliadku"}</SubmitButton>
            </Modal>
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default OptometristExaminationModal

const examTypes = [
    {
        name: "Refrakcia",
        value: 1
    },
    {
        name: "Anamnéza",
        value: 2
    },
    {
        name: "Kontrola",
        value: 3
    },
]