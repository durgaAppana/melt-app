import React from 'react'
import { useForm } from 'react-hook-form';
import styles from '../../styles/contact.module.css';

export default function ContactUs() {
    const { register, reset, handleSubmit } = useForm();

    return (
        <div style={styles.contact}>
            <h1>Send us a message</h1>
            <form onSubmit={handleSubmit()}>
                <label>Your Name (required)</label>
                <input {...register("name", { required: false })} />
                <label >Your Email (required)</label>
                <input {...register("email", { required: true })} type="email" />
                <div >
                    <button type='submit'>Subscribe</button>
                </div>
            </form>
        </div>
    )
}
