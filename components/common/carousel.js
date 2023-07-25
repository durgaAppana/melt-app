import React from "react";
import listingStyle from "../../styles/listing.module.css";
import { baseUrl } from "../../utilities/constants";

export default function Carousel({ data, index }) {
	return (
		<div
			className="container"
			style={{ width: "650px", backgroundColor: "none" }}
		>
			<div
				id={"myCarousel" + index}
				className="carousel slide"
				data-ride="carousel"
			>
				<ol className="carousel-indicators">
					<li
						data-target={"#myCarousel" + index}
						data-slide-to="0"
						className="active"
					></li>
					<li
						data-target={"#myCarousel" + index}
						data-slide-to="1"
					></li>
					<li
						data-target={"#myCarousel" + index}
						data-slide-to="2"
					></li>
				</ol>

				<div className="carousel-inner">
					{data.map((item, index) => (
						<div
							className={"item " + (index == 0 ? "active" : "")}
							key={index}
						>
							<div
								className="col-lg-6"
								style={{ width: "335px", marginRight: "2px" }}
							>
								<div className="col-lg-12">
									<a href="https://www.readytomelt.com/ready-melt-anant-rangaswami-podcast-episode-08/">
										<img
											src={baseUrl + item.image_url}
											style={{ height: "130px", width: "230px" }}
										/>
									</a>
									<h2 className={listingStyle["mar-t-10"]}>
										<a href="https://www.readytomelt.com/ready-melt-anant-rangaswami-podcast-episode-08/">
											{item.description}
										</a>
									</h2>
								</div>
							</div>
						</div>
					))}
				</div>

				<a
					className="left carousel-control"
					href={"#myCarousel" + index}
					data-slide="prev"
				>
					<span className="glyphicon glyphicon-chevron-left"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="right carousel-control"
					href={"#myCarousel" + index}
					data-slide="next"
				>
					<span className="glyphicon glyphicon-chevron-right"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
}
