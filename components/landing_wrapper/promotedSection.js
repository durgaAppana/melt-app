import Link from "next/link";

import listingStyle from "../../styles/listing.module.css";
import { baseUrl } from "../../utilities/constants";
import CustomImage from "../common/customImage";

export default function PromotedSection({ articleData = [] }) {
	return (
		<div className={"row " + listingStyle["small_promoted_article"]}>
			{articleData?.length > 0 &&
				articleData.map((item, index) => (
					<div
						className="col-lg-4"
						key={index}
					>
						<Link
							href={"/" + item.attributes?.slug + "/" + item.id}
							className={["rel"] + " " + listingStyle["block"]}
						>
							<CustomImage
								height={150}
								width={200}
								src={item.attributes?.image?.data?.attributes?.url}
								alt={item.attributes?.title}
							/>
						</Link>
						<p
							className={
								listingStyle["cat"] + " " + listingStyle["mar-t-10"] + " " + listingStyle["mar-b-10"]
							}
						>
							{item.attributes?.category?.data?.attributes?.type}
						</p>
						<h2>
							<Link href={"/" + item.attributes?.slug + "/" + item.id}>{item.attributes?.title}</Link>
						</h2>
					</div>
				))}
		</div>
	);
}
