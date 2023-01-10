import axios from "../axios";

const appService = {
	getData(InputData) {
		return axios.post("/api/post-data", InputData);
	},
};

export default appService;
