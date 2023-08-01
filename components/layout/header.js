import React, { useEffect, useState } from "react";
import stylesHeader from "../../styles/header.module.scss"
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
				if (window.scrollY > 600 && window.scrollY < 1800) {
					setActiveSection("marketing");
				} else if (window.scrollY > 1801 && window.scrollY < 3000) {
					setActiveSection("media");
				} else if (window.scrollY > 3001 && window.scrollY < 4200) {
					setActiveSection("advertising");
				} else if (window.scrollY > 4201 && window.scrollY < 5500) {
					setActiveSection("research");
				}
			}
		});
	}, []);
	const handleClick = (e) => {
		document.querySelector('body').classList.toggle(stylesHeader["activateHeader"])
	}

	return (
		<div className={!scroll ? stylesHeader["headerMain"] : stylesHeader.headerMain + " " + stylesHeader.scrolled}>
			<div className={stylesHeader.headerCopy + " " + "container"}>
				<div className={stylesHeader["burgerButton"]} onClick={handleClick}>
					<span className={stylesHeader["copy"]}></span>
				</div>
				<Link href="/">
					<span className={stylesHeader.logo} />
				</Link>
				<div className={stylesHeader.menu}>
					<ul>
						{menuList.length > 0 &&
							menuList.length > 0 &&
							menuList.map((menu, index) => (
								<li
									key={index}
									onClick={() => {
										localStorage.setItem("sectionName", menu.attributes.name.toLowerCase());
									}}
									className={activeSection == menu.attributes.name.toLowerCase() ? stylesHeader.active : ""}
								>
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
						className={stylesHeader.search}
						onClick={toggleShowSearch}
					></span>
					{showSearch && (
						<div className={stylesHeader["search-box"]}>
							<Search />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
