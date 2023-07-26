import React from "react";
import searchStyle from "../../styles/search.module.css";
import CustomImage from "../common/customImage";

export default function SearchList() {
	return (
		<div className={searchStyle["col-lg-10"]}>
			<h2 className={searchStyle["title"]}>Search Results</h2>

			<div className={searchStyle["body-text"]}>
				<div
					className={searchStyle["gsc-result-info"]}
					id="resInfo-1"
				>
					About 2,530 results (0.46 seconds)
				</div>
				<div className={searchStyle["gsc-webResult"] + " " + searchStyle["gsc-result"]}>
					<div className={["gs-title"]}>
						<a
							className="gs-title"
							href="https://www.readytomelt.com/melt-update-15-july-govt-regulation-of-digital-media-and-more/"
							target="_self"
							dir="ltr"
							data-cturl="https://www.google.com/url?client=internal-element-cse&amp;cx=014209595362451613684:xkqmlegozso&amp;q=https://www.readytomelt.com/melt-update-15-july-govt-regulation-of-digital-media-and-more/&amp;sa=U&amp;ved=2ahUKEwiziuat26mAAxWCb2wGHdICB0cQFnoECAcQAg&amp;usg=AOvVaw3BRWVstaecJAH59okURK2r"
							data-ctorig="https://www.readytomelt.com/melt-update-15-july-govt-regulation-of-digital-media-and-more/"
						>
							Melt <b>Update</b> | 15 July | Govt Regulation Of Digital Media and MORE ...
						</a>
					</div>
					<div className={searchStyle["gsc-url-top"]}>
						<span>Melt</span>
						<span>› melt-update-15-july-govt-regulation-of-digital...</span>
					</div>
					<div className={searchStyle["gsc-table-result"]}>
						<div className="row">
							<div className={"col-lg-2 " + searchStyle["image-sec"]}>
								<a
									className="gs-image"
									href="https://www.readytomelt.com/melt-update-15-july-govt-regulation-of-digital-media-and-more/"
								>
									<CustomImage
										className="gs-image"
										src="/uploads/thumbnail_MELT_230624_CTRTM_5d66683d61.jpg"
										alt="Thumbnail image"
									/>
								</a>
							</div>
							<div className="col-lg-10">
								{/* <a
									className="gs-title"
									href="https://www.readytomelt.com/melt-update-15-july-govt-regulation-of-digital-media-and-more/"
								>
									Melt <b>Update</b>| 15 July | Govt Regulation Of Digital Media and MORE ...
								</a>
								<div>
									<span></span>
								</div> */}
								<div className={searchStyle["article-content"]}>
									15-Jul-2022 <b>...</b> Top News: 1. <b>Update</b>: Govt Regulation Of Digital Media
									The government has started the process to propose changes to the Registration of
									Press&nbsp;...
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
