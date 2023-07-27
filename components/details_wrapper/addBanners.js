import React from "react";
import detailsStyle from "../../styles/detail.module.css";
import CommentsSection from "./commentsSection";

export default function AddBanners() {
	return (
		<div className={"row " + detailsStyle["add-banner"]}>
			<h6 className={detailsStyle["banner-title"]}>Sponsored</h6>
			<div className="col-lg-9">
				<div className="row">
					<div className={"col-lg-6 " + detailsStyle["banner-card"]}>
						<a
							href="/"
							target="_blank"
						>
							<img src="https://images.taboola.com/taboola/image/fetch/h_234,w_280,c_pad,b_auto/http%3A//cdn.taboola.com/libtrc/static/thumbnails/eed7d23b67c78b018b8b10f1dc8ec692.jpg" />
							<p className={detailsStyle["master-text"]}>Master React Fundamentals - Free Live Masterclass</p>
							<div className="row">
								<div className="col-lg-6">
									<p className={detailsStyle["banner-title"]}>Scaler data science</p>
								</div>
								<div className="col-lg-6  d-flex justify-content-end">
									<button className={detailsStyle["banner-button"]}>book now</button>
								</div>
							</div>
						</a>
					</div>
					<div className={"col-lg-6 " + detailsStyle["banner-card"]}>
						<a
							href="/"
							target="_blank"
						>
							<img src="https://images.taboola.com/taboola/image/fetch/h_234,w_280,c_pad,b_auto/http%3A//cdn.taboola.com/libtrc/static/thumbnails/eed7d23b67c78b018b8b10f1dc8ec692.jpg" />
							<p className={detailsStyle["master-text"]}>Master React Fundamentals - Free Live Masterclass</p>
							<div className="row">
								<div className="col-lg-6">
									<p className={detailsStyle["banner-title"]}>Scaler data science</p>
								</div>
								<div className="col-lg-6  d-flex justify-content-end">
									<button className={detailsStyle["banner-button"]}>book now</button>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div className="row">
					<div className={"col-lg-4 " + detailsStyle["banner-card"]}>
						<a
							href="/"
							target="_blank"
						>
							<img src="https://images.taboola.com/taboola/image/fetch/h_234,w_280,c_pad,b_auto/http%3A//cdn.taboola.com/libtrc/static/thumbnails/eed7d23b67c78b018b8b10f1dc8ec692.jpg" />
							<p className={detailsStyle["master-text"]}>Master React Fundamentals - Free Live Masterclass</p>
							<div className="row">
								<div className="col-lg-8">
									<p className={detailsStyle["banner-title"]}>Scaler data science</p>
								</div>
								<div className="col-lg-4  d-flex justify-content-end">
									<button className={detailsStyle["small-button"]}>book now</button>
								</div>
							</div>
						</a>
					</div>
					<div className={"col-lg-4 " + detailsStyle["banner-card"]}>
						<a
							href="/"
							target="_blank"
						>
							<img src="https://images.taboola.com/taboola/image/fetch/h_234,w_280,c_pad,b_auto/http%3A//cdn.taboola.com/libtrc/static/thumbnails/eed7d23b67c78b018b8b10f1dc8ec692.jpg" />
							<p className={detailsStyle["master-text"]}>Master React Fundamentals - Free Live Masterclass</p>
							<div className="row">
								<div className="col-lg-8">
									<p className={detailsStyle["banner-title"]}>Scaler data science</p>
								</div>
								<div className="col-lg-4 d-flex justify-content-end">
									<button className={detailsStyle["small-button"]}>book now</button>
								</div>
							</div>
						</a>
					</div>
					<div className={"col-lg-4 " + detailsStyle["banner-card"]}>
						<a
							href="/"
							target="_blank"
						>
							<img src="https://images.taboola.com/taboola/image/fetch/h_234,w_280,c_pad,b_auto/http%3A//cdn.taboola.com/libtrc/static/thumbnails/eed7d23b67c78b018b8b10f1dc8ec692.jpg" />
							<p className={detailsStyle["master-text"]}>Master React Fundamentals - Free Live Masterclass</p>
							<div className="row">
								<div className="col-lg-8">
									<p className={detailsStyle["banner-title"]}>Scaler data science</p>
								</div>
								<div className="col-lg-4  d-flex justify-content-end">
									<button className={detailsStyle["small-button"]}>book now</button>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div className={"row mt-5"}>
					<div className={detailsStyle["comments-section"]}>
						<div className={detailsStyle["comments-count"]}>Comments</div>
						<div className={detailsStyle["comments-count"]}>Login</div>
					</div>
					<CommentsSection />
				</div>
			</div>
		</div>
	);
}
