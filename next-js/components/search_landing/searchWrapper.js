import React, { useEffect, useState } from "react";
import searchStyle from "../../styles/search.module.css";
import SearchList from "./searchList";
import SubscribeMail from "../common/subscribeMail";
import { apiGetCall } from "../../utilities/apiServices";
import { apiList } from "../../utilities/constants";

export default function SearchWrapper({ title }) {

	const [searchList, setSearchList] = useState([])
	const [totalPages, setTotalPages] = useState(1);

	const arrRange = [];
	for (let i = 1 - 1; i <= 3 + 1; i++) {
		if (i < 1) continue;
		if (i > totalPages.pageCount) break;
		arrRange.push(i)
	}

	useEffect(() => {
		searchdata()
	}, [title])

	const searchdata = async (v) => {
		let searchData = await apiGetCall(apiList.GET_SEARCH_LIST + title + "&pagination[page]=" + (v ? v : 1) + "&pagination[pageSize]=10" + "&populate=*")
		setTotalPages(searchData.meta.pagination)
		setSearchList(searchData.data)
	}

	return (
		<section className={searchStyle["section-articles"] + " " + searchStyle["cat-section"]}>
			<div className="row">
				<div className="col-lg-9">
					<SearchList totalPages={totalPages} searchList={searchList} searchData={searchdata} arrRange={arrRange} />
				</div>
				<div className="col-lg-3">
					<SubscribeMail />
				</div>
			</div>
		</section>
	);
}
