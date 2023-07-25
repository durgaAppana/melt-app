export const apiPostCall = (endpoint, headers = {}, payload = {}) => {
	return new Promise((resolve, reject) => {
		const header = {
			Accept: "application/json",
			"Content-Type": "application/json",
		};

		if (typeof headers.Authorization != "undefined") {
			header.Authorization = headers.Authorization;
		}

		fetch(endpoint, {
			method: "POST",
			headers: header,
			body: JSON.stringify(payload),
		})
			.then((res) => resolve(res.json()))
			.catch((error) => {
				resolve(error);
			});
	});
};

export const apiGetCall = (endpoint, headers = {}) => {
	return new Promise((resolve, reject) => {
		const header = {
			Accept: "application/json",
			"Content-Type": "application/json",
		};

		if (typeof headers.Authorization != "undefined") {
			header.Authorization = headers.Authorization;
		}

		fetch(endpoint, {
			method: "GET",
			headers: header,
		})
			.then((res) => resolve(res.json()))
			.catch((error) => {
				resolve(error);
			});
	});
};
