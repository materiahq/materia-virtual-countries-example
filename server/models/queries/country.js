var request = require('request');

class CountryModel {

	constructor(app, entity) {
		this.app = app;
		this.entity = entity;
	}

	list(params) {
		return new Promise((resolve, reject) => {
            request({url: 'https://restcountries.eu/rest/v2/all', json: true}, (err, response, body) => {
				if (err) {
					return reject(err);
				}
				resolve(body);
			})

		});
	}
	
}

module.exports = CountryModel;