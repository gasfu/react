import Http from "../Utils/Http.js";
import StringUtil from '../Utils/String.js';


class TeamsAction {
	
	static all() {
		Http.get('/objects/teams.json').then((response) => {
			window.sessionStorage.setItem('teams', response);	
		});	
	}

	static getString (string) {
		let teams = window.sessionStorage.getItem('teams');
		teams = JSON.parse(teams).teams;
		string = StringUtil.stripAccents(string)
		const filter = (team) => {
			team = StringUtil.stripAccents(team.name);
			return team.indexOf(string) > -1;
		};

		return  Object.values(teams).filter(filter);
	}

}

export default TeamsAction;