import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import stylesHeader from "../../styles/header.module.scss";
import { apiGetCall } from "../../utilities/apiServices";
import { apiList } from "../../utilities/constants";

export default function Search() {
	const [tag, setTag] = useState([]);
	const [searchData, setSearchData] = useState("");
	const router = useRouter();
	useEffect(() => {
		tagName();
	}, []);
	const tagName = async () => {
		let arr = [];
		let response = await apiGetCall(apiList.GET_TAG_LIST);

		response?.data?.map((ele) => {
			const trending = ele.attributes.is_trending;
			if (trending) {
				arr.push(ele);
			}
		});
		setTag(arr);
	};

	const searchResult = async () => {
		if (searchData !== "") {
			router.push(`/search/?q=${searchData.toLowerCase()}`);
			document.querySelector("body").classList = [];
			setSearchData("");
		}
	};
	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			searchResult();
		}
	};

	const removeClass = () => {
		document.querySelector("body").classList = [];
	};

	return (
		<div className={stylesHeader["search-copy"]}>
			<form>
				<div className={stylesHeader["searchBox"]}>
					<label htmlFor="search">
						<input
							autoComplete="off"
							type="text"
							placeholder="Search here..."
							size="10"
							className={stylesHeader["search-input"]}
							name="search"
							id="search"
							title="search"
							value={searchData}
							onChange={(e) => setSearchData(e.target.value)}
							onKeyPress={handleKeyPress}
						/>
					</label>
					<span
						className={stylesHeader.button}
						onClick={searchResult}
					>
						Search
					</span>
				</div>
			</form>

			<div className={stylesHeader["tagsWrapper"]}>
				<span className={stylesHeader["tagTitle"]}>Popular Tags</span>
			</div>

			<div className={stylesHeader["tagsWrapper"]}>
				<span className={stylesHeader["tagTitle"]}>Trending</span>
				<ul>
					{tag &&
						tag.map((v, i) => (
							<li key={i}>
								<Link
									className={stylesHeader["badge"]}
									href={"/tag/" + v.attributes.tag_name.toLowerCase()}
									onClick={removeClass}
								>
									{v.attributes.tag_name}
								</Link>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}
