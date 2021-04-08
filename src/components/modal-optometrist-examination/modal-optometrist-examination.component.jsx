import React, { useState, useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'

import lodash from 'lodash'
import examSchema from '../../context/examination/exam.json'
import {removeEmpty} from '../../utils/object.utils'

import { useExaminationContext } from '../../context/examination/examination.context'
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
    // TableBlock,
    ObjectiveRefTable,
    SubjectiveRefTable,
    ExamTable,
    RefractTable,
    KerathTable,
    SubjectiveRefATable,
    ContactLensesTable,
    ContactLensesTypeTable
} from './modal-optometrist-examination.styles'

const OptometristExaminationModal = ({ close, refetch, userId, examinationToUpdate }) => {
    console.log(examinationToUpdate)

    const exam = useFetchById('api/admin/exams', examinationToUpdate, !examinationToUpdate)
    const isUpdating = examinationToUpdate ? true : false

    const {
        createExamination,
        updateExamination
    } = useExaminationContext()

    const [examObj, setExamObj] = useState(examSchema)
    
    const handleChange = (e) => {
        const {value, name} = e.target

        console.log(name)
        console.log(value)

        const obj = lodash.set(examObj, name, value)

        setExamObj({
            ...obj
        })
    }

    const handleSubmit = () => {
        const formatedObj = {
            ...removeEmpty(examObj),
            refrakcia: {
                ...removeEmpty(examObj.refrakcia)
            },
            anamneza: {
                ...removeEmpty(examObj.anamneza)
            },
            kontrola: {
                ...removeEmpty(examObj.kontrola)
            }
        }

        console.log("formatedObj")
        console.log("formatedObj")
        console.log(formatedObj)

        if(examObj.type === 1) {
            delete formatedObj["anamneza"]
            delete formatedObj["kontrola"]
        }
        if(examObj.type === 2) {
            delete formatedObj["refrakcia"]
            delete formatedObj["kontrola"]
        }
        if(examObj.type === 3) {
            delete formatedObj["refrakcia"]
            delete formatedObj["anamneza"]
        }

        if(isUpdating) {
            delete formatedObj['date']
            delete formatedObj['doneTo']
            delete formatedObj['doneBy']
            delete formatedObj['__v']
            delete formatedObj['_id']

            updateExamination(formatedObj, examinationToUpdate, () => {
                refetch()
            })
        } else {
            createExamination(formatedObj, () => {
                refetch()
            })
        }

    }

    useEffect(() => {
        if(!userId) return
        handleChange({
            target: {
                value: userId,
                name: "doneTo"
            }
        })
    }, [userId])

    useEffect(() => {
        if(exam.isLoading) return
        if(!exam.response) return
        console.log("RETRIEVED EXAM")
        console.log(exam.response.exam)
        setExamObj(prevValue => ({
            ...prevValue,
            ...exam.response.exam,
            refrakcia: {
                ...prevValue.refrakcia,
                ...exam.response.exam.refrakcia,
            },
            anamneza: {
                ...prevValue.anamneza,
                ...exam.response.exam.anamneza,
            },
            kontrola: {
                ...prevValue.kontrola,
                ...exam.response.exam.kontrola,
            }
        }))

    }, [exam.isLoading])

    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h3>Vyšetrenie</h3>
                {!examinationToUpdate && <Container>
                    <h4>Typ prehliadky</h4>
                    <div>
                        {examTypes.map((type, idx) => (
                            <ExamTypeCheckbox
                                key={idx}
                                label={type.name}
                                isActive={examObj.type === type.value}
                                handleClick={() => handleChange({
                                    target: {
                                        name: "type",
                                        value: type.value
                                    }
                                })}
                            />
                        ))}
                    </div>
                </Container>}

                {examObj.type === 1 && (
                    <Container>
                        <h4>Refrakcia</h4>
                        <TwoColContainer>
                            <div>
                                <h5>Nosi od:</h5>
                                <CustomInput
                                    label={''}
                                    value={examObj.refrakcia.nosi_od}
                                    // type="date"
                                    type="month"
                                    name="refrakcia.nosi_od"
                                    handleChange={handleChange}
                                />
                            </div>
                            <div>
                                <h5>Posledná korekcia:</h5>
                                <CustomInput
                                    label={''}
                                    value={examObj.refrakcia.posledna_korekcia}
                                    // type="date"
                                    type="month"
                                    name="refrakcia.posledna_korekcia"
                                    handleChange={handleChange}
                                />
                            </div>
                        </TwoColContainer>
                        <TwoColContainer>
                            <InputContainer>
                                <CustomInput
                                    label={'Typ, spôsob'}
                                    value={examObj.refrakcia.typ_sposob}
                                    type="text"
                                    name="refrakcia.typ_sposob"
                                    handleChange={handleChange}
                                />
                            </InputContainer>
                            <InputContainer>
                                <IsSuitableCheckbox
                                    label={"Vyhovuje"}
                                    isActive={examObj?.refrakcia.vyhovuje}
                                    handleClick={() => handleChange({
                                        target: {
                                            name: "refrakcia.vyhovuje",
                                            value: examObj?.vyhovuje ? !examObj.vyhovuje : true
                                        }
                                    })}
                                />
                            </InputContainer>
                        </TwoColContainer>
                        <InputContainer>
                            <CustomTextarea
                                label='Anamnéza'
                                name="refrakcia.anamneza"
                                value={examObj?.refrakcia.anamneza}
                                rows="5"
                                handleChange={handleChange}
                            />
                        </InputContainer>

                        <div className='checkboxes'>
                            <InputContainer>
                                <IsSuitableCheckbox
                                    label={"Šofer"}
                                    isActive={examObj.vodic}
                                    handleClick={() => handleChange({
                                        target: {
                                            name: "vodic",
                                            value: examObj.vodic ? false : true
                                        }
                                    })}
                                />
                            </InputContainer>
                            <InputContainer>
                                <IsSuitableCheckbox
                                    label={"PC"}
                                    isActive={examObj.pc}
                                    handleClick={() => handleChange({
                                        target: {
                                            name: "pc",
                                            value: examObj.pc ? false : true
                                        }
                                    })}
                                />
                            </InputContainer>
                        </div>
                        
                        <InputContainer>
                            <CustomTextarea
                                label='Doplňujúce informácie'
                                name="refrakcia.dopl_info"
                                value={examObj?.refrakcia.dopl_info || ""}
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
                                            name={`refrakcia.vlastne_okuliare.vnatur[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.vlastne_okuliare.vnatur, idx)}
                                            onChange={handleChange}
                                            // onBlur={(e) => formatParameters(e, vlastne_okuliare?.vnatur, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>SPH</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`refrakcia.vlastne_okuliare.sph[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.vlastne_okuliare?.sph, idx)}
                                            onChange={handleChange}
                                            // onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            // onBlur={(e) => formatParameters(e, vlastne_okuliare?.sph, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>CYL</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`refrakcia.vlastne_okuliare.cyl[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.vlastne_okuliare?.cyl, idx)}
                                            // onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            onChange={handleChange}
                                            
                                            // onBlur={(e) => formatParameters(e, vlastne_okuliare?.cyl, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}

                            </TableCol>
                            <TableCol>
                                <Col>AX</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`refrakcia.vlastne_okuliare.ax[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.vlastne_okuliare?.ax, idx)}
                                            // onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, vlastne_okuliare?.ax, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}

                            </TableCol>
                            <TableCol>
                                <Col>ADICIA</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`refrakcia.vlastne_okuliare.add[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.vlastne_okuliare?.add, idx)}
                                            // onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, vlastne_okuliare?.add, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}

                            </TableCol>
                            <TableCol>
                                <Col>V.ISUS</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`refrakcia.vlastne_okuliare.visus[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.vlastne_okuliare?.visus, idx)}
                                            // onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, vlastne_okuliare?.visus, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}

                            </TableCol>
                            <TableCol>
                                <Col>V.BINO</Col>
                                <Col>
                                    <input
                                        name='refrakcia.vlastne_okuliare.vbino'
                                        type='text'
                                        value={checkParameterValue(examObj.refrakcia.vlastne_okuliare?.vbino)}
                                        // onChange={e => setVlastne_okuliare(prevValue => ({
                                        //     ...prevValue,
                                        //     [e.target.name]: e.target.value
                                        // }))}
                                        onChange={handleChange}

                                        // onBlur={(e) => formatParameters(e, vlastne_okuliare?.vbino, vlastne_okuliare, setVlastne_okuliare)}
                                        // onBlur={(e) => setVlastne_okuliare(prevValue => ({
                                        //     ...prevValue,
                                        //     [e.target.name]: Number(e.target.value)
                                        // }))}
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
                                            name={`refrakcia.objektivna_refrakcia.sph[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.objektivna_refrakcia.sph, idx)}
                                            // onChange={e => handleParameterChange(e, idx, objektivna_refrakcia, setObjektivna_refrakcia)}
                                            onChange={handleChange}
                                            // onBlur={(e) => formatParameters(e, objektivna_refrakcia?.sph, objektivna_refrakcia, setObjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>CYL</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`refrakcia.objektivna_refrakcia.cyl[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.objektivna_refrakcia?.cyl, idx)}
                                            // onChange={e => handleParameterChange(e, idx, objektivna_refrakcia, setObjektivna_refrakcia)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, objektivna_refrakcia?.cyl, objektivna_refrakcia, setObjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>AX</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`refrakcia.objektivna_refrakcia.ax[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.objektivna_refrakcia?.ax, idx)}
                                            // onChange={e => handleParameterChange(e, idx, objektivna_refrakcia, setObjektivna_refrakcia)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, objektivna_refrakcia?.ax, objektivna_refrakcia, setObjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>SE</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`refrakcia.objektivna_refrakcia.se[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.objektivna_refrakcia?.se, idx)}
                                            // onChange={e => handleParameterChange(e, idx, objektivna_refrakcia, setObjektivna_refrakcia)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, objektivna_refrakcia?.se, objektivna_refrakcia, setObjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                        </ObjectiveRefTable>

                        <h4>Subjektivná refrakcia</h4>

                        <SubjectiveRefTable>
                            <TableTitleCol>
                                <Col>{"-"}</Col>
                                <Col isActive={examObj.refrakcia.subjektivna_refrakcia?.domoko === "1"} clickable onClick={() => handleChange({
                                    target: {
                                        name: "refrakcia.subjektivna_refrakcia.domoko",
                                        value: examObj.refrakcia.subjektivna_refrakcia?.domoko === "1" ? "0" : "1"
                                    }
                                })}>P.</Col>
                                <Col isActive={examObj.refrakcia.subjektivna_refrakcia?.domoko === "2"} clickable onClick={() => handleChange({
                                    target: {
                                        name: "refrakcia.subjektivna_refrakcia.domoko",
                                        value: examObj.refrakcia.subjektivna_refrakcia?.domoko === "2" ? "0" : "2"
                                    }
                                })}>L.</Col>
                            </TableTitleCol>

                            <TableCol>
                                <Col>SPH</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`refrakcia.subjektivna_refrakcia.sph[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.subjektivna_refrakcia?.sph, idx)}
                                            // onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.sph, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>CYL</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`refrakcia.subjektivna_refrakcia.cyl[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.subjektivna_refrakcia?.cyl, idx)}
                                            // onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.cyl, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>AX</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`refrakcia.subjektivna_refrakcia.ax[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.subjektivna_refrakcia?.ax, idx)}
                                            // onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.ax, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>ADICIA</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`refrakcia.subjektivna_refrakcia.add[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.subjektivna_refrakcia?.add, idx)}
                                            // onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onChange={handleChange}
                                            // 
                                            // onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.add, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>V.ISUS</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`refrakcia.subjektivna_refrakcia.visus[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.subjektivna_refrakcia?.visus, idx)}
                                            // onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.visus, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>V.BINO</Col>
                                <Col>
                                    <input
                                        name='refrakcia.subjektivna_refrakcia.vbino'
                                        type='text'
                                        value={checkParameterValue(examObj.refrakcia.subjektivna_refrakcia?.vbino)}
                                        // onChange={e => setSubjektivna_refrakcia(prevValue => ({
                                        //     ...prevValue,
                                        //     [e.target.name]: e.target.value
                                        // }))}
                                        onChange={handleChange}

                                        // onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.vbino, subjektivna_refrakcia, setSubjektivna_refrakcia)}

                                        // onBlur={(e) => setSubjektivna_refrakcia(prevValue => ({
                                        //     ...prevValue,
                                        //     [e.target.name]: Number(e.target.value)
                                        // }))}
                                    />
                                </Col>
                            </TableCol>
                            <TableCol>
                                <Col>PRIZMA</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`refrakcia.subjektivna_refrakcia.prizma[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.subjektivna_refrakcia?.prizma, idx)}
                                            // onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.prizma, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>BÁZA</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`refrakcia.subjektivna_refrakcia.basis[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.subjektivna_refrakcia?.basis, idx)}
                                            // onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.basis, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>OS</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`refrakcia.subjektivna_refrakcia.os[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.refrakcia.subjektivna_refrakcia?.os, idx)}
                                            // onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.os, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>V.BL</Col>
                                <Col>
                                    <input
                                        name={`refrakcia.subjektivna_refrakcia.vbl`}
                                        type='text'
                                        value={checkParameterValue(examObj.refrakcia.subjektivna_refrakcia?.vbl)}
                                        // onChange={e => setSubjektivna_refrakcia(prevValue => ({
                                        //     ...prevValue,
                                        //     [e.target.name]: e.target.value
                                        // }))}
                                        onChange={handleChange}

                                        // onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.vbino, subjektivna_refrakcia, setSubjektivna_refrakcia)}

                                        // onBlur={(e) => setSubjektivna_refrakcia(prevValue => ({
                                        //     ...prevValue,
                                        //     [e.target.name]: Number(e.target.value)
                                        // }))}
                                    />
                                </Col>
                            </TableCol>
                        </SubjectiveRefTable>
                    </Container>
                )}

                {examObj.type === 2 && (
                    <Container>
                        <h4>Anamnéza</h4>

                        <TwoColContainer>
                            <div>
                                <h5>Nosi od:</h5>
                                <CustomInput
                                    label={''}
                                    value={examObj.anamneza.nosi_od}
                                    // type="date"
                                    type="month"
                                    name="anamneza.nosi_od"
                                    handleChange={handleChange}
                                />
                            </div>
                            <div>
                                <h5>Posledná korekcia:</h5>
                                <CustomInput
                                    label={''}
                                    value={examObj.anamneza.posledna_korekcia}
                                    // type="date"
                                    type="month"
                                    name="anamneza.posledna_korekcia"
                                    handleChange={handleChange}
                                />
                            </div>
                        </TwoColContainer>
                        <TwoColContainer>
                            <InputContainer>
                                <CustomInput
                                    label={'Typ, spôsob'}
                                    value={examObj.anamneza.typ_sposob}
                                    type="text"
                                    name="anamneza.typ_sposob"
                                    handleChange={handleChange}
                                />
                            </InputContainer>
                            <InputContainer>
                                <IsSuitableCheckbox
                                    label={"Vyhovuje"}
                                    isActive={examObj.anamneza.vyhovuje}
                                    handleClick={() => handleChange({
                                        target: {
                                            name: "anamneza.vyhovuje",
                                            value: examObj.anamneza.vyhovuje ? !examObj.anamneza.vyhovuje : true
                                        }
                                    })}
                                />
                            </InputContainer>
                        </TwoColContainer>
                        <InputContainer>
                            <CustomInput
                                label='Stav a povolanie'
                                name="anamneza.stav_a_povolanie"
                                value={examObj.anamneza.stav_a_povolanie}
                                handleChange={handleChange}
                            />
                        </InputContainer>


                        <div className='checkboxes'>
                            <InputContainer>
                                <IsSuitableCheckbox
                                    label={"Šofer"}
                                    isActive={examObj.vodic}
                                    handleClick={() => handleChange({
                                        target: {
                                            name: "vodic",
                                            value: examObj.vodic ? false : true
                                        }
                                    })}
                                />
                            </InputContainer>
                            <InputContainer>
                                <IsSuitableCheckbox
                                    label={"PC"}
                                    isActive={examObj.pc}
                                    handleClick={() => handleChange({
                                        target: {
                                            name: "pc",
                                            value: examObj.pc ? false : true
                                        }
                                    })}
                                />
                            </InputContainer>
                        </div>

                        <InputContainer>
                            <CustomTextarea
                                label='Doplňujúce informácie'
                                name="anamneza.dopl_info"
                                value={examObj.anamneza.dopl_info}
                                rows="3"
                                handleChange={handleChange}
                            />
                        </InputContainer>
                        <InputContainer>
                            <CustomInput
                                label='Obj. nález'
                                name="anamneza.obj_nalez"
                                value={examObj.anamneza.obj_nalez}
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
                                            name={`anamneza.vlastne_okuliare.vnatur[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.vlastne_okuliare.vnatur, idx)}
                                            onChange={handleChange}
                                            // onBlur={(e) => formatParameters(e, vlastne_okuliare?.vnatur, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>SPH</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.vlastne_okuliare.sph[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.vlastne_okuliare?.sph, idx)}
                                            onChange={handleChange}
                                            // onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            // onBlur={(e) => formatParameters(e, vlastne_okuliare?.sph, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>CYL</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.vlastne_okuliare.cyl[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.vlastne_okuliare?.cyl, idx)}
                                            // onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            onChange={handleChange}
                                            
                                            // onBlur={(e) => formatParameters(e, vlastne_okuliare?.cyl, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}

                            </TableCol>
                            <TableCol>
                                <Col>AX</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.vlastne_okuliare.ax[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.vlastne_okuliare?.ax, idx)}
                                            // onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, vlastne_okuliare?.ax, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}

                            </TableCol>
                            <TableCol>
                                <Col>ADICIA</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.vlastne_okuliare.add[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.vlastne_okuliare?.add, idx)}
                                            // onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, vlastne_okuliare?.add, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}

                            </TableCol>
                            <TableCol>
                                <Col>V.ISUS</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.vlastne_okuliare.visus[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.vlastne_okuliare?.visus, idx)}
                                            // onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, vlastne_okuliare?.visus, vlastne_okuliare, setVlastne_okuliare)}
                                        />
                                    </Col>
                                ))}

                            </TableCol>
                            <TableCol>
                                <Col>V.BINO</Col>
                                <Col>
                                    <input
                                        name='anamneza.vlastne_okuliare.vbino'
                                        type='text'
                                        value={checkParameterValue(examObj.anamneza.vlastne_okuliare?.vbino)}
                                        // onChange={e => setVlastne_okuliare(prevValue => ({
                                        //     ...prevValue,
                                        //     [e.target.name]: e.target.value
                                        // }))}
                                        onChange={handleChange}

                                        // onBlur={(e) => formatParameters(e, vlastne_okuliare?.vbino, vlastne_okuliare, setVlastne_okuliare)}
                                        // onBlur={(e) => setVlastne_okuliare(prevValue => ({
                                        //     ...prevValue,
                                        //     [e.target.name]: Number(e.target.value)
                                        // }))}
                                    />
                                </Col>
                            </TableCol>
                        </Table>

                        <h4>Refraktometer</h4>

                        <RefractTable>
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
                                            name={`anamneza.refraktometer.sph[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.refraktometer.sph, idx)}
                                            // onChange={e => handleParameterChange(e, idx, refraktometer, setRefraktometer)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, refraktometer?.sph, refraktometer, setRefraktometer)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>CYL</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.refraktometer.cyl[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.refraktometer?.cyl, idx)}
                                            // onChange={e => handleParameterChange(e, idx, refraktometer, setRefraktometer)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, refraktometer?.cyl, refraktometer, setRefraktometer)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>AX</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.refraktometer.ax[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.refraktometer?.ax, idx)}
                                            // onChange={e => handleParameterChange(e, idx, refraktometer, setRefraktometer)}
                                        onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, refraktometer?.ax, refraktometer, setRefraktometer)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>SE</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.refraktometer.se[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.refraktometer?.se, idx)}
                                            onChange={handleChange}
    
                                            // onChange={e => handleParameterChange(e, idx, refraktometer, setRefraktometer)}
                                            // onBlur={(e) => formatParameters(e, refraktometer?.se, refraktometer, setRefraktometer)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>

                        </RefractTable>

                        <h4>Keratometer</h4>

                        <KerathTable>
                            <TableTitleCol>
                                <Col>{"-"}</Col>
                                <Col>P.</Col>
                                <Col>L.</Col>
                            </TableTitleCol>

                            <TableCol>
                                <Col>HOR</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.keratometer.hor[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.keratometer?.hor, idx)}
                                            // onChange={e => handleParameterChange(e, idx, keratometer, setKeratometer)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, keratometer?.hor, keratometer, setKeratometer)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>VER</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.keratometer.ver[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.keratometer?.ver, idx)}
                                            // onChange={e => handleParameterChange(e, idx, keratometer, setKeratometer)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, keratometer?.ver, keratometer, setKeratometer)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>AVE</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.keratometer.ave[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.keratometer?.ave, idx)}
                                            // onChange={e => handleParameterChange(e, idx, keratometer, setKeratometer)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, keratometer?.ave, keratometer, setKeratometer)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>

                        </KerathTable>

                        <h4>Subjektivná refrakcia</h4>

                        <SubjectiveRefATable>
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
                                            name={`anamneza.subjektivna_refrakcia.sph[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.subjektivna_refrakcia?.sph, idx)}
                                            // onChange={e => handleParameterChange(e, idx, subjektivna_refrakciaA, setSubjektivna_refrakciaA)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, subjektivna_refrakciaA?.sph, subjektivna_refrakciaA, setSubjektivna_refrakciaA)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>CYL</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.subjektivna_refrakcia.cyl[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.subjektivna_refrakcia?.cyl, idx)}
                                            // onChange={e => handleParameterChange(e, idx, subjektivna_refrakciaA, setSubjektivna_refrakciaA)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, subjektivna_refrakciaA?.cyl, subjektivna_refrakciaA, setSubjektivna_refrakciaA)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>AX</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.subjektivna_refrakcia.ax[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.subjektivna_refrakcia?.ax, idx)}
                                            // onChange={e => handleParameterChange(e, idx, subjektivna_refrakciaA, setSubjektivna_refrakciaA)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, subjektivna_refrakciaA?.ax, subjektivna_refrakciaA, setSubjektivna_refrakciaA)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>ADICIA</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.subjektivna_refrakcia.add[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.subjektivna_refrakcia?.add, idx)}
                                            // onChange={e => handleParameterChange(e, idx, subjektivna_refrakciaA, setSubjektivna_refrakciaA)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, subjektivna_refrakciaA?.add, subjektivna_refrakciaA, setSubjektivna_refrakciaA)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>VISUS</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.subjektivna_refrakcia.visus[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.subjektivna_refrakcia?.visus, idx)}
                                            // onChange={e => handleParameterChange(e, idx, subjektivna_refrakciaA, setSubjektivna_refrakciaA)}
                                            onChange={handleChange}

                                            // onBlur={(e) => formatParameters(e, subjektivna_refrakciaA?.visus, subjektivna_refrakciaA, setSubjektivna_refrakciaA)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>BINO</Col>
                                <Col>
                                    <input
                                        name={`anamneza.subjektivna_refrakcia.bino`}
                                        type='text'
                                        value={checkParameterValue(examObj.anamneza.subjektivna_refrakcia?.bino)}
                                        // onChange={e => setSubjektivna_refrakciaA(prevValue => ({
                                        //     ...prevValue,
                                        //     [e.target.name]: e.target.value
                                        // }))}
                                        // onBlur={(e) => setSubjektivna_refrakciaA(prevValue => ({
                                        onChange={handleChange}

                                        //     ...prevValue,
                                        //     [e.target.name]: Number(e.target.value)
                                        // }))}
                                    />
                                </Col>
                            </TableCol>

                        </SubjectiveRefATable>

                        <h4>Kontaktné šošovky</h4>

                        <ContactLensesTable>
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
                                            name={`anamneza.kontaktne_sosovky.sph[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.kontaktne_sosovky?.sph, idx)}
                                            // onChange={e => handleParameterChange(e, idx, kontaktne_sosovky, setKontaktne_sosovky)}
                                            // onBlur={(e) => formatParameters(e, kontaktne_sosovky?.sph, kontaktne_sosovky, setKontaktne_sosovky)}
                                        onChange={handleChange}

                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>CYL</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.kontaktne_sosovky.cyl[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.kontaktne_sosovky?.cyl, idx)}
                                            // onChange={e => handleParameterChange(e, idx, kontaktne_sosovky, setKontaktne_sosovky)}
                                            // onBlur={(e) => formatParameters(e, kontaktne_sosovky?.cyl, kontaktne_sosovky, setKontaktne_sosovky)}
                                        onChange={handleChange}

                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>AX</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.kontaktne_sosovky.ax[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.kontaktne_sosovky?.ax, idx)}
                                            onChange={handleChange}
                                            // onChange={e => handleParameterChange(e, idx, kontaktne_sosovky, setKontaktne_sosovky)}
                                            // onBlur={(e) => formatParameters(e, kontaktne_sosovky?.ax, kontaktne_sosovky, setKontaktne_sosovky)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>ADICIA</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.kontaktne_sosovky.add[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.kontaktne_sosovky?.add, idx)}
                                            onChange={handleChange}
                                            // onChange={e => handleParameterChange(e, idx, kontaktne_sosovky, setKontaktne_sosovky)}
                                            // onBlur={(e) => formatParameters(e, kontaktne_sosovky?.add, kontaktne_sosovky, setKontaktne_sosovky)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>VISD</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.kontaktne_sosovky.visd[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.kontaktne_sosovky?.visd, idx)}
                                            onChange={handleChange}
                                            // onChange={e => handleParameterChange(e, idx, kontaktne_sosovky, setKontaktne_sosovky)}
                                            // onBlur={(e) => formatParameters(e, kontaktne_sosovky?.visd, kontaktne_sosovky, setKontaktne_sosovky)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>BINO1</Col>
                                {[...Array(1)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.kontaktne_sosovky.bino1[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.kontaktne_sosovky?.bino1, idx)}
                                            onChange={handleChange}
                                            // onChange={e => handleParameterChange(e, idx, kontaktne_sosovky, setKontaktne_sosovky)}
                                            // onBlur={(e) => formatParameters(e, kontaktne_sosovky?.bino1, kontaktne_sosovky, setKontaktne_sosovky)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>VISB</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.kontaktne_sosovky.visb[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.kontaktne_sosovky?.visb, idx)}
                                            onChange={handleChange}
                                            // onChange={e => handleParameterChange(e, idx, kontaktne_sosovky, setKontaktne_sosovky)}
                                            // onBlur={(e) => formatParameters(e, kontaktne_sosovky?.visb, kontaktne_sosovky, setKontaktne_sosovky)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>BINO2</Col>
                                {[...Array(1)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.kontaktne_sosovky.bino2[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.kontaktne_sosovky?.bino2, idx)}
                                            onChange={handleChange}
                                            // onChange={e => handleParameterChange(e, idx, kontaktne_sosovky, setKontaktne_sosovky)}
                                            // onBlur={(e) => formatParameters(e, kontaktne_sosovky?.bino2, kontaktne_sosovky, setKontaktne_sosovky)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                        </ContactLensesTable>


                        <h4>Typ Kontaktných šošoviek</h4>

                        <ContactLensesTypeTable>
                            <TableTitleCol>
                                <Col>{"-"}</Col>
                                <Col>P.</Col>
                                <Col>L.</Col>
                            </TableTitleCol>

                            <TableCol>
                                <Col>PRVÝ</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`anamneza.typ_kontaktnych_sosoviek.prvy[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.typ_kontaktnych_sosoviek?.prvy, idx)}
                                            onChange={handleChange}

                                            // onChange={e => handleParameterChange(e, idx, typ_kontaktnych_sosoviek, setTyp_kontaktnych_sosoviek)}
                                            // onBlur={(e) => formatStringParameters(e, typ_kontaktnych_sosoviek?.prvy, typ_kontaktnych_sosoviek, setTyp_kontaktnych_sosoviek)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>DRUHÝ</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            // name='druhy'
                                            name={`anamneza.typ_kontaktnych_sosoviek.druhy[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.anamneza.typ_kontaktnych_sosoviek?.druhy, idx)}
                                            // onChange={e => handleParameterChange(e, idx, typ_kontaktnych_sosoviek, setTyp_kontaktnych_sosoviek)}
                                            onChange={handleChange}
                                            // onBlur={(e) => formatStringParameters(e, typ_kontaktnych_sosoviek?.druhy, typ_kontaktnych_sosoviek, setTyp_kontaktnych_sosoviek)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>L.KONTROLA</Col>
                                <Col>
                                    <input
                                        // name='lkontrola'
                                        name={`anamneza.typ_kontaktnych_sosoviek.lkontrola`}
                                        type='text'
                                        value={checkParameterValue(examObj.anamneza.typ_kontaktnych_sosoviek?.lkontrola)}
                                        onChange={handleChange}
                                        // onChange={e => setTyp_kontaktnych_sosoviek(prevValue => ({
                                        //     ...prevValue,
                                        //     [e.target.name]: e.target.value
                                        // }))}
                                    // onBlur={(e) => setTyp_kontaktnych_sosoviek(prevValue => ({
                                    //     ...prevValue,
                                    //     [e.target.name]: Number(e.target.value)
                                    // }))}
                                    />
                                </Col>
                            </TableCol>
                            <TableCol>
                                <Col>DOP.ROZTOK</Col>
                                <Col>
                                    <input
                                        // name='dop_roztok'
                                        name={`anamneza.typ_kontaktnych_sosoviek.dop_roztok`}
                                        type='text'
                                        value={checkParameterValue(examObj.anamneza.typ_kontaktnych_sosoviek?.dop_roztok)}
                                        onChange={handleChange}
                                        // onChange={e => setTyp_kontaktnych_sosoviek(prevValue => ({
                                        //     ...prevValue,
                                        //     [e.target.name]: e.target.value
                                        // }))}
                                    // onBlur={(e) => setTyp_kontaktnych_sosoviek(prevValue => ({
                                    //     ...prevValue,
                                    //     [e.target.name]: Number(e.target.value)
                                    // }))}
                                    />
                                </Col>
                            </TableCol>
                        </ContactLensesTypeTable>
                    </Container>
                )}

                {examObj.type === 3 && (
                    <Container>
                        <h4>Kontrola</h4>
                        <InputContainer>
                            <CustomInput
                                label={'Typ kontaktných šošoviek'}
                                value={examObj.kontrola.typ_kontaktnych_sosoviek}
                                type="text"
                                name="kontrola.typ_kontaktnych_sosoviek"
                                handleChange={handleChange}
                            />
                        </InputContainer>

                        <ExamTable>
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
                                            name={`kontrola.tabulka.sph[${idx}]`}
                                            type='text'
                                            value={checkParameter(examObj.kontrola.tabulka?.sph, idx)}
                                        onChange={handleChange}

                                            // onChange={e => handleParameterChange(e, idx, tabulka, setTabulka)}
                                            // onBlur={(e) => formatParameters(e, tabulka?.sph, tabulka, setTabulka)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>CYL</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            // name='cyl'
                                            name={`kontrola.tabulka.cyl[${idx}]`}

                                            type='text'
                                            value={checkParameter(examObj.kontrola.tabulka?.cyl, idx)}
                                            // onChange={e => handleParameterChange(e, idx, tabulka, setTabulka)}
                                            onChange={handleChange}
                                            // onBlur={(e) => formatParameters(e, tabulka?.cyl, tabulka, setTabulka)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>AX</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`kontrola.tabulka.ax[${idx}]`}
                                            // name='ax'
                                            type='text'
                                            value={checkParameter(examObj.kontrola.tabulka?.ax, idx)}
                                            onChange={handleChange}
                                            // onChange={e => handleParameterChange(e, idx, tabulka, setTabulka)}
                                            // onBlur={(e) => formatParameters(e, tabulka?.ax, tabulka, setTabulka)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>ADD</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`kontrola.tabulka.add[${idx}]`}
                                            // name='add'
                                            type='text'
                                            value={checkParameter(examObj.kontrola.tabulka?.add, idx)}
                                            onChange={handleChange}
                                            // onChange={e => handleParameterChange(e, idx, tabulka, setTabulka)}
                                            // onBlur={(e) => formatParameters(e, tabulka?.add, tabulka, setTabulka)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>VIS</Col>
                                {[...Array(2)].map((value, idx) => (
                                    <Col key={idx}>
                                        <input
                                            name={`kontrola.tabulka.vis[${idx}]`}
                                            // name='vis'
                                            type='text'
                                            value={checkParameter(examObj.kontrola.tabulka?.vis, idx)}
                                            onChange={handleChange}
                                            // onChange={e => handleParameterChange(e, idx, tabulka, setTabulka)}
                                            // onBlur={(e) => formatParameters(e, tabulka?.vis, tabulka, setTabulka)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                        </ExamTable>

                        <InputContainer>
                            <CustomInput
                                label={'Subj.'}
                                value={examObj.kontrola.subj}
                                type="text"
                                name="kontrola.subj"
                                handleChange={handleChange}
                            />
                        </InputContainer>

                        <InputContainer>
                            <CustomInput
                                label={'Obj.'}
                                value={examObj.kontrola.obj}
                                type="text"
                                name="kontrola.obj"
                                handleChange={handleChange}
                            />
                        </InputContainer>

                        <div className='checkboxes'>
                            <InputContainer>
                                <IsSuitableCheckbox
                                    label={"Šofer"}
                                    isActive={examObj.vodic}
                                    handleClick={() => handleChange({
                                        target: {
                                            name: "vodic",
                                            value: examObj.vodic ? false : true
                                        }
                                    })}
                                />
                            </InputContainer>
                            <InputContainer>
                                <IsSuitableCheckbox
                                    label={"PC"}
                                    isActive={examObj.pc}
                                    handleClick={() => handleChange({
                                        target: {
                                            name: "pc",
                                            value: examObj.pc ? false : true
                                        }
                                    })}
                                />
                            </InputContainer>
                        </div>
                    </Container>
                )}

                <InputContainer>
                    <CustomTextarea
                        label='Doporučenia'
                        name="doporucenia"
                        value={examObj.doporucenia}
                        rows="5"
                        handleChange={e => handleChange(e)}
                    />
                </InputContainer>
                {/* doporucenia */}

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
        name: "apl. KŠ",
        value: 2
    },
    {
        name: "Kontrola",
        value: 3
    },
]