import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

import detailsStyle from "../../styles/detail.module.css";
import { apiList, baseUrl } from "../../utilities/constants";
import { apiGetCall, apiPostCall } from "../../utilities/apiServices";

export default function CommentsSection({ detailsData }) {
	const { data: session, status } = useSession();

	const [isLoading, setIsLoading] = useState(false);
	const [commentText, setCommentText] = useState("");
	const [commentsList, setCommentsList] = useState([]);

	useEffect(() => {
		getArticleComments();
	}, []);

	const loginUser = () => {
		signIn("google", {
			callbackUrl: "http://localhost:3000" + "/" + detailsData.attributes.slug + `?id=${detailsData.id}`,
		});
	};

	const userComments = async (e) => {
		if (commentText == "") return false;

		const payload = {
			data: {
				comments: commentText,
				article_id: detailsData.id,
				user_id: "3",
				user_name: session?.user?.name,
			},
		};

		setIsLoading(true);
		const response = await apiPostCall(apiList.USER_COMMENTS, {}, payload);
		setIsLoading(false);

		if (response.status) {
			getArticleComments();
		}
	};

	const getArticleComments = async () => {
		const response = await apiGetCall(apiList.GET_ARTICLE_COMMENTS + detailsData.id);

		if (response?.data?.length > 0) {
			setCommentsList(response.data);
		}
	};

	return (
		<>
			<div className={detailsStyle["comments-section"]}>
				<div className={detailsStyle["comments-count"]}>
					{commentsList.length > 0 && commentsList.length + " "}Comments
				</div>
				<div className={detailsStyle["comments-count"]}>{session?.user?.name ?? "Login"}</div>
			</div>
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
						<textarea
							className="form-control"
							name="comments"
							type="text"
							onChange={(e) => {
								setCommentText(e.target.value);
							}}
						/>
						<div className="text-editor-container">
							<div className={detailsStyle["post-actions"]}>
								<div className={detailsStyle["temp-post"]}>
									<button
										className={detailsStyle["comment-btn"]}
										onClick={(e) => userComments(e)}
										disabled={isLoading}
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
						onClick={() => loginUser()}
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
			<div>
				{commentsList &&
					commentsList.length > 0 &&
					commentsList.map((list, index) => (
						<div>
							<p>{list.attributes.user_name}</p>
							<p>{list.attributes.comments}</p>
							<p>{list.attributes.publishedAt}</p>
						</div>
					))}
			</div>
		</>
	);
}
