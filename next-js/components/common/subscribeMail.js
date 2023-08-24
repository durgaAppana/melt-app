import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { apiPostCall } from "../../utilities/apiServices";
import { apiList } from "../../utilities/constants";
import commonStyle from "../../styles/common.module.css";
import { formValidationField } from "../../utilities/formValidation";

export default function SubscribeMail() {
	const defaultFormData = {
		email: "",
	};

	const [formData, setFormData] = useState(defaultFormData);
	const [validation, setValidation] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [errorResponse, setErrorResponse] = useState("");
	const [isMailSend, setIsMailSend] = useState(false);

	const {
		handleSubmit,
		register,
		resetField,
		formState: { errors: errors },
	} = useForm();

	useEffect(() => {
		const temp = {
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

	const resetFormData = () => {
		Object.keys(defaultFormData).map((keys) => resetField(keys));
	};

	const handleSubmitFormData = async () => {
		const payload = {
			email: formData.email,
		};

		setIsLoading(true);
		const response = await apiPostCall(apiList.SUBSCRIBE_USER_MAIL, {}, payload);
		setIsLoading(false);

		if (response.status) {
			resetFormData();
			setIsMailSend(true)
		} else {
			setErrorResponse(response.message);
		}
	};

	return (
		<>
			<h3 className={commonStyle["sub-title"]}> Subscribe to Melt’s latest stories</h3>
			{isMailSend ?
				<div className={commonStyle["message"]}>Your subscription was successful! Kindly
					check your mailbox and confirm your subscription.
					If you don't see the email within a few minutes,
					check the spam/junk folder.</div>
				:
				<form onSubmit={handleSubmit(handleSubmitFormData)}>
					<div className="es-field-wrap">
						<label htmlFor="email" className={commonStyle["sub-text"]}>Email*
							<input
								{...validation.email}
								className="form-control"
								type="email"
								name="email"
								label="email"
								onChange={(e) => {
									validation.email.onChange(e);
									setErrorResponse("");
									updateFormData("email", e.target.value);
								}}
							/>
						</label>

						<p className={"text-danger " + commonStyle["sub-text"]}>{errors.email && errors.email.message}</p>
						{typeof errorResponse != "undefined" && errorResponse != "" && (
							<p className={"text-danger " + commonStyle["sub-text"]}>{errorResponse}</p>
						)}
					</div>
					<div className="row">
						<div className="col-5">
							<button
								type="submit"
								className={"form-control " + commonStyle["sub-text"]}
								disabled={isLoading}
							>
								Subscribe
							</button>
						</div>
						<div className="col-5"></div>
						{isLoading && (
							<div className="col-lg-6">
								<span
									className="es_spinner_image"
									id="spinner-image"
								>
									<Image
										src="/images/spinner.gif"
										alt="Loading"
										height={20}
										width={20}
									/>
								</span>
							</div>
						)}
					</div>
				</form>
			}
		</>
	);
}
