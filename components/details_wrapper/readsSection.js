import React from "react";
import detailsStyle from "../../styles/detail.module.css";
import { baseUrl } from "../../utilities/constants";
import Link from "next/link";

export default function ReadsSection({ article = [], articleType = "" }) {
	return (
		<div className="col-lg-3">
			<div>
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
						<img
							src="https://www.readytomelt.com/wp-content/plugins/email-subscribers/lite/public/images/spinner.gif"
							alt="Loading"
						/>
					</span> */}
				</form>
			</div>
			<div className={detailsStyle["recommended"]}>
				<p className={detailsStyle["text-heading"]}>Recommended Reads in {articleType}</p>
				{article &&
					article.slice(0, 4).map((v, i) => (
						<div
							className={"row " + detailsStyle["small_promoted_article"]}
							key={i}
						>
							<div className="col-lg-12">
								<Link
									href={{
										pathname: "/" + v?.attributes.slug,
										query: {
											id: v.id,
										},
									}}
								>
									<img src={baseUrl + v?.attributes?.image?.data?.attributes?.url} />
								</Link>
								<h2 className={detailsStyle["mar-t-10"]}>
									<Link
										href={{
											pathname: "/" + v?.attributes.slug,
											query: {
												id: v.id,
											},
										}}
									>
										{v?.attributes?.title}
									</Link>
								</h2>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
