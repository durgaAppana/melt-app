import React, { useState } from "react";
import footerStyle from "./../../styles/footer.module.css";
import RegisterModal from "../common/registorModal";
import Link from "next/link";

export default function Footer() {
	const [openModal, setOpenModal] = useState(false);
	const toggle = () => setOpenModal(!openModal);
	return (
		<div className={footerStyle["footer"]}>
			<div className="container">
				<div className="row">
					<div className="col-md-10">
						<div className="menu-footer">
							<ul className={footerStyle["footer-nav"]}>
								<li className={footerStyle["nav-item"]}>
									<Link
										href="/privacy-policy"
										className={footerStyle["nav-link"]}
									>
										Privacy Policy
									</Link>
								</li>
								<li className={footerStyle["nav-item"]}>
									<Link
										href="/ad-info"
										className={footerStyle["nav-link"]}
									>
										Advertising Opportunities
									</Link>
								</li>
								<li className={footerStyle["nav-item"]}>
									<a
										href="#"
										className={footerStyle["nav-link"]}
										onClick={toggle}
									>
										Register
									</a>
								</li>
								<li className={footerStyle["nav-item"]}>
									<Link
										href="/contact-us"
										className={footerStyle["nav-link"]}
									>
										Contact Us
									</Link>
								</li>
								<li className={footerStyle["nav-item"]}>
									<Link
										href="/about-us"
										className={footerStyle["nav-link"]}
									>
										About Us
									</Link>
								</li>
								<li
									className={footerStyle["nav-item"]}
									style={{ borderRight: "none" }}
								>
									<Link
										title="Terms and Conditions"
										href="/help-and-information"
										className={footerStyle["nav-link"]}
									>
										Terms and Conditions
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className={"col-md-2 " + footerStyle["copy-right-text"]}> © Melt</div>
					<RegisterModal
						openModal={openModal}
						toggle={toggle}
					/>
				</div>
			</div>
		</div>
	);
}
