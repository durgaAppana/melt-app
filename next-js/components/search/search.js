import React, { useEffect, useState } from "react";
import stylesHeader from "../../styles/header.module.scss";
import { apiGetCall } from "../../utilities/apiServices";
import { apiList } from "../../utilities/constants";

export default function Search() {
	const [tag,setTag] = useState()
	useEffect(()=>{
		tagName()
	},[])
	const tagName = async()=>{
		let response = await apiGetCall(apiList.GET_TAG_LIST)
		setTag(response)
	}
	return (
		<div className={stylesHeader["search-copy"]}>
			<form>
				<div className={stylesHeader["searchBox"]}>
					<input
						autoComplete="off"
						type="search"
						placeholder="Search here..."
						size="10"
						className={stylesHeader["search-input"]}
						name="search"
						title="search"
					/>
					<span className={stylesHeader.button}>Search</span>
					{/* <div className="gsst_b" id="gs_st50" dir="ltr">
						<a
							className="gsst_a"
							href="javascript:void(0)"
							title="Clear search box"
							role="button"
						>
							<span
								className="gscb_a"
								id="gs_cb50"
								aria-hidden="true"
							>
								×
							</span>
						</a>
					</div> */}
				</div>
			</form>

			<div className={stylesHeader["tagsWrapper"]}>
				<span className={stylesHeader["tagTitle"]}>Popular Tags</span>
			</div>

			<div className={stylesHeader["tagsWrapper"]}>
				<span className={stylesHeader["tagTitle"]}>Trending</span>
				<ul>
					<li>
						<a
							href="https://www.readytomelt.com/tag/melt/"
							className={stylesHeader["badge"]}
						>
							MELT
						</a>
					</li>
					<li>
						<a
							href="https://www.readytomelt.com/tag/creative-picks/"
							className={stylesHeader["badge"]}
						>
							Creative Picks
						</a>
					</li>
					<li>
						<a
							href="https://www.readytomelt.com/tag/melt-in-a-minute/"
							className={stylesHeader["badge"]}
						>
							Melt in a Minute
						</a>
					</li>
					<li>
						<a
							href="https://www.readytomelt.com/tag/ad-review/"
							className={stylesHeader["badge"]}
						>
							Ad Review
						</a>
					</li>
					<li>
						<a
							href="https://www.readytomelt.com/tag/anant-rangaswami/"
							className={stylesHeader["badge"]}
						>
							Anant Rangaswami
						</a>
					</li>
					<li>
						<a
							href="https://www.readytomelt.com/tag/advertising/"
							className={stylesHeader["badge"]}
						>
							Advertising
						</a>
					</li>
					<li>
						<a
							href="https://www.readytomelt.com/tag/facebook/"
							className={stylesHeader["badge"]}
						>
							Facebook
						</a>
					</li>
					<li>
						<a
							href="https://www.readytomelt.com/tag/marketing/"
							className={stylesHeader["badge"]}
						>
							Marketing
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
