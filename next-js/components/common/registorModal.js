import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import styles from '../../styles/register.module.css'
import { useForm } from 'react-hook-form';
import { apiPostCall } from '../../utilities/apiServices';
import { apiList } from '../../utilities/constants';

export default function RegisterModal({ openModal, toggle }) {

    const { register, reset, handleSubmit } = useForm();
    const [error, setError] = useState("")
    const handle = async (data) => {
        const payload = {
            "name": data.name,
            "email": data.email
        }
        let respones = await apiPostCall(apiList.SUBSCRIBE_USER_MAIL, {}, payload)
        if (respones.status) {
            reset()
        } else {
            setError(respones.message)
        }

    }
    return (
        <Modal className={styles.main} isOpen={openModal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Subscribe Now to Melt</ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit(handle)}>
                    <label className={styles.label}>Name</label>
                    <input {...register("name", { required: false })} />
                    <label className={styles.label} >Email *</label>
                    <input {...register("email", { required: true })} type="email" />
                    <p className={styles.danger}>{error}</p>
                    <div className={styles.button}>
                        <button type='submit'>Subscribe</button>
                    </div>
                </form>
            </ModalBody>
        </Modal>
    )
}
