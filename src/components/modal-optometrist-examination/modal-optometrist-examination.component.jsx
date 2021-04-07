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
    const examinationData = useFetchById('api/admin/exams', examinationToUpdate, !examinationToUpdate)

    console.log(examinationData)

    const { createExamination, updateExamination } = useContext(ExaminationContext)
    const [examinationObj, setExaminationObj] = useState({})
    const [recomendation, setRecomendation] = useState('')

    const [pc, setPc] = useState(false)
    const [vodic, setVodic] = useState(false)


    //REFRAKCIA
    const [vlastne_okuliare, setVlastne_okuliare] = useState({})
    const [objektivna_refrakcia, setObjektivna_refrakcia] = useState({})
    const [subjektivna_refrakcia, setSubjektivna_refrakcia] = useState({})


    //ANAMNEZA
    const [refraktometer, setRefraktometer] = useState({})
    const [keratometer, setKeratometer] = useState({})
    const [subjektivna_refrakciaA, setSubjektivna_refrakciaA] = useState({})
    const [kontaktne_sosovky, setKontaktne_sosovky] = useState({})
    const [typ_kontaktnych_sosoviek, setTyp_kontaktnych_sosoviek] = useState({})

    //KONTROLA
    const [tabulka, setTabulka] = useState({})

    const [activeExamType, setActiveExamType] = useState(1)

    const handleParameterChange = (e, idx, parameterObj, updateParameter) => {
        const { name, value } = e.target
        let arr = parameterObj[name] || ["1001", "1001"]
        arr[idx] = value === '' ? "1001" : value

        updateParameter({
            ...parameterObj,
            [name]: arr
        })
    }

    const handleDomEye = (num, paramObj, handleChange) => {
        if (paramObj?.domoko === num) {
            handleChange(prevValue => ({
                ...prevValue,
                domoko: 0,
            }))
        } else {
            handleChange(prevValue => ({
                ...prevValue,
                domoko: num,
            }))
        }
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

    const formatStringParameters = (e, newParameters, parameterObj, updateParameter) => {
        if (newParameters) {
            const { name } = e.target
            updateParameter({
                ...parameterObj,
                [name]: newParameters.map(value => value)
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let examObj = {
            vodic,
            pc,
            doneTo: userId,
            type: activeExamType,
            ...(recomendation !== "") && { doporucenia: recomendation }
            // parameters: {
            //     ...parameters
            // }
        }

        if (activeExamType === 1) {
            examObj = {
                ...examObj,
                refrakcia: {
                    ...examinationObj,
                    vlastne_okuliare: {
                        ...vlastne_okuliare
                    },
                    objektivna_refrakcia: {
                        ...objektivna_refrakcia
                    },
                    subjektivna_refrakcia: {
                        ...subjektivna_refrakcia
                    }
                },
            }
        }

        if (activeExamType === 2) {
            examObj = {
                ...examObj,
                anamneza: {
                    ...examinationObj,
                    vlastne_okuliare: {
                        ...vlastne_okuliare
                    },
                    refraktometer: {
                        ...refraktometer
                    },
                    keratometer: {
                        ...keratometer
                    },
                    subjektivna_refrakcia: {
                        ...subjektivna_refrakciaA
                    },
                    kontaktne_sosovky: {
                        ...kontaktne_sosovky
                    },
                    typ_kontaktnych_sosoviek: {
                        ...typ_kontaktnych_sosoviek
                    }
                },
            }
        }

        if (activeExamType === 3) {
            examObj = {
                ...examObj,
                kontrola: {
                    ...examinationObj,
                    tabulka: {
                        ...tabulka
                    },
                },
            }
        }

        // console.log("EXAMINATION OBJECT BEFORE SEND")
        // console.log(examObj)

        if (examinationToUpdate) {
            delete examObj["doneTo"]

            updateExamination(examObj, examinationToUpdate)

        } else {
            console.log(examObj)
            createExamination(examObj)
        }
        refetch()
        close()
    }

    useEffect(() => {
        if (!!examinationToUpdate) return
        setExaminationObj({})
        setVlastne_okuliare({})
        setObjektivna_refrakcia({})
        setSubjektivna_refrakcia({})
        setRefraktometer({})
        setKeratometer({})
        setSubjektivna_refrakciaA({})
        setKontaktne_sosovky({})
        setTyp_kontaktnych_sosoviek({})
        setTabulka({})
        setRecomendation('')
    }, [activeExamType])

    useEffect(() => {
        if (!examinationData.isLoading) {
            console.log(examinationData)

            if (examinationData.response) {

                setVodic(examinationData.response.exam.vodic)
                setPc(examinationData.response.exam.pc)

                if (examinationData.response?.exam?.type === 1) {
                    let examObj = examinationData.response?.exam
                    setVlastne_okuliare({
                        ...examObj?.refrakcia?.vlastne_okuliare
                    })
                    setObjektivna_refrakcia({
                        ...examObj?.refrakcia?.objektivna_refrakcia
                    })
                    setSubjektivna_refrakcia({
                        ...examObj?.refrakcia?.subjektivna_refrakcia
                    })

                    setRecomendation(examObj?.doporucenia || "")
                    setActiveExamType(examObj?.type)

                    // delete examObj["refrakcia"]
                    delete examObj.refrakcia["vlastne_okuliare"]
                    delete examObj.refrakcia["objektivna_refrakcia"]
                    delete examObj.refrakcia["subjektivna_refrakcia"]
                    delete examObj["kontrola"]
                    delete examObj["anamneza"]
                    delete examObj["doneTo"]
                    delete examObj["doneBy"]
                    delete examObj["date"]
                    delete examObj["_id"]
                    delete examObj["__v"]
                    delete examObj["doporucenia"]
                    delete examObj["type"]

                    setExaminationObj({
                        ...examObj?.refrakcia
                    })
                }

                if (examinationData.response?.exam?.type === 2) {
                    let examObj = examinationData.response?.exam
                    setActiveExamType(examObj?.type)


                    setVlastne_okuliare({
                        ...examObj?.anamneza?.vlastne_okuliare
                    })
                    setRefraktometer({
                        ...examObj?.anamneza?.refraktometer
                    })
                    setKeratometer({
                        ...examObj?.anamneza?.keratometer
                    })
                    setSubjektivna_refrakciaA({
                        ...examObj?.anamneza?.subjektivna_refrakcia
                    })
                    setKontaktne_sosovky({
                        ...examObj?.anamneza?.kontaktne_sosovky
                    })
                    setTyp_kontaktnych_sosoviek({
                        ...examObj?.anamneza?.typ_kontaktnych_sosoviek
                    })

                    setRecomendation(examObj?.doporucenia || "")

                    delete examObj.anamneza["vlastne_okuliare"]
                    delete examObj.anamneza["refraktometer"]
                    delete examObj.anamneza["keratometer"]
                    delete examObj.anamneza["subjektivna_refrakcia"]
                    delete examObj.anamneza["kontaktne_sosovky"]
                    delete examObj.anamneza["typ_kontaktnych_sosoviek"]
                    delete examObj["kontrola"]
                    delete examObj["refrakcia"]
                    delete examObj["doneTo"]
                    delete examObj["doneBy"]
                    delete examObj["date"]
                    delete examObj["_id"]
                    delete examObj["__v"]
                    delete examObj["doporucenia"]
                    delete examObj["type"]

                    setExaminationObj({
                        ...examObj?.anamneza
                    })


                }

                if (examinationData.response?.exam?.type === 3) {
                    let examObj = examinationData.response?.exam


                    setActiveExamType(examObj?.type)

                    setTabulka({
                        ...examObj?.kontrola?.tabulka
                    })

                    setRecomendation(examObj?.doporucenia || "")

                    delete examObj.kontrola["tabulka"]
                    delete examObj["anamneza"]
                    delete examObj["refrakcia"]
                    delete examObj["doneTo"]
                    delete examObj["doneBy"]
                    delete examObj["date"]
                    delete examObj["_id"]
                    delete examObj["__v"]
                    delete examObj["doporucenia"]
                    delete examObj["type"]

                    setExaminationObj({
                        ...examObj?.kontrola
                    })
                }


                // setParameters(examinationData.response?.exam?.parameters)
                // setExaminationObj(examinationData.response?.exam)
            }
        }
    }, [examinationToUpdate, examinationData.isLoading])

    useEffect(() => {
        return () => {
            setExaminationObj({})
            setExaminationObj({})
            setVlastne_okuliare({})
            setObjektivna_refrakcia({})
            setSubjektivna_refrakcia({})
            setRefraktometer({})
            setKeratometer({})
            setSubjektivna_refrakciaA({})
            setKontaktne_sosovky({})
            setTyp_kontaktnych_sosoviek({})
            setTabulka({})
            setRecomendation('')
        }
    }, [])

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
                                isActive={activeExamType === type.value}
                                handleClick={() => setActiveExamType(type.value)}
                            />
                        ))}
                    </div>
                </Container>}

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

                        <div className='checkboxes'>
                            <InputContainer>
                                <IsSuitableCheckbox
                                    label={"Šofer"}
                                    isActive={vodic}
                                    handleClick={() => setVodic(prevValue => !prevValue)}
                                />
                            </InputContainer>
                            <InputContainer>
                                <IsSuitableCheckbox
                                    label={"PC"}
                                    isActive={pc}
                                    handleClick={() => setPc(prevValue => !prevValue)}
                                />
                            </InputContainer>
                        </div>
                        
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
                                            name='sph'
                                            type='text'
                                            value={checkParameter(vlastne_okuliare?.sph, idx)}
                                            onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
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
                                            name='cyl'
                                            type='text'
                                            value={checkParameter(vlastne_okuliare?.cyl, idx)}
                                            onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
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
                                            name='ax'
                                            type='text'
                                            value={checkParameter(vlastne_okuliare?.ax, idx)}
                                            onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
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
                                            name='add'
                                            type='text'
                                            value={checkParameter(vlastne_okuliare?.add, idx)}
                                            onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
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
                                            name='visus'
                                            type='text'
                                            value={checkParameter(vlastne_okuliare?.visus, idx)}
                                            onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            // onBlur={(e) => formatParameters(e, vlastne_okuliare?.visus, vlastne_okuliare, setVlastne_okuliare)}
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
                                            name='sph'
                                            type='text'
                                            value={checkParameter(objektivna_refrakcia?.sph, idx)}
                                            onChange={e => handleParameterChange(e, idx, objektivna_refrakcia, setObjektivna_refrakcia)}
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
                                            name='cyl'
                                            type='text'
                                            value={checkParameter(objektivna_refrakcia?.cyl, idx)}
                                            onChange={e => handleParameterChange(e, idx, objektivna_refrakcia, setObjektivna_refrakcia)}
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
                                            name='ax'
                                            type='text'
                                            value={checkParameter(objektivna_refrakcia?.ax, idx)}
                                            onChange={e => handleParameterChange(e, idx, objektivna_refrakcia, setObjektivna_refrakcia)}
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
                                            name='se'
                                            type='text'
                                            value={checkParameter(objektivna_refrakcia?.se, idx)}
                                            onChange={e => handleParameterChange(e, idx, objektivna_refrakcia, setObjektivna_refrakcia)}
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
                                <Col isActive={subjektivna_refrakcia?.domoko === 1} clickable onClick={() => handleDomEye(1, subjektivna_refrakcia, setSubjektivna_refrakcia)}>P.</Col>
                                <Col isActive={subjektivna_refrakcia?.domoko === 2} clickable onClick={() => handleDomEye(2, subjektivna_refrakcia, setSubjektivna_refrakcia)}>L.</Col>
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
                                            name='cyl'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakcia?.cyl, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
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
                                            name='ax'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakcia?.ax, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
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
                                            name='add'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakcia?.add, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
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
                                            name='visus'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakcia?.visus, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            // onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.visus, subjektivna_refrakcia, setSubjektivna_refrakcia)}
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
                                        value={checkParameterValue(subjektivna_refrakcia?.vbino)}
                                        onChange={e => setSubjektivna_refrakcia(prevValue => ({
                                            ...prevValue,
                                            [e.target.name]: e.target.value
                                        }))}
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
                                            name='prizma'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakcia?.prizma, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
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
                                            name='basis'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakcia?.basis, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
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
                                            name='os'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakcia?.os, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                            // onBlur={(e) => formatParameters(e, subjektivna_refrakcia?.os, subjektivna_refrakcia, setSubjektivna_refrakcia)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>V.BL</Col>
                                <Col>
                                    <input
                                        name='vbl'
                                        type='text'
                                        value={checkParameterValue(subjektivna_refrakcia?.vbl)}
                                        onChange={e => setSubjektivna_refrakcia(prevValue => ({
                                            ...prevValue,
                                            [e.target.name]: e.target.value
                                        }))}
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

                {activeExamType === 2 && (
                    <Container>
                        <h4>Anamnéza</h4>

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
                            <CustomInput
                                label='Stav a povolanie'
                                name="stav_a_povolanie"
                                value={examinationObj?.stav_a_povolanie || ''}
                                handleChange={handleChange}
                            />
                        </InputContainer>

                        <div className='checkboxes'>
                            <InputContainer>
                                <IsSuitableCheckbox
                                    label={"Šofer"}
                                    isActive={vodic}
                                    handleClick={() => setVodic(prevValue => !prevValue)}
                                />
                            </InputContainer>
                            <InputContainer>
                                <IsSuitableCheckbox
                                    label={"PC"}
                                    isActive={pc}
                                    handleClick={() => setPc(prevValue => !prevValue)}
                                />
                            </InputContainer>
                        </div>

                        <InputContainer>
                            <CustomTextarea
                                label='Doplňujúce informácie'
                                name="dopl_info"
                                value={examinationObj?.dopl_info || ""}
                                rows="3"
                                handleChange={handleChange}
                            />
                        </InputContainer>
                        <InputContainer>
                            <CustomInput
                                label='Obj. nález'
                                name="obj_nalez"
                                value={examinationObj?.obj_nalez || ''}
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
                                            name='sph'
                                            type='text'
                                            value={checkParameter(vlastne_okuliare?.sph, idx)}
                                            onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
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
                                            name='cyl'
                                            type='text'
                                            value={checkParameter(vlastne_okuliare?.cyl, idx)}
                                            onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
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
                                            name='ax'
                                            type='text'
                                            value={checkParameter(vlastne_okuliare?.ax, idx)}
                                            onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
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
                                            name='add'
                                            type='text'
                                            value={checkParameter(vlastne_okuliare?.add, idx)}
                                            onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
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
                                            name='visus'
                                            type='text'
                                            value={checkParameter(vlastne_okuliare?.visus, idx)}
                                            onChange={e => handleParameterChange(e, idx, vlastne_okuliare, setVlastne_okuliare)}
                                            // onBlur={(e) => formatParameters(e, vlastne_okuliare?.visus, vlastne_okuliare, setVlastne_okuliare)}
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
                                            name='sph'
                                            type='text'
                                            value={checkParameter(refraktometer?.sph, idx)}
                                            onChange={e => handleParameterChange(e, idx, refraktometer, setRefraktometer)}
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
                                            name='cyl'
                                            type='text'
                                            value={checkParameter(refraktometer?.cyl, idx)}
                                            onChange={e => handleParameterChange(e, idx, refraktometer, setRefraktometer)}
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
                                            name='ax'
                                            type='text'
                                            value={checkParameter(refraktometer?.ax, idx)}
                                            onChange={e => handleParameterChange(e, idx, refraktometer, setRefraktometer)}
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
                                            name='se'
                                            type='text'
                                            value={checkParameter(refraktometer?.se, idx)}
                                            onChange={e => handleParameterChange(e, idx, refraktometer, setRefraktometer)}
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
                                            name='hor'
                                            type='text'
                                            value={checkParameter(keratometer?.hor, idx)}
                                            onChange={e => handleParameterChange(e, idx, keratometer, setKeratometer)}
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
                                            name='ver'
                                            type='text'
                                            value={checkParameter(keratometer?.ver, idx)}
                                            onChange={e => handleParameterChange(e, idx, keratometer, setKeratometer)}
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
                                            name='ave'
                                            type='text'
                                            value={checkParameter(keratometer?.ave, idx)}
                                            onChange={e => handleParameterChange(e, idx, keratometer, setKeratometer)}
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
                                            name='sph'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakciaA?.sph, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakciaA, setSubjektivna_refrakciaA)}
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
                                            name='cyl'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakciaA?.cyl, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakciaA, setSubjektivna_refrakciaA)}
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
                                            name='ax'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakciaA?.ax, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakciaA, setSubjektivna_refrakciaA)}
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
                                            name='add'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakciaA?.add, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakciaA, setSubjektivna_refrakciaA)}
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
                                            name='visus'
                                            type='text'
                                            value={checkParameter(subjektivna_refrakciaA?.visus, idx)}
                                            onChange={e => handleParameterChange(e, idx, subjektivna_refrakciaA, setSubjektivna_refrakciaA)}
                                            // onBlur={(e) => formatParameters(e, subjektivna_refrakciaA?.visus, subjektivna_refrakciaA, setSubjektivna_refrakciaA)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>BINO</Col>
                                <Col>
                                    <input
                                        name='bino'
                                        type='text'
                                        value={checkParameterValue(subjektivna_refrakciaA?.bino)}
                                        onChange={e => setSubjektivna_refrakciaA(prevValue => ({
                                            ...prevValue,
                                            [e.target.name]: e.target.value
                                        }))}
                                        // onBlur={(e) => setSubjektivna_refrakciaA(prevValue => ({
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
                                            name='sph'
                                            type='text'
                                            value={checkParameter(kontaktne_sosovky?.sph, idx)}
                                            onChange={e => handleParameterChange(e, idx, kontaktne_sosovky, setKontaktne_sosovky)}
                                            // onBlur={(e) => formatParameters(e, kontaktne_sosovky?.sph, kontaktne_sosovky, setKontaktne_sosovky)}
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
                                            value={checkParameter(kontaktne_sosovky?.cyl, idx)}
                                            onChange={e => handleParameterChange(e, idx, kontaktne_sosovky, setKontaktne_sosovky)}
                                            // onBlur={(e) => formatParameters(e, kontaktne_sosovky?.cyl, kontaktne_sosovky, setKontaktne_sosovky)}
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
                                            value={checkParameter(kontaktne_sosovky?.ax, idx)}
                                            onChange={e => handleParameterChange(e, idx, kontaktne_sosovky, setKontaktne_sosovky)}
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
                                            name='add'
                                            type='text'
                                            value={checkParameter(kontaktne_sosovky?.add, idx)}
                                            onChange={e => handleParameterChange(e, idx, kontaktne_sosovky, setKontaktne_sosovky)}
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
                                            name='visd'
                                            type='text'
                                            value={checkParameter(kontaktne_sosovky?.visd, idx)}
                                            onChange={e => handleParameterChange(e, idx, kontaktne_sosovky, setKontaktne_sosovky)}
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
                                            name='bino1'
                                            type='text'
                                            value={checkParameter(kontaktne_sosovky?.bino1, idx)}
                                            onChange={e => handleParameterChange(e, idx, kontaktne_sosovky, setKontaktne_sosovky)}
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
                                            name='visb'
                                            type='text'
                                            value={checkParameter(kontaktne_sosovky?.visb, idx)}
                                            onChange={e => handleParameterChange(e, idx, kontaktne_sosovky, setKontaktne_sosovky)}
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
                                            name='bino2'
                                            type='text'
                                            value={checkParameter(kontaktne_sosovky?.bino2, idx)}
                                            onChange={e => handleParameterChange(e, idx, kontaktne_sosovky, setKontaktne_sosovky)}
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
                                            name='prvy'
                                            type='text'
                                            value={checkParameter(typ_kontaktnych_sosoviek?.prvy, idx)}
                                            onChange={e => handleParameterChange(e, idx, typ_kontaktnych_sosoviek, setTyp_kontaktnych_sosoviek)}
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
                                            name='druhy'
                                            type='text'
                                            value={checkParameter(typ_kontaktnych_sosoviek?.druhy, idx)}
                                            onChange={e => handleParameterChange(e, idx, typ_kontaktnych_sosoviek, setTyp_kontaktnych_sosoviek)}
                                            // onBlur={(e) => formatStringParameters(e, typ_kontaktnych_sosoviek?.druhy, typ_kontaktnych_sosoviek, setTyp_kontaktnych_sosoviek)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                            <TableCol>
                                <Col>L.KONTROLA</Col>
                                <Col>
                                    <input
                                        name='lkontrola'
                                        type='text'
                                        value={typ_kontaktnych_sosoviek?.lkontrola || ""}
                                        onChange={e => setTyp_kontaktnych_sosoviek(prevValue => ({
                                            ...prevValue,
                                            [e.target.name]: e.target.value
                                        }))}
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
                                        name='dop_roztok'
                                        type='text'
                                        value={typ_kontaktnych_sosoviek?.dop_roztok || ""}
                                        onChange={e => setTyp_kontaktnych_sosoviek(prevValue => ({
                                            ...prevValue,
                                            [e.target.name]: e.target.value
                                        }))}
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

                {activeExamType === 3 && (
                    <Container>
                        <h4>Kontrola</h4>
                        <InputContainer>
                            <CustomInput
                                label={'Typ kontaktných šošoviek'}
                                value={examinationObj?.typ_kontaktnych_sosoviek || ""}
                                type="text"
                                name="typ_kontaktnych_sosoviek"
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
                                            name='sph'
                                            type='text'
                                            value={checkParameter(tabulka?.sph, idx)}
                                            onChange={e => handleParameterChange(e, idx, tabulka, setTabulka)}
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
                                            name='cyl'
                                            type='text'
                                            value={checkParameter(tabulka?.cyl, idx)}
                                            onChange={e => handleParameterChange(e, idx, tabulka, setTabulka)}
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
                                            name='ax'
                                            type='text'
                                            value={checkParameter(tabulka?.ax, idx)}
                                            onChange={e => handleParameterChange(e, idx, tabulka, setTabulka)}
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
                                            name='add'
                                            type='text'
                                            value={checkParameter(tabulka?.add, idx)}
                                            onChange={e => handleParameterChange(e, idx, tabulka, setTabulka)}
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
                                            name='vis'
                                            type='text'
                                            value={checkParameter(tabulka?.vis, idx)}
                                            onChange={e => handleParameterChange(e, idx, tabulka, setTabulka)}
                                            // onBlur={(e) => formatParameters(e, tabulka?.vis, tabulka, setTabulka)}
                                        />
                                    </Col>
                                ))}
                            </TableCol>
                        </ExamTable>

                        <InputContainer>
                            <CustomInput
                                label={'Subj.'}
                                value={examinationObj?.subj || ""}
                                type="text"
                                name="subj"
                                handleChange={handleChange}
                            />
                        </InputContainer>

                        <InputContainer>
                            <CustomInput
                                label={'Obj.'}
                                value={examinationObj?.obj || ""}
                                type="text"
                                name="obj"
                                handleChange={handleChange}
                            />
                        </InputContainer>

                        <div className='checkboxes'>
                            <InputContainer>
                                <IsSuitableCheckbox
                                    label={"Šofer"}
                                    isActive={vodic}
                                    handleClick={() => setVodic(prevValue => !prevValue)}
                                />
                            </InputContainer>
                            <InputContainer>
                                <IsSuitableCheckbox
                                    label={"PC"}
                                    isActive={pc}
                                    handleClick={() => setPc(prevValue => !prevValue)}
                                />
                            </InputContainer>
                        </div>
                    </Container>
                )}

                <InputContainer>
                    <CustomTextarea
                        label='Doporučenia'
                        name="doporucenia"
                        value={recomendation}
                        rows="5"
                        handleChange={(e) => setRecomendation(e.target.value)}
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