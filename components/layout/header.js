import React, { useEffect, useState } from "react";
import styles from "../../styles/header.module.css";
import { apiGetCall } from "../../utilities/apiServices";
import { apiList } from "../../utilities/constants";
import Link from "next/link";
import Search from "../search/search";
import { useRouter } from "next/router";

export default function Header() {
	const router = useRouter();
	const [showSearch, setShwSearch] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [menuList, setMenuList] = useState([]);
	const [activeSection, setActiveSection] = useState("");

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
			if (router.pathname == "/") {
				if (window.scrollY >= 600 && window.scrollY < 1800) {
					setActiveSection("marketing");
				} else if (window.scrollY > 1801 && window.scrollY < 3000) {
					setActiveSection("media");
				} else if (window.scrollY > 3001 && window.scrollY < 4200) {
					setActiveSection("advertising");
				} else if (window.scrollY > 4201 && window.scrollY < 5500) {
					setActiveSection("research");
				} else {
					setActiveSection("");
				}
			} else {
				setActiveSection("");
			}
		});
	}, []);

	return (
		<div className={!scroll ? styles["headerMain"] : styles.headerMain + " " + styles.scrolled}>
			<div className={styles.headerCopy + " " + "container"}>
				<Link href="/" aria-label="melt">
					<span className={styles.logo} />
				</Link>
				<div className={styles.menu}>
					<ul>
						{menuList.length > 0 &&
							menuList.length > 0 &&
							menuList.map((menu, index) => (
								<li
									key={index}
									onClick={() => {
										localStorage.setItem("sectionName", menu.attributes.name.toLowerCase());
									}}
									className={activeSection == menu.attributes.name.toLowerCase() ? styles.active : ""}
								>
									<Link
										title={menu.attributes.name}
										href={"/#" + menu.attributes.name.toLowerCase()}
										aria-label={menu.attributes.name}
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
