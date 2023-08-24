import React, { useEffect, useState } from 'react'
import styles from '../../styles/modal.module.css'
import { useForm } from 'react-hook-form';
import { apiGetCall, apiPostCall } from '../../utilities/apiServices';
import { apiList } from '../../utilities/constants';
import CustomModal from './customModal';
import { formValidationField } from '../../utilities/formValidation';
// import { formValidationField } from '../../utilities/formValidation';

export default function LoginModal({ openModal, toggle, setUserName }) {
    const defaultFormData = {
        "username": "",
        "email": "",
        "password": "",
    }
    const { register, reset, handleSubmit,formState:{errors} } = useForm();
    const [formData, setFormData] = useState(defaultFormData)
    const [validation, setValidation] = useState({})
    useEffect(() => {
        const temp = {
            "email": register("email", formValidationField.email),
            "password": register("password", formValidationField.password)
        }
        setValidation(temp)
        setFormData(defaultFormData)
    },[])
    const updateFormData = (type, value) => {
        const temp = { ...formData }
        temp[type] = value
        setFormData(temp)
    }
    const handleLogin = async () => {
        const payload = {
            "username": formData.username,
            "email": formData.email,
            "password": formData.password,
            "provider": "local",
            "confirmed": true,
            "blocked": false
        }
        let response1 = await apiGetCall(apiList.GET_ALL_USER + formData.email + "&populate=*")
        if (response1.length == 0) {
            let response = await apiPostCall(apiList.GET_USER_LOGIN, {}, payload)
            if (response.jwt) {
                reset()
                toggle(false)
                localStorage.setItem("userData", JSON.stringify(response.user))
                setUserName(JSON.parse(localStorage.getItem("userData")))

            }
        } else {
            reset()
            toggle(false)
            localStorage.setItem("userData", JSON.stringify(response1[0]))
            setUserName(JSON.parse(localStorage.getItem("userData")))
        }
    }
    const handleErr = (e) => {
        console.log("error", e)
    }
    return (
        <CustomModal openModal={openModal} toggle={toggle} title="User Login">
            <form onSubmit={handleSubmit(handleLogin, handleErr)}>
                <label htmlFor='username' className={styles.label}>username</label>
                <input
                    autoComplete='off'
                    name='username'
                    type='text'
                    id='username'
                    className='form-control'
                    onChange={(e) => {
                        updateFormData("username", e.target.value)
                    }}
                />
                <label htmlFor='email' className={styles.label} >Email *</label>
                <input
                    {...validation.email}
                    autoComplete='off'
                    type='email'
                    name='email'
                    id='email'
                    className='form-control'
                    onChange={(e) => {
                        validation.email.onChange(e)
                        updateFormData("email", e.target.value)
                    }}
                />
                <span className={styles.danger}>
                    {errors?.email && errors.email.message}
                </span>
                <label htmlFor='password' className={styles.label} >Password *</label>
                <input
                    {...validation.password}
                    id='password'
                    type='text'
                    name='password'
                    autoComplete='off'
                    className='form-control'
                    onChange={(e) => {
                        validation.password.onChange(e)
                        updateFormData("password", e.target.value)
                    }}
                />
                <span className={styles.danger} >
                    {errors.password && errors.password.message}
                </span>
                <div className={styles.button}>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </CustomModal>
    )
}
