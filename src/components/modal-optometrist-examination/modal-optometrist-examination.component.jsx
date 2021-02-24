import React, { useState, useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { ExaminationContext } from '../../context/examination/examination.context'
import { useFetchById } from '../../hooks/useFetch'
import CustomInput from '../custom-input/custom-input.component'
import CustomTextarea from '../custom-textarea/custom-textarea.component'

import {
    checkParameter,
    formatParameter,
    checkParameterValue
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
    TableTitleCol,
    TableCol,
    TableBlock,
    ObjectiveRefTable,
    SubjectiveRefTable
} from './modal-optometrist-examination.styles'

const OptometristExaminationModal = ({ close, refetch, userId, examinationToUpdate }) => {
    const examinationData = useFetchById('api/admin/exams', examinationToUpdate, !examinationToUpdate)

    const { createExamination, updateExamination } = useContext(ExaminationContext)
    const [examinationObj, setExaminationObj] = useState({})

    //REFRAKCIA
    const [vlastne_okuliare, setVlastne_okuliare] = useState({})
    const [objektivna_refrakcia, setObjektivna_refrakcia] = useState({})
    const [subjektivna_refrakcia, setSubjektivna_refrakcia] = useState({})

    const [activeExamType, setActiveExamType] = useState(1)

    const handleParameterChange = (e, idx, parameterObj, updateParameter) => {
        const { name, value } = e.target
        let arr = parameterObj[name] || [1001, 1001]
        arr[idx] = value === '' ? 1001 : value

        updateParameter({
            ...parameterObj,
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

    const formatParameters = (e, newParameters, parameterObj, updateParameter) => {
        if (newParameters) {
            const { name } = e.target
            updateParameter({
                ...parameterObj,
                [name]: newParameters.map(value => formatParameter(value))
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // let examObj = {
        //     ...examinationObj,
        //     doneTo: userId,
        //     parameters: {
        //         ...parameters
        //     }
        // }

        // console.log("EXAMINATION OBJECT BEFORE SEND")
        // console.log(examObj)

        // if (examinationToUpdate) {
        //     console.log("UPDATE EXAMINATION")
        //     delete examObj["doneTo"]
        //     delete examObj["doneBy"]
        //     delete examObj["date"]
        //     delete examObj["_id"]
        //     delete examObj["__v"]

        //     console.log(examObj)
        //     updateExamination(examObj, examinationToUpdate)

        // } else {
        //     console.log("CREATE EXAMINATION")

        //     createExamination(examObj)
        // }
        // refetch()
        // close()
    }

    console.log(examinationObj)
    console.log(vlastne_okuliare)

    useEffect(() => {
        if (!examinationData.isLoading) {
            if (examinationData.response) {
                // setParameters(examinationData.response?.exam?.parameters)
                setExaminationObj(examinationData.response?.exam)
            }
        }
    }, [examinationToUpdate, examinationData.isLoading])

    useEffect(() => {
        return () => {
            setExaminationObj({})
            // setParameters({})
        }
    }, [])

    // if (true) return (
    //     <ModalContainer>
    //         <CloseButton onClick={close} />
    //         <Modal>
    //             <h1>Tu sa práve pracuje.</h1>
    //         </Modal>
    //     </ModalContainer>
    // )

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
                                <Col>{"-"}</Col>
                                <Col>P.</Col>
                                <Col>L.</Col>
                            </TableTitleCol>

                            <TableCol>
                                <Col>V.NATUR</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='vnatur'
                                            type='text'
                                            value={checkParameter(vlastne_okuliare?.vnatur, idx)}
                                            onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            onBlur={(e) => formatParameters(e, vlastne_okuliare?.vnatur, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>SPH</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='sph'
                                            type='text'
                                            value={checkParameter(vlastne_okuliare?.sph, idx)}
                                            onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            onBlur={(e) => formatParameters(e, vlastne_okuliare?.sph, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>CYL</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='cyl'
                                            type='text'
                                            value={checkParameter(vlastne_okuliare?.cyl, idx)}
                                            onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            onBlur={(e) => formatParameters(e, vlastne_okuliare?.cyl, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}

                            </TableCol>
                            <TableCol>
                                <Col>AX</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='ax'
                                            type='text'
                                            value={checkParameter(vlastne_okuliare?.ax, idx)}
                                            onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            onBlur={(e) => formatParameters(e, vlastne_okuliare?.ax, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}

                            </TableCol>
                            <TableCol>
                                <Col>ADD</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='add'
                                            type='text'
                                            value={checkParameter(vlastne_okuliare?.add, idx)}
                                            onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            onBlur={(e) => formatParameters(e, vlastne_okuliare?.add, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}

                            </TableCol>
                            <TableCol>
                                <Col>V.ISUS</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='visus'
                                            type='text'
                                            value={checkParameter(vlastne_okuliare?.visus, idx)}
                                            onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            onBlur={(e) => formatParameters(e, vlastne_okuliare?.visus, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}

                            </TableCol>
                            <TableCol>
                                <Col>V.BINO</Col>
                                <Col>
                                    <input
                                        name='vbino'
                                        type='text'
                                        value={checkParameterValue(vlastne_okuliare?.vbino)}
                                        onChange={e => setVlastne_okuliare(prevValue => ({
                                            ...prevValue,
                                            [e.target.name]: e.target.value
                                        }))}
                                        onBlur={(e) => setVlastne_okuliare(prevValue => ({
                                            ...prevValue,
                                            [e.target.name]: Number(e.target.value)
                                        }))}
                                    />
                                </Col>
                            </TableCol>
                        </Table>

                        <h4>Objektivná refrakcia</h4>

                        <ObjectiveRefTable>
                            <TableTitleCol>
                                <Col>{"-"}</Col>
                                <Col>P.</Col>
                                <Col>L.</Col>
                            </TableTitleCol>

                            <TableCol>
                                <Col>SPH</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='sph'
                                            type='text'
                                            value={checkParameter(objektivna_refrakcia?.sph, idx)}
                                            onChange={e => handleParameterChange(e, idx, objektivna_refrakcia, setObjektivna_refrakcia)}
                                            onBlur={(e) => formatParameters(e, objektivna_refrakcia?.sph, objektivna_refrakcia, setObjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>CYL</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='cyl'
                                            type='text'
                                            value={checkParameter(objektivna_refrakcia?.cyl, idx)}
                                            onChange={e => handleParameterChange(e, idx, objektivna_refrakcia, setObjektivna_refrakcia)}
                                            onBlur={(e) => formatParameters(e, objektivna_refrakcia?.cyl, objektivna_refrakcia, setObjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>AX</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='ax'
                                            type='text'
                                            value={checkParameter(objektivna_refrakcia?.ax, idx)}
                                            onChange={e => handleParameterChange(e, idx, objektivna_refrakcia, setObjektivna_refrakcia)}
                                            onBlur={(e) => formatParameters(e, objektivna_refrakcia?.ax, objektivna_refrakcia, setObjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>SE</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='se'
                                            type='text'
                                            value={checkParameter(objektivna_refrakcia?.se, idx)}
                                            onChange={e => handleParameterChange(e, idx, objektivna_refrakcia, setObjektivna_refrakcia)}
                                            onBlur={(e) => formatParameters(e, objektivna_refrakcia?.se, objektivna_refrakcia, setObjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                        </ObjectiveRefTable>

                        <h4>Subjektivná refrakcia</h4>

                        <SubjectiveRefTable>
                            <TableTitleCol>
                                <Col>{"-"}</Col>
                                <Col>P.</Col>
                                <Col>L.</Col>
                            </TableTitleCol>

                            <TableCol>
                                <Col>SPH</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='sph'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakcia?.sph, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.sph, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>CYL</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='cyl'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakcia?.cyl, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.cyl, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>AX</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='ax'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakcia?.ax, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.ax, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>ADD</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='add'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakcia?.add, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.add, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>V.ISUS</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='visus'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakcia?.visus, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.visus, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>V.BINO</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='vbino'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakcia?.vbino, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.vbino, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>PRIZMA</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='prizma'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakcia?.prizma, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.prizma, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>BASIS</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='basis'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakcia?.basis, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.basis, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>OS</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name='os'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakcia?.os, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.os, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>

                        </SubjectiveRefTable>

                        <InputContainer>
                            <CustomTextarea
                                label='Doporučenia'
                                name="doporucenia"
                                value={examinationObj?.doporucenia || ""}
                                rows="5"
                                handleChange={handleChange}
                            />
                        </InputContainer>
                        {/* doporucenia */}
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