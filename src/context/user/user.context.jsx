import React, { createContext, useState, useContext, useEffect } from 'react'
import { AuthContext } from '../auth/auth.context'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'

import {
    fetchUsers,
    fetchUser,
    patchUser
} from './user.queries'

import {
    initUserObj
} from './user.utils'

export const UserContext = createContext({
    isUpdating: false,
    activeIndex: 0,
    handleChangeFilterItem: () => { },
    filterItems: [],
    totalCount: 0,
    users: null,
    user: null,
    getUsers: () => { },
    getUser: () => { },
    handleChange: () => { },
    handleDioptersChange: () => { },
    handleDistanceChange: () => { },
    handleCylinderChange: () => { },
    handleCylinderAxesChange: () => { },
    updateUser: () => { },
    resetUser: () => { }
})

const UserProvider = ({ children }) => {
    const { token } = useContext(AuthContext)
    const {
        closeModal,
        getMessage,
        setIsLoading,
        setShowModal
    } = useContext(LoadingModalContext)

    // ------------------------

    const [user, setUser] = useState(initUserObj)
    const [users, setUsers] = useState(null)
    const [totalCount, setTotalCount] = useState(0)

    // ------------------------

    const [isUpdating, setIsUpdating] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const filterItems = [
        {
            id: 0,
            name: "Zákaznici",
            filter: 0,
        },
        {
            id: 1,
            name: "Zamestnanci 1",
            filter: 1,
        },
        {
            id: 2,
            name: "Zamestnanci 2",
            filter: 2,
        },
        {
            id: 3,
            name: "Admin 3",
            filter: 3,
        }
    ]

    // ------------------------

    const handleChangeFilterItem = (itemIndex) => {
        setActiveIndex(itemIndex)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleDioptersChange = (e, idx) => {
        let arr = user.lenses.diopters
        arr[idx] = Number(e.target.value)
        setUser({
            ...user,
            lenses: {
                ...user.lenses,
                diopters: arr
            }
        })
    }

    const handleDistanceChange = (e, idx) => {
        let arr = user.lenses.distance
        arr[idx] = Number(e.target.value)
        setUser({
            ...user,
            lenses: {
                ...user.lenses,
                distance: arr
            }
        })
    }

    const handleCylinderChange = (e, idx) => {
        let arr = user.lenses.cylinder
        arr[idx] = Number(e.target.value)
        setUser({
            ...user,
            lenses: {
                ...user.lenses,
                cylinder: arr
            }
        })
    }


    const handleCylinderAxesChange = (e, idx) => {
        let arr = user.lenses.cylinderAxes
        arr[idx] = Number(e.target.value)
        setUser({
            ...user,
            lenses: {
                ...user.lenses,
                cylinderAxes: arr
            }
        })
    }

    useEffect(() => {
        setUser({
            ...user,
            name: user.fName + " " + user.lName
        })
    }, [user.fName, user.lName])

    const resetUser = () => {
        setUser({
            ...initUserObj
        })
        setIsUpdating(false)
    }

    // ------------------------
    // USER ACTIONS
    // ------------------------

    // Get all users
    const getUsers = async () => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchUsers(token)
            const data = await response.json()

            console.log(data)
            if (data.users) {
                setUsers(data.users)
                setTotalCount(data.count)
                setIsLoading(false)
                closeModal()

            } else {
                getMessage(data.message)
                setIsLoading(false)
            }
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }


    // Get signgle user
    const getUser = async (id) => {
        setIsLoading(true)
        setShowModal(true)
        setIsUpdating(true)

        try {
            const response = await fetchUser(token, id)
            const data = await response.json()

            if (data.user) {
                setUser({
                    ...user,
                    ...data.user,
                    lenses: {
                        cylinder: data.user.lenses.cylinder.length ? data.user.lenses.cylinder : [0, 0],
                        cylinderAxes: data.user.lenses.cylinderAxes.length ? data.user.lenses.cylinderAxes : [0, 0],
                        diopters: data.user.lenses.diopters.length ? data.user.lenses.diopters : [0, 0],
                        distance: data.user.lenses.distance.length ? data.user.lenses.distance : [0, 0],
                    },
                    fName: data.user.name ? data.user.name.split(" ")[0] : "",
                    lName: data.user.name ? data.user.name.split(" ")[1] : ""
                })
                setIsLoading(false)
                closeModal()

            } else {
                getMessage(data.message)
                setIsLoading(false)
            }
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    // Update user
    const updateUser = async (user) => {
        setIsLoading(true)
        setShowModal(true)

        console.log(user)

        try {
            // postUser
            const response = await patchUser(token, user)
            const data = await response.json()

            console.log(data)

            setIsLoading(false)
            getMessage(data.message)


        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    return (
        <UserContext.Provider
            value={{
                isUpdating,
                activeIndex,
                handleChangeFilterItem,
                filterItems,
                users,
                user,
                totalCount,
                getUsers,
                getUser,
                handleChange,
                handleDioptersChange,
                handleDistanceChange,
                handleCylinderChange,
                handleCylinderAxesChange,
                updateUser,
                resetUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider