import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import moment from "moment";

import detailsStyle from "../../styles/detail.module.css";
import { apiList, baseUrl } from "../../utilities/constants";
import { apiGetCall, apiPostCall } from "../../utilities/apiServices";
import LoginModal from "../common/loginModal";

export default function CommentsSection({ detailsData }) {
	const { data: session, status } = useSession();
	const [isLoading, setIsLoading] = useState(false);
	const [commentText, setCommentText] = useState("");
	const [commentsList, setCommentsList] = useState([]);
	const [openModal, setOpenModal] = useState(false);
	const [userName, setUserName] = useState()
	useEffect(() => {
		getArticleComments();
		setUserName(JSON.parse(localStorage.getItem("userData")))
	}, []);

	useEffect(() => {
		userDataAuth();
	}, [status]);

	const userDataAuth = async () => {
		if (status == "authenticated") {
			const payload = {
				username: session?.user.name,
				email: session?.user.email,
				password: session?.user.email,
				provider: "local",
				confirmed: true,
				blocked: false,
			};
			let response = await apiGetCall(apiList.GET_ALL_USER + session?.user.email);
			if (response.length == 0) {
				let response1 = await apiPostCall(apiList.GET_USER_LOGIN, {}, payload);
				if (response1.jwt) {
					localStorage.setItem("userData", JSON.stringify(response1.user));
				}
			} else {
				localStorage.setItem("userData", JSON.stringify(response[0]));
			}
		}
	};
	const toggle = () => setOpenModal(!openModal);

	const loginUser = async () => {
		signIn("google", {
			callbackUrl: "http://localhost:3000" + "/" + detailsData.attributes.slug + `?id=${detailsData.id}`,
		});
	};

	const logout = () => {
		localStorage.clear();
		signOut();
	};

	const userComments = async (e) => {
		const userData = JSON.parse(localStorage.getItem("userData"));
		if (commentText == "" || userData == "null") return false;
		console.log("userData", commentText, userData, typeof userData);

		const payload = {
			data: {
				comments: commentText,
				article_id: detailsData.id,
				user_id: userData?.id,
				user_name: userData?.username,
			},
		};

		setIsLoading(true);
		const response = await apiPostCall(apiList.USER_COMMENTS, {}, payload);
		setIsLoading(false);

		if (response.status) {
			getArticleComments();
			setCommentText("")
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
				<div className={detailsStyle["comments-count"]}>{userName?.username ?? "Login"}</div>
			</div>
			<div className={detailsStyle["compose-wrapper"]}>
				<div className={detailsStyle["avatar"]}>
					<span className={detailsStyle["user"] + " " + detailsStyle["user-refresh"]}>
						<div>{userName?.username[0] ?? "G"}</div>
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
							value={commentText}
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
				{userName ?
					<button onClick={logout}>logout</button>
					:
					<button onClick={toggle}>login</button>
				}
			</div>
			<div className={detailsStyle["comments-list"]}>
				{commentsList &&
					commentsList.length > 0 &&
					commentsList.map((list, index) => (
						<div
							className="d-flex"
							key={index}
						>
							<div className={detailsStyle["avatar"]}>
								<span className={detailsStyle["user"] + " " + detailsStyle["user-refresh"]}>
									<div>{list?.attributes?.user_name[0]}</div>
								</span>
							</div>
							<div className={detailsStyle["comments-sec"]}>
								<h4>{list.attributes.user_name}</h4>
								<span>{moment.utc(list.attributes.publishedAt).fromNow()}</span>
								<p>{list.attributes.comments}</p>
							</div>
						</div>
					))}
			</div>
			<LoginModal
				toggle={toggle}
				openModal={openModal}
			/>
		</>
	);
}
