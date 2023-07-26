import React from "react";
import searchStyle from "../../styles/search.module.css";
import CustomImage from "../common/customImage";
import SubscribeMail from "../common/subscribeMail";

export default function SearchList() {
	return (
		<div class={searchStyle["col-lg-10"]}>
			<h2 class={searchStyle["title"]}>Search Results</h2>

			<div className={searchStyle["body-text"]}>
				<div
					class={searchStyle["gsc-result-info"]}
					id="resInfo-1"
				>
					About 2,530 results (0.46 seconds)
				</div>
				<div class={searchStyle["gsc-webResult"] + " " + searchStyle["gsc-result"]}>
					<div class={["gs-title"]}>
						<a
							class="gs-title"
							href="https://www.readytomelt.com/melt-update-15-july-govt-regulation-of-digital-media-and-more/"
							target="_self"
							dir="ltr"
							data-cturl="https://www.google.com/url?client=internal-element-cse&amp;cx=014209595362451613684:xkqmlegozso&amp;q=https://www.readytomelt.com/melt-update-15-july-govt-regulation-of-digital-media-and-more/&amp;sa=U&amp;ved=2ahUKEwiziuat26mAAxWCb2wGHdICB0cQFnoECAcQAg&amp;usg=AOvVaw3BRWVstaecJAH59okURK2r"
							data-ctorig="https://www.readytomelt.com/melt-update-15-july-govt-regulation-of-digital-media-and-more/"
						>
							Melt <b>Update</b> | 15 July | Govt Regulation Of Digital Media and MORE ...
						</a>
					</div>
					<div class={searchStyle["gsc-url-top"]}>
						<span>Melt</span>
						<span>› melt-update-15-july-govt-regulation-of-digital...</span>
					</div>
					<div class={searchStyle["gsc-table-result"]}>
						<div class="row">
							<div className={"col-lg-2 " + searchStyle["image-sec"]}>
								<a
									class="gs-image"
									href="https://www.readytomelt.com/melt-update-15-july-govt-regulation-of-digital-media-and-more/"
								>
									<CustomImage
										class="gs-image"
										src="/uploads/thumbnail_MELT_230624_CTRTM_5d66683d61.jpg"
										alt="Thumbnail image"
									/>
								</a>
							</div>
							<div className="col-lg-10">
								{/* <a
									class="gs-title"
									href="https://www.readytomelt.com/melt-update-15-july-govt-regulation-of-digital-media-and-more/"
								>
									Melt <b>Update</b>| 15 July | Govt Regulation Of Digital Media and MORE ...
								</a>
								<div>
									<span></span>
								</div> */}
								<div class={searchStyle["article-content"]}>
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
