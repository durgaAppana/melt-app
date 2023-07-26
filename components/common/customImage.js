import Image from "next/image";
import React from "react";
import { baseUrl } from "../../utilities/constants";
export default function CustomImage(props) {
	return (
		<>
			{typeof props.src != "undefined" && typeof props.src != "null" && (
				<Image
					src={baseUrl + props.src}
					height={props.height ? props.height : 100}
					width={props.width ? props.width : 100}
					priority={false}
					alt={props.alt}
					blurDataURL={baseUrl + props.src}
					placeholder="blur"
				/>
			)}
		</>
	);
}
