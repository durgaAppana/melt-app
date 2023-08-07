export const baseUrl = "http://192.168.10.121:1337";

export const apiList = {
	GET_HEADER_MENU_LIST: baseUrl + "/api/get-header-menus",
	GET_ARTICLES_LIST: baseUrl + "/api/article-contents?populate=*",
	GET_ARTICLE_DATA: baseUrl + "/api/article-contents",
	GET_BANNERS_DATA: baseUrl + "/api/get-banners?populate=*",
	GET_tAGS_LIST: baseUrl + "/api/article-contents?filters[tags][tag_name][$contains]=",
	GET_AUTHOR_LIST: baseUrl + "/api/article-contents?filters[author][$eq]=",
	SUBSCRIBE_USER_MAIL: baseUrl + "/api/subscribe-emails",
	CONTACT_FORM: baseUrl + "/api/contacts",
	GET_ADVERTISEMENT_BANNERS: baseUrl + "/api/get-advertisements?populate=*",
	GET_TAG_LIST: baseUrl + "/api/tags?populate=*",
};
