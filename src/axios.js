import axios from 'axios';
const instance = axios.create({
	baseURL: "https://us-central1-clone-ef0ad.cloudfunctions.net/api",
});
export default instance;
// http://localhost:5001/clone-ef0ad/us-central1/api

