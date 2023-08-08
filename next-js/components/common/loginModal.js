import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import styles from '../../styles/login.module.css'
import { useForm } from 'react-hook-form';
import { apiGetCall, apiPostCall } from '../../utilities/apiServices';
import { apiList } from '../../utilities/constants';

export default function LoginModal({ openModal, toggle }) {
    const { register, reset, handleSubmit } = useForm();

    const handleLogin = async (data) => {
        const payload = {
            "username": data.username,
            "email": data.email,
            "password": data.password,
            "provider": "local",
            "confirmed": true,
            "blocked": false
        }
        let response1 = await apiGetCall(apiList.GET_ALL_USER + data.email + "&populate=*")
        console.log("objectfgdhhgfghf",response1[0]);
        if (response1.length == 0) {
            let response = await apiPostCall(apiList.GET_USER_LOGIN, {}, payload)
            if (response.jwt) {
                reset()
                toggle(false)
                localStorage.setItem("userData", JSON.stringify(response.user))
            }
        } else {
            reset()
            toggle(false)
            localStorage.setItem("userData", JSON.stringify(response1[0]))
        }
    }

    return (
        <Modal className={styles.main} isOpen={openModal} toggle={toggle}>
            <ModalHeader toggle={toggle}>User Login</ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <label className={styles.label}>username</label>
                    <input {...register("username", { required: false })} />
                    <label className={styles.label} >Email *</label>
                    <input {...register("email", { required: true })} type="email" />
                    <label className={styles.label} >Password *</label>
                    <input {...register("password", { required: true })} type="password" />
                    <div className={styles.button}>
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </ModalBody>
        </Modal>
    )
}
