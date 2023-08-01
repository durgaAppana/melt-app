import { useEffect, useState } from "react";
import Image from "next/image";
import { baseUrl } from "../../utilities/constants";

export default function CustomImage(props) {
	const processImageSrc = (imageSrc) => {
		if (typeof imageSrc == "string" && !imageSrc.startsWith("https://") && !imageSrc.startsWith("http://")) {
			if (imageSrc.startsWith("/")) {
				imageSrc = imageSrc.replace("/", "");
			}
			return baseUrl + "/" + imageSrc;
		}
		return imageSrc;
	};

	// Added below code to fix the image height width issue
	const fixForImageRatio = {
		// width: 0,
		// height: 0,
		sizes: "100vw",
		style: { width: "100%", height: "auto" },
	};

	const options = {
		alt: "melt-app",
		loading: "lazy",
		// placeholder: "blur",
		// blurDataURL: placeHolderDataUrl,
		// quality: "80",
		...props,
	};

	if (typeof options.alt == "undefined" || options.alt == "" || options.alt == null) {
		options.alt = "melt-app";
	}

	// if (typeof options.src == "undefined" || options.src == "" || options.src == null) {
	// 	options.src = "/images/thumbnail.jpg";
	// }

	if (typeof options.aspectratio !== "undefined" && options.aspectratio == "true") {
		Object.keys(fixForImageRatio).map((key) => {
			options[key] = fixForImageRatio[key];
		});
	}

	if (typeof options.priority !== "undefined" && options.priority) {
		delete options.loading;
	}

	options.src = processImageSrc(options.src);

	const [imgOptions, setImgOptions] = useState(options);

	useEffect(() => {
		setImgOptions(options);
	}, [props]);
	useEffect(() => {
		if (imgOptions.src === null) {
			updateFallbackImage();
		}
	}, [imgOptions.src]);

	const updateFallbackImage = () => {
		setImgOptions({
			...imgOptions,
			src: defaultPlaceHolder,
			style: null,
		});
	};

	return (
		<>
			{imgOptions.src && (
				<Image
					{...imgOptions}
					onLoadingComplete={(result) => {
						if (result.naturalWidth === 0) {
							// Broken image
							// updateFallbackImage();
						}
					}}
					onError={() => {
						updateFallbackImage();
					}}
				/>
			)}
		</>
	);
}
