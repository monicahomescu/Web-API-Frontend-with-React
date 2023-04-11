export const PROD_BACKEND_API_URL = "https://sdimovieapi.azurewebsites.net/api";
export const DEV_BACKEND_API_URL = "http://localhost:5081/api";

export const BACKEND_API_URL =
	process.env.NODE_ENV === "development" ? DEV_BACKEND_API_URL : PROD_BACKEND_API_URL;
