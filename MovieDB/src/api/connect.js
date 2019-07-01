import { apiKey, dataPath, searchPath } from './host';

export default {
	async fetchData(route='now_playing', page=1, str='') {
		try {
			const path = route === 'query' ? searchPath+"?query="+str+"&page="+page+"&region=US&api_key="+apiKey : dataPath+route+"?page="+page+"&region=US&api_key="+apiKey;

			const response = await fetch(path,
			{ 	method: 'POST', 
				headers: { 'Accept': 'application/json', 'Content-Type': 'application/json',}
			});
			const responseJson = await response.json();
			return responseJson;
		} catch(e) {
			console.warn(e);
		}
	}
};
