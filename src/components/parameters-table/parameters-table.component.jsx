import React from 'react'

import {
    TableContainer,
    TitleCol,
    Col,
    OsContainer
} from './parameters-table.styles'

const ParametersTable = ({ parameters, handleChange }) => {

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
                                value={parameters.diopters[idx] ?? ""}
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
                                value={parameters.cylinder[idx] ?? ""}
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
                                value={parameters.cylinderAxes[idx] ?? ""}
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
                                value={parameters.distance[idx] ?? ""}
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
                                value={parameters.prism[idx] ?? ""}
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
                                value={parameters.basis[idx] ?? ""}
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
                                value={parameters.addition[idx] ?? ""}
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
