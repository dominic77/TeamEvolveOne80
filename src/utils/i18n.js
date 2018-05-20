const defaults = {
	LOADING_TITLE: 'loading...',
	
	APP_TITLE: 'Team Evolve One80 Challenge',
	APP_SUBTITLE_SETTINGS: 'Settings',
	APP_SUBTITLE_MYSTATS: 'Personal Info',
	APP_SUBTITLE_DIETPLAN: 'Diet Plan',
	APP_SUBTITLE_FOODMENU: 'Allowed Foods',

	CHALLENGEDAY_DURING: 'CHALLENGE DAY {{day}}',
	CHALLENGEDAY_BEFORE: 'STARTING IN {{day}} DAYS',
	CHALLENGEDAY_AFTER: 'CHALLENGE COMPLETED',
	CHALLENGEDAY_STARTEDON: 'Started the challenge on {{startdate}}',

	PHASE_CLEANSE_DAYONE: 'cleanse day one',
	PHASE_CLEANSE: 'cleanse day',
	PHASE_BURN: 'burn day',
	PHASE_REFUEL: 'refuel day',
	PHASE_CUT: 'cut day',
};

const replaceRegex = /{{(\w+)}}/gm;

const localize = (key, parameter = {}) => {
	if (defaults[key]) {
		let translate = defaults[key];
		let m;

		while ((m = replaceRegex.exec(translate)) !== null) {
			// This is necessary to avoid infinite loops with zero-width matches
			if (m.index === replaceRegex.lastIndex) {
				replaceRegex.lastIndex++;
			}

			// replace the parameter
			if (parameter[m[1]]) {
				translate = translate.replace(m[0], parameter[m[1]]);
			}
		}

		return translate;
	}
	return key;
};

export default localize;
