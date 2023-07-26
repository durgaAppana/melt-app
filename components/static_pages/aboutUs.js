import React from "react";
import searchStyle from "../../styles/search.module.css";
import SubscribeMail from "../common/subscribeMail";

export default function AboutUs() {
	return (
		<section className={searchStyle["section-articles"] + " " + searchStyle["cat-section"]}>
			<div className="row">
				<div className="col-lg-9">
					<div className={searchStyle["col-lg-10"]}>
						<h2 className={searchStyle["title"]}>About Us</h2>
						<div className={searchStyle["body-text"]}>
							<p>Marketing is changing. Can the marketer keep up?</p>
							<p>
								Our TV Show ‘MELT’ aims to simplify the complex world of marketing.
								<br />
								Tune in to WION at these times: Saturday @ 11:30am Sunday @ 10:30am IST.
							</p>
							<p>
								Stay tuned to our socials (@readytomelt across Twitter, Facebook and Instagram) for our
								daily Melt Updates – your round-up of the news that matters in the marketing, media and
								advertising world. With so much happening it’s often hard to keep up to speed daily.
								‘Melt Update’ gives you the lowdown of the industry in a nutshell.
							</p>
							<p>
								And our weekly show – ‘Creative Picks’ explores the fascinating world of advertising and
								marketing. On this show, we review the latest communications pieces and marketing
								innovations from around the world. Each episode of ‘Creative Picks’ offers a distinct
								look at marketing campaigns and commercials – digital, television, print etc. In short,
								this channel is your weekly guide to ads and the ad world.
							</p>
							<p>You’ll also find MELT digital interviews, feature stories and opinionated pieces.</p>
							<p>
								Melt is more than just an advertising and marketing magazine and portal. Melt looks at
								the A&amp;M component in the balance sheet, focusing on the outcome of these spends.
								Rather than paying attention to the glamorous and pretty side of advertising, Melt takes
								you to the underbelly, casting light on return on investment, media metrics, research
								and business outcomes.
							</p>
							<p>
								The portal will be interactive, allowing you, the reader, to share your opinion on the
								burning issues of the day, letting you ignite a debate or add your value to a deep
								discussion.
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
