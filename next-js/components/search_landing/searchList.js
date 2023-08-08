import React, { useEffect, useState } from "react";
import searchStyle from "../../styles/search.module.css";
import CustomImage from "../common/customImage";
import moment from "moment";
import Link from "next/link";

export default function SearchList({ searchList, searchData, arrRange, totalPages, active }) {
	const filters = [
		{
			value: "relevance",
			label: "Relevance",
		},
		{
			value: "date",
			label: "Date",
		},
	];

	const [filterList, setFilterList] = useState([]);

	useEffect(() => {
		setFilterList(searchList);
	}, [searchList]);

	const filterData = (value) => {
		if (value == "relevance") {
			setFilterList(searchList);
		} else {
			const array = [...searchList];
			array.sort(
				(a, b) => new Date(b.attributes.publishedAt).getTime() - new Date(a.attributes.publishedAt).getTime()
			);
			setFilterList(array);
		}
	};

	return (
		<div className={searchStyle["col-lg-10"]}>
			<h2 className={searchStyle["title"]}>Search Results</h2>

			<div className={searchStyle["body-text"]}>
				<div className={searchStyle["filters-dropdown"]}>
					<div className={searchStyle["gsc-result-info"]}>About {totalPages.total ? totalPages.total : 0} results</div>
					<div>
						<select
							class="form-select form-select-sm"
							onChange={(e) => {
								filterData(e.target.value);
							}}
						>
							{filters.map((list, index) => (
								<option
									value={list.value}
									key={index}
								>
									{list.label}
								</option>
							))}
						</select>
					</div>
				</div>
				{searchList.length > 0 ? (
					<>
						{filterList.map((item, i) => (
							<div className={searchStyle["gsc-webResult"] + " " + searchStyle["gsc-result"]}>
								<div className={searchStyle["gs-title"]}>
									<Link
										className={searchStyle["gs-title"]}
										href={{
											pathname: "/" + item.attributes.slug,
											query: {
												id: item.id,
											},
										}}
									>
										{item.attributes.title.length > 50 ?
											`${item.attributes.title.slice(0, 50)}...`
											: item.attributes.title}
									</Link>
								</div>
								<div className={searchStyle["gsc-url-top"]}>
									<span className={searchStyle["tag-text"]}>Melt</span>
									<span className={searchStyle["dec-text"]}>
										{" "}
										›{" "}
										{item.attributes.title.length > 50
											? `${item.attributes.title.slice(0, 50)}...`
											: item.attributes.title}
									</span>
								</div>
								<div className={searchStyle["gsc-table-result"]}>
									<div className="row">
										<div className={"col-lg-2 " + searchStyle["image-sec"]}>
											<Link
												className="gs-image"
												href={{
													pathname: "/" + item.attributes.slug,
													query: {
														id: item.id,
													},
												}}
											>
												<CustomImage
													className="gs-image"
													src={item.attributes.image.data.attributes.url}
													alt="Thumbnail image"
													width={100}
													height={100}
												/>
											</Link>
										</div>
										<div className={"col-lg-10 " + searchStyle["dec-sec"]}>
											<div className={searchStyle["article-content"]}>
												{moment.utc(item.attributes.publishedAt).format("LL")}...{" "}
												{item.attributes.description.length > 150
													? `${item.attributes.description.slice(0, 150)} ...`
													: item.attributes.description}
												{/* &nbsp;{moment.utc(item.attributes.publishedAt).format("LL")} */}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
						<ul className="pagination justify-content-center">
							{totalPages.total > 10 ? arrRange?.map((v, i) => (<li className={active == v ? 'page-item active' : 'page-item'}><span className="page-link" key={i} onClick={() => searchData(v)}>{v}</span></li>)) : null}
						</ul>
					</>
				) : (
					<h5 className={searchStyle["no-results"]}>No data found</h5>
				)}
			</div>
		</div>
	);
}
