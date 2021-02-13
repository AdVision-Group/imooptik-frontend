import React, { useState, useEffect } from 'react'

import {
    AiFillLeftCircle,
    AiFillRightCircle
} from 'react-icons/ai'

import {
    ArrowsContainer,
    IconContainer
} from './list-arrows.styles'

const ListArrows = ({
    listItems = [],
    handleClickPrev = () => { },
    handleClickNext = () => { }
}) => {
    const [isDisablePrev, setIsDisablePrev] = useState(true)
    const [isDisableNext, setIsDisableNext] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        if (currentPage === 0) {
            setIsDisablePrev(true)
        } else {
            setIsDisablePrev(false)
            setCurrentPage(0)
        }
    }, [listItems])

    useEffect(() => {
        if (listItems?.length < 10) {
            setIsDisableNext(true)
        } else {
            setIsDisableNext(false)
        }
    }, [listItems])

    useEffect(() => {
        if (currentPage === 0) return
        setCurrentPage(prevValue => prevValue--)
    }, [handleClickPrev])
    useEffect(() => {
        // if (currentPage === 0) return
        setCurrentPage(prevValue => prevValue++)
    }, [handleClickNext])

    const handlePrev = () => {
        handleClickPrev()
        if (currentPage === 0) return
        setCurrentPage(prevValue => prevValue - 1)
    }
    const handleNext = () => {
        handleClickNext()
        setCurrentPage(prevValue => prevValue + 1)
    }

    return (
        <ArrowsContainer>
            <IconContainer disabled={isDisablePrev} onClick={handlePrev}>
                <AiFillLeftCircle />
            </IconContainer>
            <IconContainer disabled={isDisableNext} onClick={handleNext}>
                <AiFillRightCircle />
            </IconContainer>
        </ArrowsContainer>
    )
}

export default ListArrows
