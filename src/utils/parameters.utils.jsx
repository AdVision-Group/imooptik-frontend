
export const checkParameter = (parametersArr, idx) => {
    if (parametersArr) {
        if (parametersArr.length === 0) {
            return ""
        }
        if (parametersArr[idx] === 1001 || parametersArr[idx] === "1001") {
            return ""
        }
        return parametersArr[idx]
    } else {
        return ""
    }
}

export const checkParameterValue = (value) => {
    if (value) {
        if (value === 0) {
            return ""
        }
        if (value === 1001) {
            return ""
        }
        return value
    } else {
        return ""
    }
}

// check if valid number othervise return 1001
export const formatParameter = parameter => {
    if (parameter) {
        const changeNumber = parameter.toString().replace(',', '.')
        return isNaN(changeNumber) ? 1001 : changeNumber
    }
}