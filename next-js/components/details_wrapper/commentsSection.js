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
	const [userName, setUserName] = useState();
	const [active, setActive] = useState(false);
	const [isUserFavorite, setIsUserFavorite] = useState(false);
	const [articleFavoriteCount, setArticleFavoriteCount] = useState("");

	useEffect(() => {
		getArticleComments();
		setUserName(JSON.parse(localStorage.getItem("userData")));
		getArticleFavoritesCount();
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
					setUserName(JSON.parse(localStorage.getItem("userData")));
				}
			} else {
				localStorage.setItem("userData", JSON.stringify(response[0]));
				setUserName(JSON.parse(localStorage.getItem("userData")));
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
		if (commentText == "" || userData == null) return toggle();

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
			setCommentText("");
		}
	};

	const getArticleComments = async () => {
		const response = await apiGetCall(apiList.GET_ARTICLE_COMMENTS + detailsData.id);

		if (response?.data?.length > 0) {
			setCommentsList(response.data);
		}
	};

	const textareaComm = () => {
		if (active) {
			setActive(active);
		} else {
			setActive(!active);
		}
	};

	const getArticleFavoritesCount = async () => {
		const userData = JSON.parse(localStorage.getItem("userData"));

		const response = await apiGetCall(apiList.ADD_ARTICLES_FAVORITES_COUNT + detailsData.id);
		setArticleFavoriteCount(response?.data?.length);

		if (response?.data?.length > 0 && userData != null) {
			const isUserLiked = response.data.filter((item) => item.attributes.user_id == userData?.id)[0];
			setIsUserFavorite(isUserLiked?.attributes?.is_liked);
		}
	};

	const userAddFavorite = async () => {
		const userData = JSON.parse(localStorage.getItem("userData"));
		if (userData == null) return toggle();

		const payload = {
			data: {
				article_id: detailsData.id,
				user_id: userData?.id,
			},
		};

		setIsLoading(true);
		const response = await apiPostCall(apiList.ADD_USER_FAVORITE, {}, payload);
		setIsLoading(false);

		if (response.status) {
			setIsUserFavorite(response.is_liked);
			getArticleFavoritesCount();
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
							onClick={textareaComm}
							className="form-control"
							name="comments"
							rows={active ? 6 : 2}
							value={commentText}
							onChange={(e) => {
								setCommentText(e.target.value);
							}}
						/>
						{active && (
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
						)}
					</div>
				</div>
			</div>
			<div className="row">
				<div className="p-4">
					{isUserFavorite ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="#b3a479"
							className="bi bi-heart-fill"
							viewBox="0 0 16 16"
							onClick={userAddFavorite}
							disabled={isLoading}
						>
							<path
								fill-rule="evenodd"
								d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-heart"
							viewBox="0 0 16 16"
							onClick={userAddFavorite}
							disabled={isLoading}
						>
							<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
						</svg>
					)}
					&nbsp;&nbsp;<span className={detailsStyle["likes-count"]}>{articleFavoriteCount}</span>
				</div>
			</div>
			<div className={detailsStyle["comment"]}>
				{userName ? (
					<p>
						Sign Out user
						<button
							className={detailsStyle["button"]}
							onClick={logout}
						>
							logout
						</button>
					</p>
				) : (
					<>
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
							<button onClick={toggle}>login</button>
						</div>
					</>
				)}
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
				setUserName={setUserName}
				toggle={toggle}
				openModal={openModal}
			/>
		</>
	);
}
