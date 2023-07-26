import React from "react";
import searchStyle from "../../styles/search.module.css";
import SubscribeMail from "../common/subscribeMail";

export default function PrivacyPolicy() {
	return (
		<section className={searchStyle["section-articles"] + " " + searchStyle["cat-section"]}>
			<div className="row">
				<div className="col-lg-9">
					<div className={searchStyle["col-lg-10"]}>
						<h2 className={searchStyle["title"]}>Privacy Policy</h2>
						<div className={searchStyle["body-text"]}>
							<p>
								Ready to melt.com is a property of Kyoorius Digital Pvt Ltd. Your use of our site
								indicates to us that you have read and accepted our Privacy Policy and our Terms &amp;
								Conditions. The aim of this policy is to tell you how we will use any personal
								information we collect or you provide through our websites. Please read it carefully
								before you proceed.
							</p>
							<p>
								This Privacy Policy is subject to change at any time. When we make any material change,
								we will inform you by posting a notice on the home page of this site. Regularly
								reviewing this page ensures that you are always aware of what personal information we
								collect, how we use it and under what circumstances if any, we will share it with other
								parties.When you subscribe, register, make purchases or at other times, we collect and
								store personally identifiable information from you that may include your name, postal
								(including pin code) and email addresses, credit card or debit card information, sex,
								age, medical records and history, sexual orientation, biometric information, passwords,
								facts about your profession, company, responsibilities and information regarding your
								computer system. We may from time to time obtain data from third-parties such as
								business partners or other companies and append it to existing user data to add more
								detail to the information we have about you.
							</p>
							<p>
								When you subscribe, register, make purchases or at other times, we collect and store
								personally identifiable information from you that may include your name, postal
								(including pin code) and email addresses, credit card or debit card information, sex,
								age, medical records and history, sexual orientation, biometric information, passwords,
								facts about your profession, company, responsibilities and information regarding your
								computer system. We may from time to time obtain data from third-parties such as
								business partners or other companies and append it to existing user data to add more
								detail to the information we have about you.For each visitor to this site, our web
								server may automatically attempt to identify the user through a cookie set within your
								browser. This is done to provide access to the site. From time to time, we may also
								track information, in aggregate, on pages and features that users access or view. The
								activity is collected and stored in our server’s log files.
							</p>
							<p>
								For each visitor to this site, our web server may automatically attempt to identify the
								user through a cookie set within your browser. This is done to provide access to the
								site. From time to time, we may also track information, in aggregate, on pages and
								features that users access or view. The activity is collected and stored in our server’s
								log files.
							</p>
							<p>
								We may use third-party advertising service vendors to serve advertisements on this site.
								These vendors may use cookies, web beacons or similar technologies to serve you
								advertisements tailored to interests you have shown by browsing on this and other sites
								you have visited. In doing so, these vendors may collect non-personal data such as your
								browser type, your operating system, web pages visited, time of visits, content viewed,
								ads viewed and other clickstream data. The use of cookies, web beacons or similar
								technologies by these advertising service vendors is subject to their own privacy
								policies, not ours, and we disclaim all liability in connection therewith. Information
								collected about subscribers and users may be used by us, our affiliates and partnering
								third-party companies to provide subscribers and users with the features of the site, to
								enable us to provide the products you requested, to personalise content and advertising,
								to send you e-mail notifications about our services and products, for audits, to perform
								statistical analysis of user behavior in order to measure interest in the various areas
								of our site (such as for product development purposes), to enforce our user agreement
								and to inform advertisers as to how many users have seen or “clicked” their advertising
								banners. We will disclose site usage information to third-parties only in aggregate.
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
