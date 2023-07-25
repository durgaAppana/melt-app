import dynamic from "next/dynamic";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import commonStyle from "../../styles/common.module.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

export default function CustomCarousel({ children, carouselOptions = {}, className = "" }) {
	const options = {
		navText: ['<span className="arrow"></span>', '<span className="arrow"></span>'],
		navClass: ["owl-prev " + commonStyle["owl-prev"], "owl-next " + commonStyle["owl-next"]],
		navElement: 'button type="button" aria-label="carousel" role="button"',
		navContainerClass: [commonStyle["owl-nav"]],
		loop: true,
		nav: false,
		dots: false,
		items: 3,
		mouseDrag: true,
		smartSpeed: 1000,
		...carouselOptions,
	};

	return (
		<>
			{carouselOptions === false ? (
				<>{children}</>
			) : (
				<OwlCarousel
					className={"owl-theme " + commonStyle["owl-carousel"] + " " + className}
					{...options}
				>
					{children}
				</OwlCarousel>
			)}
		</>
	);
}
