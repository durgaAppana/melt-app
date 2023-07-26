import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { emailValidation } from "../../utilities/utils";
import { apiPostCall } from "../../utilities/apiServices";
import { apiList } from "../../utilities/constants";

export default function SubscribeMail() {
	const defaultFormData = {
		email: "",
	};

	const [formData, setFormData] = useState(defaultFormData);
	const [validation, setValidation] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [errorResponse, setErrorResponse] = useState("");

	const formDataValidation = {
		email: {
			required: "Please enter email",
			pattern: {
				value: emailValidation(),
				message: "Please enter valid email",
			},
		},
	};

	const {
		handleSubmit,
		register,
		resetField,
		formState: { errors: errors },
	} = useForm();

	useEffect(() => {
		const temp = {
			email: register("email", formDataValidation.email),
		};
		setValidation(temp);
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
		} else {
			setErrorResponse(response.message);
		}
	};

	return (
		<>
			<h3> Subscribe to Melt’s latest stories</h3>
			<form onSubmit={handleSubmit(handleSubmitFormData)}>
				<div className="es-field-wrap">
					<label>
						Email*
						<input
							{...validation.email}
							className="form-control"
							type="email"
							name="email"
							onChange={(e) => {
								validation.email.onChange(e);
								setErrorResponse("");
								updateFormData("email", e.target.value);
							}}
						/>
					</label>
					<p className="text-danger">{errors.email && errors.email.message}</p>
					{typeof errorResponse != "undefined" && errorResponse != "" && (
						<p className="text-danger">{errorResponse}</p>
					)}
				</div>
				<div className="row">
					<div className="col-lg-6">
						<button
							type="submit"
							className="form-control"
							disabled={isLoading}
						>
							save
						</button>
					</div>
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
		</>
	);
}
