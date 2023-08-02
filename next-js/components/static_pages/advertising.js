import React from "react";
import searchStyle from "../../styles/search.module.css";
import SubscribeMail from "../common/subscribeMail";

export default function Advertising() {
	return (
		<section className={searchStyle["section-articles"] + " " + searchStyle["cat-section"]}>
			<div className="row">
				<div className="col-lg-9">
					<div className={searchStyle["col-lg-10"]}>
						<h2 className={searchStyle["title"]}>Advertising Opportunities</h2>
						<div className={searchStyle["body-text"]}>
							<p>
								We offer several advertising opportunities in our print and digital media including
								branded/sponsored content
							</p>
							<p>
								If you are interested in learning more about our advertising opportunities, or secure
								advertising space, please contact animesh@kyoorius.com.
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3">
					<SubscribeMail />
				</div>
			</div>
		</section>
	);
}
