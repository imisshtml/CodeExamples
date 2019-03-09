const apiHost = 'https://public-api.tracker.gg/apex/v1/standard/profile/5/kittehpwnu';

export default {
	async fetchData(func) {
		if(!func){
			console.warn('No func set');
			try {
				const response = await fetch(apiHost + 'test.php');
				const responseJson = await response.json();
				return responseJson;
			} catch(e) {
				console.warn(e);
			}
		}else{
			//console.warn(func+" set as func");
			try {
				const response = await fetch(apiHost,
					{ method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json',},
					body: JSON.stringify({
						API: ''
					})
				});
				const responseJson = await response.json();
				return responseJson;
			} catch(e) {
				console.warn(e);
			}
		}
	},

};
