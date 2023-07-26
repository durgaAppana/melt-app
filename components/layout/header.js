import Link from "next/link";
import React, { useEffect, useState } from "react";
import headerStyle from "../../styles/header.module.css";
import Search from "../search/search";
import { apiList } from "../../utilities/constants";
import { apiGetCall } from "../../utilities/apiServices";
import Image from "next/image";

export default function Header() {
	const [showSearch, setShwSearch] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [menuList, setMenuList] = useState([]);

	const toggleShowSearch = () => {
		setShwSearch(!showSearch);
	};

	useEffect(() => {
		getHeaderMenuList();
	}, []);

	const getHeaderMenuList = async () => {
		setIsLoading(true);
		const response = await apiGetCall(apiList.GET_HEADER_MENU_LIST);
		setIsLoading(false);
		setMenuList(response.data);
	};

	return (
		<nav className={"navbar " + headerStyle["shrink"]}>
			<div className="container">
				<div className="logo">
					<Link href="/">
						<Image
							src="/images/melt_white.png"
							alt="logo"
							height={50}
							width={80}
							priority={true}
						/>
					</Link>
				</div>
				<div className={headerStyle["nav-list"]}>
					<ul className={headerStyle["nav-item"]}>
						{menuList.length > 0 &&
							menuList.map((menu, index) => (
								<li
									className={menu.attributes.name == "Marketing" ? "ml-10" : ""}
									key={index}
								>
									<Link
										title={menu.attributes.name}
										href={"/#" + menu.attributes.name.toLowerCase()}
										className="nav-link"
									>
										{menu.attributes.name}
									</Link>
								</li>
							))}
						<li style={{ marginLeft: "100px" }}>
							<span
								title="Search"
								className={"nav-link " + headerStyle["search-icon"]}
								onClick={toggleShowSearch}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									fill="white"
									className="bi bi-search"
									viewBox="0 0 16 16"
									fontWeight="700"
								>
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
								</svg>
							</span>
						</li>
						{showSearch && (
							<div className={headerStyle["search-box"]}>
								<Search />
							</div>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}
