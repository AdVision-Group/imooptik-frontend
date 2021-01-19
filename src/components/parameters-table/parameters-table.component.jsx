import React from 'react'

import {
    TableContainer,
    TitleCol,
    Col
} from './parameters-table.styles'

const ParametersTable = ({ parameters, handleChange }) => {

    return (
        <TableContainer>
            <TitleCol>
                <div>{" "}</div>
                <div>Pravé oko -</div>
                <div>Ľavé oko -</div>
                <div>Pravé oko +</div>
                <div>Ľavé oko +</div>
            </TitleCol>


            <Col>
                <div>sph</div>

                {parameters.diopters.map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='Number'
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
                                type='Number'
                                value={value}
                                name="cylinder"
                                onChange={(e) => handleChange(e, idx)}
                            />
                        </div>
                    )
                })}
            </Col>
            <Col>
                <div>osa</div>

                {parameters.cylinderAxes.map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='Number'
                                value={value}
                                name="cylinderAxes"
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
                                type='Number'
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
                                type='Number'
                                value={value}
                                name="basis"
                                onChange={(e) => handleChange(e, idx)}
                            />
                        </div>
                    )
                })}
            </Col>
            <Col>
                <div>vrstva</div>

                {parameters.addition.map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='Number'
                                value={value}
                                name="addition"
                                onChange={(e) => handleChange(e, idx)}
                            />
                        </div>
                    )
                })}
            </Col>

            <Col>
                <div>P.D.</div>

                {parameters.distance.map((value, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type='Number'
                                value={value}
                                name="distance"
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
