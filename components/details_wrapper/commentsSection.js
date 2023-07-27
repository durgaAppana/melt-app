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
					<Image
						src="/images/fb-icon.png"
						height="40"
						width="40"
                        alt="fb"
					/>
				</div>
				<div className="social-img">
					<Image
						src="/images/twitter.png"
						height="40"
						width="40"
                        alt="twitter"
					/>
				</div>
				<div className="social-img">
					<Image
						src="/images/google.png"
						height="40"
						width="40"
                        alt="google"

					/>
				</div>
			</div>
		</form>
	);
}
