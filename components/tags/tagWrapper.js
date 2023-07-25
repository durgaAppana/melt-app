import React from "react";
import TagList from "./tagList";
import tagStyle from "../../styles/tagList.module.css";

export default function TagWrapper({ tagList, tagName }) {
	return (
		<section className={tagStyle["section-articles"] + " " + tagStyle["cat-section"] + " article"}>
			<div className="row">
				<TagList tagList={tagList} tagName={tagName}/>
			</div>
		</section>
	);
}
