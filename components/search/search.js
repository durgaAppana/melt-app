import React from "react";
import headerStyle from "../../styles/header.module.css";

export default function Search() {
	return (
		<div className="search-box">
			<form>
				<div className="gsc-input-box">
					<input
						autocomplete="off"
						type="text"
						size="10"
						className={headerStyle["search-input"]}
						name="search"
						title="search"
					/>
					<div
						className="gsst_b"
						id="gs_st50"
						dir="ltr"
					>
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
					</div>
				</div>
			</form>

			<div className="row">
				<div className="col-lg-12">
					<span className={headerStyle["tags-text"]}>Popular Tags</span>
				</div>
			</div>
			<div className="row mt-3 p-3">
				<div className="col-lg-12">
					<span className={headerStyle["tags-text"]}>Trending</span>
					<a
						href="https://www.readytomelt.com/tag/melt/"
						className={headerStyle["badge"]}
					>
						MELT
					</a>
					<a
						href="https://www.readytomelt.com/tag/creative-picks/"
						className={headerStyle["badge"]}
					>
						Creative Picks
					</a>
					<a
						href="https://www.readytomelt.com/tag/melt-in-a-minute/"
						className={headerStyle["badge"]}
					>
						Melt in a Minute
					</a>
					<a
						href="https://www.readytomelt.com/tag/ad-review/"
						className={headerStyle["badge"]}
					>
						Ad Review
					</a>
					<a
						href="https://www.readytomelt.com/tag/anant-rangaswami/"
						className={headerStyle["badge"]}
					>
						Anant Rangaswami
					</a>
					<a
						href="https://www.readytomelt.com/tag/advertising/"
						className={headerStyle["badge"]}
					>
						Advertising
					</a>
					<a
						href="https://www.readytomelt.com/tag/facebook/"
						className={headerStyle["badge"]}
					>
						Facebook
					</a>
					<a
						href="https://www.readytomelt.com/tag/marketing/"
						className={headerStyle["badge"]}
					>
						Marketing
					</a>
				</div>
			</div>
		</div>
	);
}
