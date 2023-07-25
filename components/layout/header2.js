import React, { useEffect, useState } from "react";
import styles from "../../styles/header.module.css";
import { apiGetCall } from "../../utilities/apiServices";
import { apiList } from "../../utilities/constants";
import Link from "next/link";

export default function Header2() {
	const [showSearch, setShwSearch] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [menuList, setMenuList] = useState([]);

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
		<div className={styles["headerMain"]}>
			<span className={styles.logo} />
			<div className={styles.menu}>
				<ul>
					{menuList.length > 0 &&
						menuList.length > 0 &&
						menuList.map((menu, index) => (
							<li key={index}>
								<Link
									title={menu.attributes.name}
									href={"/#" + menu.attributes.name.toLowerCase()}
									className="text-dark"
								>
									{menu.attributes.name}
								</Link>
							</li>
						))}
				</ul>
			</div>
			<span className={styles.search} />
		</div>
	);
}
