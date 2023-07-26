import React from "react";
import TagList from "./tagList";
import tagStyle from "../../styles/tagList.module.css";
import SubscribeMail from "../common/subscribeMail";

export default function TagWrapper({ tagList, tagName }) {
	return (
		<section className={tagStyle["section-articles"] + " " + tagStyle["cat-section"] + " article"}>
			<div className="row">
				<TagList
					tagList={tagList}
					tagName={tagName}
				/>
				<div className="col-lg-3">
					<SubscribeMail />
				</div>
			</div>
		</section>
	);
}
