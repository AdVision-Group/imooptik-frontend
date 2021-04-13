import React, { useEffect } from 'react'

import { formatfloatNumber } from '../../utils/warehouse.utils'

import {
    TableContainer,
    TitleCol,
    Col,
    OsContainer
} from './parameters-table.styles'

const ParametersTable = ({ parameters, handleChange, disabledInputs = false }) => {
    const checkParameters = (parameter, idx) => {
        if (parameter.length === 0) {
            return ""
        }
        if (parameter[idx] === 1001 || parameter[idx] === "1001") {
            return ""
        }

        return parameter[idx]
    }

    const formatParameter = (e, idx) => {
        if(e.target.value === "") return
        const value = formatfloatNumber(e.target.value)
        console.log(value)
        handleChange({
            target: {
                value: value.includes("+") ? `+${Number(value).toFixed(2)}` : Number(value).toFixed(2) < 0 ? Number(value).toFixed(2) : `+${Number(value).toFixed(2)}`,
                name: e.target.name
            }
        }, idx)
    }

    const checkaAx = (parameter, idx) => {
        if (parameter.length === 0) {
            return ""
        }
        if (parameter[idx] === 1001 || parameter[idx] === '1001') {
            return ""
        }

        return parameter[idx]
    }

    const formatAx = (e, idx) => {
        if(e.target.value === "") return
        const value = formatfloatNumber(e.target.value)
        handleChange({
            target: {
                value: value,
                name: e.target.name
            }
        }, idx)
    }

    useEffect(() => {
        if (handleChange) {
            if (parameters.addition[0] !== 1001) {
                handleChange({
                    target: {
                        name: "diopters",
                        value: (Number(checkParameters(parameters.diopters, 0)) + Number(checkParameters(parameters.addition, 0))) === 0 ? "" : (Number(checkParameters(parameters.diopters, 0)) + Number(checkParameters(parameters.addition, 0))).toFixed(2)
                    }
                }, 2)
            }

            if (parameters.addition[0] === 1001) {
                handleChange({
                    target: {
                        name: "diopters",
                        value: 1001
                    }
                }, 2)
            }

            if (parameters.addition[1] !== 1001) {
                handleChange({
                    target: {
                        name: "diopters",
                        value: (Number(checkParameters(parameters.diopters, 1)) + Number(checkParameters(parameters.addition, 1))) === 0 ? "" : (Number(checkParameters(parameters.diopters, 1)) + Number(checkParameters(parameters.addition, 1))).toFixed(2)
                    }
                }, 3)
                return
            }


            if (parameters.addition[1] === 1001) {
                handleChange({
                    target: {
                        name: "diopters",
                        value: 1001
                    }
                }, 3)
            }
        }
    }, [parameters.diopters[0], parameters.addition[0], parameters.diopters[1], parameters.addition[1]])

    return (
        <TableContainer>
            <TitleCol>
                <div>{" "}</div>
                <div>
                    <p>P</p>
                </div>
                <div>
                    <p>Ľ</p>
                </div>
                <div>
                    <p>P</p>
                </div>
                <div>
                    <p>Ľ</p>
                </div>
            </TitleCol>


            <Col>
                <div>sph</div>

                {[...Array(4)].map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='text'
                                value={checkParameters(parameters.diopters, idx)}
                                name="diopters"
                                onChange={(e) => handleChange(e, idx)}
                                disabled={disabledInputs}
                                onBlur={e => formatParameter(e, idx)}
                            />
                        </div>
                    )
                })}
            </Col>
            <Col>
                <div>cyl</div>

                {[...Array(4)].map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='text'
                                value={checkParameters(parameters.cylinder, idx)}
                                name="cylinder"
                                onChange={(e) => handleChange(e, idx)}
                                disabled={disabledInputs}
                                onBlur={e => formatParameter(e, idx)}


                            />
                        </div>
                    )
                })}
            </Col>
            <Col>
                <div>ax</div>

                {[...Array(4)].map((value, idx) => {
                    return (
                        <OsContainer key={idx}>
                            <input
                                type='text'
                                value={checkaAx(parameters.cylinderAxes, idx)}
                                name="cylinderAxes"
                                onChange={(e) => handleChange(e, idx)}
                                disabled={disabledInputs}
                                onBlur={e => formatAx(e, idx)}


                            />
                        </OsContainer>
                    )
                })}
            </Col>
            <Col>
                <div>PD</div>

                {[...Array(4)].map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='text'
                                value={checkaAx(parameters.distance, idx)}
                                name="distance"
                                onChange={(e) => handleChange(e, idx)}
                                disabled={disabledInputs}
                                onBlur={e => formatAx(e, idx)}

                            />
                        </div>
                    )
                })}
            </Col>
            <Col>
                <div>prizma</div>

                {[...Array(4)].map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='text'
                                value={checkParameters(parameters.prism, idx)}
                                name="prism"
                                onChange={(e) => handleChange(e, idx)}
                                disabled={disabledInputs}
                                onBlur={e => formatParameter(e, idx)}

                            />
                        </div>
                    )
                })}
            </Col>
            <Col>
                <div>basis</div>

                {[...Array(4)].map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='text'
                                value={checkParameters(parameters.basis, idx)}
                                name="basis"
                                onChange={(e) => handleChange(e, idx)}
                                disabled={disabledInputs}
                                onBlur={e => formatParameter(e, idx)}

                            />
                        </div>
                    )
                })}
            </Col>
            <Col>
                <div>addicia</div>

                {[...Array(2)].map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='text'
                                value={checkParameters(parameters.addition, idx)}
                                name="addition"
                                onChange={(e) => handleChange(e, idx)}
                                disabled={disabledInputs}
                                onBlur={e => formatParameter(e, idx)}

                            />
                        </div>
                    )
                })}
            </Col>


        </TableContainer>
    )
}

export default ParametersTable
