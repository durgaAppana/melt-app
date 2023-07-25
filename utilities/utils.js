export const convertToSlug = (string) => {
	if (typeof string == "undefined" || typeof string == "null" || string == null) return "";

	return string
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "");
};
