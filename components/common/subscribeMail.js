import React from "react";

export default function SubscribeMail() {
	return (
		<>
			<h3> Subscribe to Melt’s latest stories</h3>
			<form>
				<div className="es-field-wrap">
					<label>
						Email*
						<input
							className="form-control"
							type="email"
							name="email"
							value=""
							placeholder=""
							required="required"
							readOnly={true}
						/>
					</label>
				</div>
				<input
					style={{ width: "50%" }}
					type="submit"
					name="submit"
					className="form-control"
					id="es_subscription_form_submit_649f42cfb67fd"
					value="Subscribe"
					readOnly={true}
				/>
				{/* <span
            className="es_spinner_image"
            id="spinner-image"
        >
            <Image
                src="https://www.readytomelt.com/wp-content/plugins/email-subscribers/lite/public/images/spinner.gif"
                alt="Loading"
            />
        </span> */}
			</form>
		</>
	);
}
