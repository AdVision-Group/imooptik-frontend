import React, { createContext, useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../auth/auth.context'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
// import { OrderContext } from '../order/order.context'

import {
    // fetchUsers,
    fetchUser,
    patchUser,
    postAdmin,
    postUser,
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
    // getUsers: () => { },
    getUser: () => { },
    handleChange: () => { },
    handleParameterChange: () => { },
    handleCompanyChange: () => { },
    updateUser: () => { },
    resetUser: () => { },
    formToShow: 0,
    switchFormButtons: [],
    toggleUserForm: () => { },
    createUser: () => { },
    getFilteredUsers: () => { },
    getUserByQuery: () => { },
})

const UserProvider = ({ children }) => {
    const { push } = useHistory()
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
    const [totalCount] = useState(0)

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
            name: "Zamestnanci",
            filter: 1,
        },
        {
            id: 2,
            name: "Vedúci",
            filter: 2,
        },
        // {
        //     id: 3,
        //     name: "Velký brat",
        //     filter: 3,
        // },
        // {
        //     id: 4,
        //     name: "Odstránené",
        //     filter: 3
        // }
    ]

    // ------------------------

    const [formToShow, setFormToShow] = useState(0)
    const switchFormButtons = [
        {
            name: "Zákazník"
        },
        {
            name: "Zamestnanec"
        }
    ]

    const toggleUserForm = (e, idx) => {
        e.preventDefault()
        setFormToShow(idx)
    }

    // ------------------------


    const handleChangeFilterItem = (itemIndex) => {
        setActiveIndex(itemIndex)
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        console.log(name, value)
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleParameterChange = (e, idx) => {
        const { name, value } = e.target
        let arr = user.lenses[name]
        arr[idx] = value === '' ? 1001 : value
        setUser({
            ...user,
            lenses: {
                ...user.lenses,
                [name]: arr
            }
        })
    }

    const handleCompanyChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            company: {
                ...user.company,
                [name]: value
            }
        })
    }

    useEffect(() => {
        setUser({
            ...user,
            name: user?.fName + " " + user?.lName
        })
    }, [user?.fName, user?.lName])

    const resetUser = () => {
        setUser(initUserObj)
        setIsUpdating(false)
        setFormToShow(0)
    }

    // ------------------------
    // USER ACTIONS
    // ------------------------

    // Get all users
    // const getUsers = async () => {
    //     setIsLoading(true)
    //     setShowModal(true)

    //     try {
    //         const response = await fetchUsers(token)
    //         const data = await response.json()

    //         console.log(data)
    //         if (data.users) {
    //             setUsers(data.users)
    //             setTotalCount(data.count)
    //             setIsLoading(false)
    //             closeModal()

    //         } else {
    //             getMessage(data.message)
    //             setIsLoading(false)
    //         }
    //     } catch (err) {
    //         console.log(err)
    //         getMessage("Nieco sa pokazilo")
    //         setIsLoading(false)
    //     }
    // }

    // Get single user
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
    const updateUser = async (user, id, path, refetchUser, close, addUser) => {
        setIsLoading(true)
        setShowModal(true)

        console.log(user)

        try {
            const response = await patchUser(token, user, id)
            const data = await response.json()

            console.log(data)

            if (data.error) {
                getMessage(data.messageSK)
                setIsLoading(false)
                return
            }


            setIsLoading(false)
            closeModal()

            if (path === 'order') {
                push(`/dashboard/objednavky/${id}`)
            } else if (path === 'profile') {
                push(`/dashboard/zakaznici/${id}`)
            } else if (path === 'isOrder') {
                setUser({
                    ...user,
                    ...data.user,
                    fName: data.user.name ? data.user.name.split(" ")[0] : "",
                    lName: data.user.name ? data.user.name.split(" ")[1] : ""
                })

                addUser({
                    ...user,
                    ...data.user,
                    fName: data.user.name ? data.user.name.split(" ")[0] : "",
                    lName: data.user.name ? data.user.name.split(" ")[1] : ""
                })
                // console.log("REFETCH USER")
                // console.log("REFETCH USER")
                // console.log("REFETCH USER")
                // refetchUser()
                close()
            } else {
                push("/dashboard/zakaznici")
            }

            getFilteredUsers({
                filters: {
                    admin: activeIndex
                }
            })
            // http://localhost:1000/#/dashboard/zakaznici


        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const createUser = async (user, path) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            if (formToShow === 0) {
                let data = {}
                if (!user._id) {
                    console.log('creating new user')
                    const response = await postUser(token, user)
                    data = await response.json()

                    if (data.error) {
                        getMessage(data.message)

                        if (data.type === 'email') {
                            getMessage("Email existuje")
                        }
                        if (data.error === 'format' && data.message.includes('email')) {
                            getMessage("Email musi byt platny email")
                        }
                        setIsLoading(false)
                        return
                    }

                    setUser({
                        ...data.user,
                        _id: data.user._id
                    })
                }

                const userId = data.user ? data.user._id : user._id

                updateUser({
                    ...user
                }, userId, path)

                // setIsLoading(false)
                // getUsers()
                // push('/dashboard/zakaznici')
                // closeModal()

            } else {
                if (user.password !== user.confirmPassword) {
                    getMessage("Heslá sa nezhodujú")
                    setIsLoading(false)
                    return
                }

                const response = await postAdmin(token, user)
                const data = await response.json()

                console.log(data)

                if (data.error) {
                    getMessage(data.message)
                    setIsLoading(false)
                    return
                }

                setIsLoading(false)
                getFilteredUsers({
                    filters: {
                        admin: activeIndex
                    }
                })

                push("/dashboard/zakaznici")
                closeModal()
            }

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    // ----------------------------------------------
    // ----------------------------------------------
    // ----------------------------------------------

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");



    const getFilteredUsers = async (filter) => {
        setIsLoading(true)
        setShowModal(true)

        console.log(filter)
        const raw = JSON.stringify(filter)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/users/filter`, requestOptions)
            const data = await response.json()

            console.log(data)
            if (data.users) {
                setUsers(data.users)
                closeModal()
                return
            }

            getMessage(data.message)
            setIsLoading(false)

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const getUserByQuery = async (query) => {
        setIsLoading(true)
        setShowModal(true)

        console.log(query)
        const raw = JSON.stringify(query)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/users/filter`, requestOptions)
            const data = await response.json()

            console.log(data)
            if (data.users) {
                setUsers(data.users)
                closeModal()
                return
            }

            getMessage(data.message)
            setIsLoading(false)

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
                // getUsers,
                getUser,
                handleChange,
                handleParameterChange,
                handleCompanyChange,
                updateUser,
                resetUser,
                formToShow,
                switchFormButtons,
                toggleUserForm,
                createUser,
                getFilteredUsers,
                getUserByQuery,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider