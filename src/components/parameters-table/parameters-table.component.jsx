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

                {parameters.diopters.map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='text'
                                value={value}
                                name="diopters"
                                onChange={(e) => handleChange(e, idx)}
                            />
                        </div>
                    )
                })}
            </Col>
            <Col>
                <div>cyl</div>

                {parameters.cylinder.map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='text'
                                value={value}
                                name="cylinder"
                                onChange={(e) => handleChange(e, idx)}
                            />
                        </div>
                    )
                })}
            </Col>
            <Col>
                <div>ax</div>

                {parameters.cylinderAxes.map((value, idx) => {
                    return (
                        <OsContainer key={idx}>
                            <input
                                type='text'
                                value={value}
                                name="cylinderAxes"
                                onChange={(e) => handleChange(e, idx)}
                            />
                        </OsContainer>
                    )
                })}
            </Col>
            <Col>
                <div>PD</div>

                {parameters.distance.map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='text'
                                value={value}
                                name="distance"
                                onChange={(e) => handleChange(e, idx)}
                            />
                        </div>
                    )
                })}
            </Col>
            <Col>
                <div>prizma</div>

                {parameters.prism.map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='text'
                                value={value}
                                name="prism"
                                onChange={(e) => handleChange(e, idx)}
                            />
                        </div>
                    )
                })}
            </Col>
            <Col>
                <div>basis</div>

                {parameters.basis.map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='text'
                                value={value}
                                name="basis"
                                onChange={(e) => handleChange(e, idx)}
                            />
                        </div>
                    )
                })}
            </Col>
            <Col>
                <div>addicia</div>

                {parameters.addition.map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='text'
                                value={value}
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
