const PATH = "./projects.json";


class Projects{
	get(){
		return this.readData();
	}

	readData(){
		const fs = require("fs");
		const rawData = fs.readFileSync(PATH);
		return JSON.parse(rawData);
	}
}

module.exports = Projects;