import React, { useEffect, useState } from "react";
import searchStyle from "../../styles/search.module.css";
import SearchList from "./searchList";
import SubscribeMail from "../common/subscribeMail";
import { apiGetCall } from "../../utilities/apiServices";
import { apiList } from "../../utilities/constants";

export default function SearchWrapper({ title }) {

	const [searchList,setSearchList] = useState([])

	useEffect(() => {
		searchdata()
	}, [title])

	const searchdata = async () => {
		let searchData = await apiGetCall(apiList.GET_SEARCH_LIST + title + "&populate=*")
		setSearchList(searchData.data)
	}

	return (
		<section className={searchStyle["section-articles"] + " " + searchStyle["cat-section"]}>
			<div className="row">
				<div className="col-lg-9">
					<SearchList searchList={searchList} />
				</div>
				<div className="col-lg-3">
					<SubscribeMail />
				</div>
			</div>
		</section>
	);
}
