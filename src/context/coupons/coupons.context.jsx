import React, { createContext, useContext, useState } from 'react'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { AuthContext } from '../auth/auth.context'
import { useHistory } from 'react-router-dom'
import { formatPrice } from '../../utils/warehouse.utils'

export const CouponsContext = createContext({
    coupon: null,
    coupons: null,
    handleChange: () => { },
    getCoupon: () => { },
    getCoupons: () => { },
    createCoupon: () => { },
    // updateCoupon: () => { },
    deleteCoupon: () => { },
    isUpdating: false,
    resetCoupons: () => { }
})

const initCouponObj = {
    code: '',
    type: 'percentage', // flat
    value: 0,
    maxUses: 0,
    minValue: 0,
    maxUsesTotal: 0
}


const CouponsProvider = ({ children }) => {
    const {
        closeModal,
        getMessage,
        setIsLoading,
        setShowModal
    } = useContext(LoadingModalContext)
    const { token } = useContext(AuthContext)
    const { push } = useHistory()

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const [coupon, setCoupon] = useState(initCouponObj)
    const [coupons, setCoupons] = useState(null)

    const [isUpdating, setIsupdating] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target

        setCoupon({
            ...coupon,
            [name]: value
        })
    }

    const getCoupon = async (id) => {
        setIsupdating(true)
        setIsLoading(true)
        setShowModal(true)

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/coupons/${id}`, requestOptions)
            const data = await response.json()

            if (data.coupon) {
                setCoupon({
                    ...coupon,
                    ...data.coupon
                })
                closeModal()
                return
            }

            getMessage(data.message)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }

    }

    const getCoupons = async () => {
        setIsLoading(true)
        setShowModal(true)

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/coupons`, requestOptions)
            const data = await response.json()

            if (data.coupons) {
                setCoupons(data.coupons)
            }
            setIsLoading(false)
            closeModal()
        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }
    }

    const createCoupon = async (couponToCreate) => {
        setIsLoading(true)
        setShowModal(true)

        console.log(couponToCreate.value)

        const raw = JSON.stringify({
            code: couponToCreate.code,
            type: couponToCreate.type, // flat
            ...(couponToCreate.value) && { value: couponToCreate.type === "flat" ? formatPrice(couponToCreate.value) : Number(couponToCreate.value) },
            // value: couponToCreate.value === '' || couponToCreate.value === '0' ? undefined : Number(couponToCreate.value),
            maxUses: couponToCreate.maxUses === '' || couponToCreate.maxUses === '0' ? undefined : Number(couponToCreate.maxUses),
            ...(couponToCreate.minValue) && { minValue: formatPrice(couponToCreate.minValue) },
            maxUsesTotal: couponToCreate.maxUsesTotal === '' || couponToCreate.maxUsesTotal === '0' ? undefined : Number(couponToCreate.maxUsesTotal)
        })

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/coupons/create`, requestOptions)
            const data = await response.json()

            if (data.error === "format") {
                getMessage("Kód kupónu je povinný")
            }
            if (data.error === 'exists') {
                getMessage("Kupón už existuje")
            }

            if (response.ok) {
                getCoupons()
                push('/dashboard/kupony')
            }

            // getMessage(data.message)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }

    }

    // const updateCoupon = async () => {
    //     console.log("Update coupon")

    //     setIsLoading(true)
    //     setShowModal(true)

    //     const requestOptions = {
    //         method: 'GET',
    //         headers: myHeaders,
    //         redirect: 'follow'
    //     };

    //     try {
    //         const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/coupons/${id}`, requestOptions)
    //         const data = await response.json()

    //         getMessage(data.message)
    //         setIsLoading(false)
    //     } catch (err) {
    //         console.log(err)
    //         getMessage("Niečo sa pokazilo")
    //         setIsLoading(false)
    //     }

    // }

    const deleteCoupon = async (id) => {
        setIsLoading(true)
        setShowModal(true)

        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/coupons/${id}`, requestOptions)
            const data = await response.json()

            if (response.ok) {
                getCoupons()
                push('/dashboard/kupony')
            }
            // getMessage(data.message)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }
    }

    const resetCoupons = async () => {
        setIsupdating(false)
        setCoupon(initCouponObj)
    }

    return (
        <CouponsContext.Provider
            value={{
                coupon,
                coupons,
                handleChange,
                getCoupon,
                getCoupons,
                createCoupon,
                // updateCoupon,
                deleteCoupon,
                isUpdating,
                resetCoupons
            }}
        >
            {children}
        </CouponsContext.Provider>
    )
}

export default CouponsProvider