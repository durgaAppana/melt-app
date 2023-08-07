import React from "react";
import Image from "next/image";

import detailsStyle from "../../styles/detail.module.css";

export default function CommentsSection() {
	return (
		<form>
			<div className={detailsStyle["compose-wrapper"]}>
				<div className={detailsStyle["avatar"]}>
					<span className={detailsStyle["user"] + " " + detailsStyle["user-refresh"]}>
						<div>G</div>
					</span>
				</div>
				<div className={detailsStyle["textarea-outer-wrapper"]}>
					<div
						className={detailsStyle["textarea-wrapper"]}
						data-role="textarea"
						dir="auto"
					>
						<div
							className={detailsStyle["textarea"]}
							role="textbox"
							aria-multiline="true"
							contentEditable="PLAINTEXT-ONLY"
							data-role="editable"
							aria-label="Start the discussion…"
							suppressContentEditableWarning={true}
						>
							<p></p>
						</div>

						<div className="text-editor-container">
							<div className={detailsStyle["post-actions"]}>
								<div className={detailsStyle["temp-post"]}>
									<button
										type="submit"
										className={detailsStyle["comment-btn"]}
									>
										Comment
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={detailsStyle["login-text"]}>
				<p>log in with</p>
			</div>
			<div className={detailsStyle["social-media"]}>
				<div className="social-img">
					<a
						href="http://www.facebook.com/sharer.php?u=http://test.ready.com/barc-sir-martin-sorrell-stupefied-disappointed/&amp;t=BARC: Sir Martin Sorrell ‘Stupefied &amp; Disappointed’"
						target="_blank"
					>
						<Image
							src="/images/fb-icon.png"
							height="40"
							width="40"
							alt="fb"
						/>
					</a>
				</div>
				<div className="social-img">
					<a
						href="http://twitter.com/home/?status=Sir+Martin+Sorrell+%28Founder+%26+Executive+Chairman%2C+S4+Capital%29+reacts+to+the+unfolding+%27TRP+scam%27+involving+BARC.+@readytomelt http://test.ready.com/barc-sir-martin-sorrell-stupefied-disappointed/"
						target="_blank"
					>
						<Image
							src="/images/twitter.png"
							height="40"
							width="40"
							alt="twitter"
						/>
					</a>
				</div>
				<div className="social-img">
					<a
						href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://test.ready.com/barc-sir-martin-sorrell-stupefied-disappointed/"
						target="_blank"
					>
						<Image
							src="/images/google.png"
							height="40"
							width="40"
							alt="google"
						/>
					</a>
				</div>
			</div>
		</form>
	);
}
