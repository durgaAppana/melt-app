import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styleContact from "../../styles/contact.module.scss";
import { apiPostCall } from "../../utilities/apiServices";

import { apiList } from "../../utilities/constants";
import { formValidationField } from "../../utilities/formValidation";

export default function ContactUs() {
	const { register, reset, handleSubmit, formState: { errors }, } = useForm();
	const defaultFormData = {
		name: "",
		email: "",
		subject: "",
		location: "",
		message: ""
	};
	const [formData, setFormData] = useState(defaultFormData);
	const [errorMessage, setErrorMessage] = useState("");
	const [validation, setValidation] = useState({});

	useEffect(() => {
		const temp = {
			name: register("name", formValidationField.name),
			email: register("email", formValidationField.email),
		};
		setValidation(temp);
		setFormData(defaultFormData)
	}, []);

	const updateFormData = (type, value) => {
		const temp = { ...formData };
		temp[type] = value;
		setFormData(temp);
	};
	const submitButton = async () => {
		const payload = {
			name: formData?.name,
			email: formData?.email,
			subject: formData?.subject,
			message: formData?.message,
			location: formData?.location,
		};
		let response = await apiPostCall(apiList.CONTACT_FORM, {}, payload);
		if (response.status) {
			alert(response.message);
			reset();
			setErrorMessage("")
		} else {
			setErrorMessage(response.message)
		}
	};
	const handleErr = (e) => {
		console.log("error", e);
	};

	return (
		<>
			<div className={styleContact.contact}>
				<h4 className={styleContact.heading}>Send us a message</h4>
				<form onSubmit={handleSubmit(submitButton, handleErr)}>
					<div className={styleContact.formGroup}>
						<label htmlFor="yourName">Your Name*</label>
						<input
							{...validation.name}
							autoComplete="off"
							className="form-control"
							id="yourName"
							type="text"
							label="yourName"
							onChange={(e) => {
								validation.name.onChange(e);
								updateFormData("name", e.target.value);
							}}
						/>
						<span className={styleContact.errorMsg}>
							{errors?.name && errors.name.message}
						</span>
					</div>
					<div className={styleContact.formGroup}>
						<label htmlFor="email">Your Email*</label>
						<input
							{...validation.email}
							className="form-control"
							autoComplete="off"
							type="email"
							name="email"
							label="email"
							id="email"
							onChange={(e) => {
								validation.email.onChange(e);
								updateFormData("email", e.target.value);
							}}
						/>
						<span className={styleContact.errorMsg}>
							{errors?.email && errors.email.message}
						</span>
						<span className={styleContact.errorMsg}>
							{errorMessage}
						</span>
					</div>
					<div className={styleContact.formGroup}>
						<label htmlFor="subject">Subject</label>
						<input
							autoComplete="off"
							className="form-control"
							id="subject"
							type="text"
							onChange={(e) => {
								updateFormData("subject", e.target.value);
							}}
						/>
					</div>
					<div className={styleContact.formGroup}>
						<label htmlFor="location">Location</label>
						<input
							autoComplete="off"
							className="form-control"
							id="location"
							type="text"
							onChange={(e) => {
								updateFormData("location", e.target.value);
							}}
						/>
					</div>
					<div className={styleContact.formGroup}>
						<label htmlFor="message">Your Message</label>
						<textarea
							autoComplete="off"
							className="form-control"
							id="message"
							type="message"
							rows={4}
							onChange={(e) => {
								updateFormData("message", e.target.value);
							}}
						/>
					</div>
					<button className={styleContact.button} type="submit">Send</button>
				</form>
			</div>
		</>
	);
}
