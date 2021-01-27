import React from 'react'

import {
    TableContainer,
    TitleCol,
    Col,
    OsContainer
} from './parameters-table.styles'

const ParametersTable = ({ parameters, handleChange }) => {
    const checkParameters = (parameter, idx) => {
        if (parameter.length === 0) {
            return ""
        }
        if (parameter[idx] === 1001) {
            return ""
        }

        return parameter[idx]
    }

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
                                value={checkParameters(parameters.cylinderAxes, idx)}
                                name="cylinderAxes"
                                onChange={(e) => handleChange(e, idx)}
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
                                value={checkParameters(parameters.distance, idx)}
                                name="distance"
                                onChange={(e) => handleChange(e, idx)}
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
                            />
                        </div>
                    )
                })}
            </Col>
            <Col>
                <div>addicia</div>

                {[...Array(4)].map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='text'
                                value={checkParameters(parameters.addition, idx)}
                                name="addition"
                                onChange={(e) => handleChange(e, idx)}
                            />
                        </div>
                    )
                })}
            </Col>


        </TableContainer>
    )
}

export default ParametersTable
