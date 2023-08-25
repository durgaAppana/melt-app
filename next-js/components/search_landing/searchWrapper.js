import React, { useEffect, useState } from "react";
import searchStyle from "../../styles/search.module.css";
import SearchList from "./searchList";
import SubscribeMail from "../common/subscribeMail";
import { apiGetCall } from "../../utilities/apiServices";
import { apiList } from "../../utilities/constants";
import DefaultSearch from "../default/defaultSearch";

export default function SearchWrapper({ title }) {

	const [searchList, setSearchList] = useState([])
	const [totalPages, setTotalPages] = useState(1);
	const [active, setActive] = useState()
	const [isLoading, setIsLoading] = useState(false)

	const arrRange = [];
	for (let i = 1 - 1; i <= totalPages.pageCount + 1; i++) {
		if (i < 1) continue;
		if (i > totalPages.pageCount) break;
		arrRange.push(i)
	}
	useEffect(() => {
		searchdata()
	}, [title])
	const searchdata = async (v) => {
		setIsLoading(true)
		let searchData = await apiGetCall(apiList.GET_SEARCH_LIST + title + "&pagination[page]=" + (v ? v : 1) + "&pagination[pageSize]=10" + "&populate=*")
		if (searchData?.data.length > 0) {
			setSearchList(searchData.data)
			setIsLoading(false)
		}
		setTotalPages(searchData.meta.pagination)
		setActive(v ? v : 1)
	}

	return (

				<section className={searchStyle["section-articles"] + " " + searchStyle["cat-section"]}>
					<div className="row">
						<div className="col-lg-9">
							<SearchList isLoading={isLoading} active={active} totalPages={totalPages} searchList={searchList} searchData={searchdata} arrRange={arrRange} />
						</div>
						<div className="col-lg-3">
							<SubscribeMail />
						</div>
					</div>
				</section>
	);
}
