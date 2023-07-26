import React, { useState } from "react";
import footerStyle from "./../../styles/footer.module.css";
import RegisterModal from "../common/registorModal";

export default function Footer() {
	const [openModal, setOpenModal] = useState(false);
	const toggle = () => setOpenModal(!openModal)
	return (
		<div className={footerStyle["footer"]}>
			<div className="container">
				<div className="row">
					<div className="col-md-10">
						<div className="menu-footer">
							<ul className={footerStyle["footer-nav"]}>
								<li className={footerStyle["nav-item"]}>
									<a
										title="Privacy Policy"
										href="https://www.readytomelt.com/editorial-complaints/"
										className={footerStyle["nav-link"]}
									>
										Privacy Policy
									</a>
								</li>
								<li className={footerStyle["nav-item"]}>
									<a
										title="Advertising Opportunities"
										href="https://www.readytomelt.com/advertiser-info/"
										className={footerStyle["nav-link"]}
									>
										Advertising Opportunities
									</a>
								</li>
								<li className={footerStyle["nav-item"]}>
									<a
										title="Register"
										href="#register"
										className={footerStyle["nav-link"]}
										onClick={toggle}
									>
										Register
									</a>
								</li>
								<li className={footerStyle["nav-item"]}>
									<a
										title="Contact Us"
										href="contact-us"
										className={footerStyle["nav-link"]}
									>
										Contact Us
									</a>
								</li>
								<li className={footerStyle["nav-item"]}>
									<a
										title="About Us"
										href="https://www.readytomelt.com/about-us/"
										className={footerStyle["nav-link"]}
									>
										About Us
									</a>
								</li>
								<li
									className={footerStyle["nav-item"]}
									style={{ borderRight: "none" }}
								>
									<a
										title="Terms and Conditions"
										href="https://www.readytomelt.com/help-and-information/"
										className={footerStyle["nav-link"]}
									>
										Terms and Conditions
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className={"col-md-2 " + footerStyle["copy-right-text"]}> © Melt</div>
					<RegisterModal openModal={openModal} toggle={toggle} />
				</div>
			</div>
		</div>
	);
}
