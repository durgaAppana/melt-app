import React from "react";
import searchStyle from "../../styles/search.module.css";
import SubscribeMail from "../common/subscribeMail";

export default function TermsConditions() {
	return (
		<section className={searchStyle["section-articles"] + " " + searchStyle["cat-section"]}>
			<div className="row">
				<div className="col-lg-9">
					<div className={searchStyle["col-lg-10"]}>
						<h2 className={searchStyle["title"]}>Terms and Conditions</h2>
						<div className={searchStyle["body-text"]}>
							<p>
								Please read the following terms and conditions before using this website. This agreement
								is made between readytomelt.com and you as a site visitor. These terms and conditions
								apply whenever you access the website, on whatever device. By using the website you are
								deemed to have accepted these conditions. Readytomelt.com reserves the right to change
								the terms of this agreement. Changes will be posted on the homepage of this website.
							</p>
							<h3>
								<strong>1) Usage</strong>
							</h3>
							<p>
								Readytomelt.com hereby grants you a non-exclusive, non-transferable license to access
								and use the website under the terms described in this agreement. The content on
								readytomelt.com may not be reproduced, transmitted, or distributed without Kyoorius
								Digital Pvt Ltd’s permission. The user may not commingle any portion of the website with
								any other information and shall not edit, modify, or alter any portion. All of this
								website’s content is either the property of Kyoorius Digital Pvt Ltd or is licensed to
								Kyoorius Digital Pvt Ltd. The user shall honour all reasonable requests by
								readytomelt.com to protect the website’s proprietary interests.
							</p>
							<h3>
								<strong>2) Usage</strong>
							</h3>
							<p>
								All content displayed on this website such as text, graphics, logos, trademarks, button
								icons and images is owned by Kyoorius Digital Pvt Ltd. Kyoorius Digital Pvt Ltd retains
								all copyright and other intellectual property rights with respect to the content
								available and displayed on this website. No part of any published work on
								readytomelt.com may be reproduced, stored in a retrieval system, or transmitted in any
								form or by any means, electronic, mechanical, photocopying, recording, or otherwise,
								without written permission from Kyoorius Digital Pvt Ltd.
							</p>
							<h3>
								<strong>3) Usage</strong>
							</h3>
							<p>
								Neither readytomelt.com nor Kyoorius Digital Pvt Ltd makes any guarantees or warranties
								as to the accuracy or completeness of or results to be obtained from, accessing and
								using the website, the content, other content, or any material that can be accessed (via
								a direct or indirect hyperlink or otherwise) through readytomelt.com.
							</p>
							<h3>
								<strong>4) Usage</strong>
							</h3>
							<p>
								This Agreement constitutes the entire agreement between the parties relating to
								readytomelt.com and supersedes any and all other agreements, oral or in writing, with
								respect to readytomelt.com. The failure of readytomelt.com to insist upon strict
								compliance with any term of this agreement shall not be construed as a waiver with
								regards to any subsequent failure to comply with such term or provision. This agreement
								is personal to you, and you may not assign your rights or obligations to anyone. If any
								provision in this agreement is invalid or unenforceable under applicable law, the
								remaining provisions will continue in full force and effect. This agreement, your rights
								and obligations, and all actions contemplated by this agreement shall be governed by the
								laws of Indian government, as if the agreement was a contract wholly entered into and
								wholly performed within India.
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
