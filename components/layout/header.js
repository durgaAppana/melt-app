import React, { useEffect, useState } from "react";
import styles from "../../styles/header.module.css";
import { apiGetCall } from "../../utilities/apiServices";
import { apiList } from "../../utilities/constants";
import Link from "next/link";
import Search from "../search/search";

export default function Header() {
	const [showSearch, setShwSearch] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [menuList, setMenuList] = useState([]);

	useEffect(() => {
		getHeaderMenuList();
	}, []);

	const toggleShowSearch = () => {
		setShwSearch(!showSearch);
	};

	const getHeaderMenuList = async () => {
		setIsLoading(true);
		const response = await apiGetCall(apiList.GET_HEADER_MENU_LIST);
		setIsLoading(false);
		setMenuList(response.data);
	};

	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 20);
		});
	}, []);

	return (
		<div className={!scroll ? styles["headerMain"] : styles.headerMain + " " + styles.scrolled}>
			<div className={styles.headerCopy + " " + "container"}>
				<Link href="/">
					<span className={styles.logo} />
				</Link>
				<div className={styles.menu}>
					<ul>
						{menuList.length > 0 &&
							menuList.length > 0 &&
							menuList.map((menu, index) => (
								<li key={index}>
									<Link
										title={menu.attributes.name}
										href={"/#" + menu.attributes.name.toLowerCase()}
										// className="text-dark"
									>
										{menu.attributes.name}
									</Link>
								</li>
							))}
					</ul>
					<span
						className={styles.search}
						onClick={toggleShowSearch}
					></span>
					{showSearch && (
						<div className={styles["search-box"]}>
							<Search />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
