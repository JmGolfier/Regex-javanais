
/* ECS6 */
(function(){

	var history = {},
		traductionVersjavanais = true;

	function traduction(string){

		if (string != null) {

			let result = string;

			if(traductionVersjavanais)
				result.replace(/^[aeiouy\u00C0-\u017F]|[bcdfghjklmnpqrstvwxz\u00C0-\u017F][aeiouy\u00C0-\u017F]/gi, 
					match => match.length > 1 ? match.split('').join('av') : 'av' + match);
			else
				result.replace(/^av[aeiou\u00C0-\u017F]|[bcdfghjklmnpqrstvwxz\u00C0-\u017F]av[aeiouy\u00C0-\u017F]/gi, 
				match => match.replace('av', ''));

			updateHistory(string, result);

			return result;
		}
	}

	function updateHistory(initString, resultString){
		if(initString != null && resultString != null){
			history.initString = initString;
			history.resultString = resultString;
		}
	}

	function getHistory(){
		return history;
	}

	function switchTrad(){
		traductionVersjavanais = !traductionVersjavanais;
	}

}());


