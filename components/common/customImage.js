import Image from "next/image";
import React from "react";
import { baseUrl } from "../../utilities/constants";
export default function CustomImage(props) {
	return (
		<>
			{typeof props.src != "undefined" && typeof props.src != "null" && (
				<Image
					src={baseUrl + props.src}
					height="100"
					width="100"
					priority={false}
					alt={props.alt}
					blurDataURL={props.alt}
					placeholder="blur"
				/>
			)}
		</>
	);
}
