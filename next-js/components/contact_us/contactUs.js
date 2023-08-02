import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import styles from '../../styles/contact.module.css';
import { apiPostCall } from '../../utilities/apiServices';
import { apiList } from '../../utilities/constants';

export default function ContactUs() {
    const { register, reset, handleSubmit } = useForm();
    const [error, setError] = useState("")
    const submitButton = async (data) => {
        const payload = {
            "name": data?.name,
            "email": data?.email,
            "subject": data?.subject,
            "message": data?.message,
            "location": data?.location
        }
        let response = await apiPostCall(apiList.CONTACT_FORM, {}, payload)
        if (response.status) {
            alert(response.message)
            reset()
        } else {
            setError(response.message)
        }
    }

    return (
        <div className={styles.contact}>
            <h1>Send us a message</h1>
            <form onSubmit={handleSubmit(submitButton)}>
                <label>Your Name (required)</label>
                <input {...register("name", { required: true })} type="text" />
                <label >Your Email (required)</label>
                <input {...register("email", { required: true })} type="email" />
                <p className={styles.danger}>{error}</p>
                <label >Subject</label>
                <input {...register("subject", { required: false })} type="text" />
                <label >Your Message</label>
                <textarea {...register("your message", { required: false })} type="text" />
                <label>Location</label>
                <input {...register("location", { required: false })} type="text" />
                <div className={styles.button}>
                    <button type='submit'>Send</button>
                </div>
            </form>
        </div>
    )
}
