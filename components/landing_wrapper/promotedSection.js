import Link from "next/link";

import listingStyle from "../../styles/listing.module.css";
import { baseUrl } from "../../utilities/constants";

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
							href={{
								pathname: "/" + item.attributes?.slug,
								query: {
									id: item.id,
								},
							}}
							className={["rel"] + " " + listingStyle["block"]}
						>
							<img src={baseUrl + item.attributes?.image?.data?.attributes?.url} />
						</Link>
						<p
							className={
								listingStyle["cat"] + " " + listingStyle["mar-t-10"] + " " + listingStyle["mar-b-10"]
							}
						>
							{item.attributes?.category?.data?.attributes?.type}
						</p>
						<h2>
							<a href="https://www.readytomelt.com/melt-tv-episode-221-ar-rahman-on-creativity-highlights-from-the-2023-kyoorius-creative-awards/">
								{item.attributes?.title}
							</a>
						</h2>
					</div>
				))}
			{/* <div className="col-lg-4">
				<a
					href="https://www.readytomelt.com/melt-tv-episode-221-ar-rahman-on-creativity-highlights-from-the-2023-kyoorius-creative-awards/"
					className={["rel"] + " " + listingStyle["block"]}
				>
					<img src="https://www.readytomelt.com/wp-content/uploads/2023/06/MELT-230610-CTRTM.jpg" />
				</a>
				<p className={listingStyle["cat"] + " " + listingStyle["mar-t-10"] + " " + listingStyle["mar-b-10"]}>
					Advertising:
				</p>
				<h2>
					<a href="https://www.readytomelt.com/melt-tv-episode-221-ar-rahman-on-creativity-highlights-from-the-2023-kyoorius-creative-awards/">
						Melt TV | Episode 221 | AR Rahman on Creativity | Highlights From The 2023 Kyoorius Creative
						Awards
					</a>
				</h2>
			</div>
			<div className="col-lg-4">
				<a
					href="https://www.readytomelt.com/melt-tv-episode-221-ar-rahman-on-creativity-highlights-from-the-2023-kyoorius-creative-awards/"
					className={["rel"] + " " + listingStyle["block"]}
				>
					<img src="https://www.readytomelt.com/wp-content/uploads/2023/06/MELT-230610-CTRTM.jpg" />
				</a>
				<p className={listingStyle["cat"] + " " + listingStyle["mar-t-10"] + " " + listingStyle["mar-b-10"]}>
					Advertising:
				</p>
				<h2>
					<a href="https://www.readytomelt.com/melt-tv-episode-221-ar-rahman-on-creativity-highlights-from-the-2023-kyoorius-creative-awards/">
						Melt TV | Episode 221 | AR Rahman on Creativity | Highlights From The 2023 Kyoorius Creative
						Awards
					</a>
				</h2>
			</div> */}
		</div>
	);
}
