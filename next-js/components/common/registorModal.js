import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import styles from '../../styles/modal.module.css'
import { useForm } from 'react-hook-form';
import { apiPostCall } from '../../utilities/apiServices';
import { apiList } from '../../utilities/constants';
import { formValidationField } from '../../utilities/formValidation';
import CustomModal from './customModal';

export default function RegisterModal({ openModal, toggle }) {
    const defaultFormData = {
        "name": "",
        "email": "",
    }
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("")
    const [formData, setFormData] = useState(defaultFormData)
    const [validation, setValidation] = useState({})

    useEffect(() => {
        const temp = {
            "email": register("email", formValidationField.email)
        }
        setValidation(temp)
        setFormData(defaultFormData)
    }, [])

    const updateFormData = (type, value) => {
        const temp = { ...formData }
        temp[type] = value;
        setFormData(temp);
    }
    const handle = async () => {
        const payload = {
            "name": formData?.name,
            "email": formData?.email
        }
        let respones = await apiPostCall(apiList.SUBSCRIBE_USER_MAIL, {}, payload)
        if (respones.status) {
            reset()
        } else {
            setError(respones.message)
        }
    }

    const handleErr = (e) => {
        console.log("error", e);
    };
    return (
        <CustomModal openModal={openModal} toggle={toggle} title="Subscribe Now to Melt">
            <form onSubmit={handleSubmit(handle, handleErr)}>
                <label htmlFor='name' className={styles.label}>Name</label>
                <input
                    autoComplete="off"
                    className="form-control"
                    id="name"
                    type="text"
                    onChange={(e) => {
                        updateFormData("name", e.target.value);
                    }}
                />
                <label htmlFor='email' className={styles.label} >Email *</label>
                <input
                    {...validation.email}
                    autoComplete='off'
                    className='form-control'
                    id='email'
                    type='email'
                    label="email"
                    name='email'
                    onChange={(e) => {
                        validation.email.onChange(e);
                        updateFormData("email", e.target.value);
                    }}
                />
                <span className={styles.danger}>
                    {errors?.email && errors.email.message}
                </span>
                <p className={styles.danger}>{error}</p>
                <div className={styles.button}>
                    <button type='submit'>Subscribe</button>
                </div>
            </form>
        </CustomModal>
    )
}
