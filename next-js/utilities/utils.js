export const convertToSlug = (string) => {
	if (typeof string == "undefined" || typeof string == "null" || string == null) return "";

	return string
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "");
};

export const emailValidation = () => {
	return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
};
