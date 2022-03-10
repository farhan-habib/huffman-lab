const argumentParser = class{
//rtemove class add function //
	static options = {

	}
	/**
	 * 
	 * @param {Array} args array containing commandline arguments (proces.argv)
	 * @returns {Object} An object containing the parsed arguments
	 */
	static parseArguments(args){
		const possibleArguments = {
			'o' : 'outputFile'
		}
		
		let options = {};
		args.splice(0,2); //removing information about where file is run from argument array
		const findFlag = () => {
			const flagFinder = function (string){
				return string.startsWith('-');
			}
			return args.findIndex(flagFinder);
		}
		
		console.log(args);
		if (findFlag() === -1) return options; //no output file given, return empty options object
		
		while(findFlag() != -1){
			let targetOption = args.splice(findFlag(), 2);
			options[possibleArguments[targetOption[0].substring(1)]] = targetOption[1];
		}
		options.inputFile = args[args.length - 1];
		return options;
	}

}


module.exports = {argumentParser};