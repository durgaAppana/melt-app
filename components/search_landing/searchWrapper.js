import React from "react";
import searchStyle from "../../styles/search.module.css";
import SearchList from "./searchList";
import SubscribeMail from "../common/subscribeMail";

export default function SearchWrapper() {
	return (
		<section className={searchStyle["section-articles"] + " " + searchStyle["cat-section"]}>
			<div className="row">
				<div class="col-lg-9">
					<SearchList />
				</div>
				<div className="col-lg-3">
					<SubscribeMail />
				</div>
			</div>
		</section>
	);
}
