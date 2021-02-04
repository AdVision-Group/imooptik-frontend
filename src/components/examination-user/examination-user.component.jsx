import React from 'react'

import { useFetchById } from '../../hooks/useFetch'

import {
    ExaminationUserContainer
} from './examination-user.styles'

const ExaminationUser = ({ userId }) => {
    const { isLoading, response } = useFetchById("api/admin/users", userId)

    return (
        <ExaminationUserContainer>
            <p>Vystavoval:</p> <span>{isLoading ? "Hľadám..." : response?.user?.name}</span>
        </ExaminationUserContainer>
    )
}

export default ExaminationUser
