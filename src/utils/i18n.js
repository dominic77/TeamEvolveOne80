const defaults = {
	LOADING_TITLE: 'loading...',
	
	APP_TITLE: 'Team Evolve One80 Challenge',
	APP_SUBTITLE: '{{day}} - {{phase}}',
	APP_SUBTITLE_SETTINGS: 'Settings',
	APP_SUBTITLE_MYSTATS: 'Personal Info',
	APP_SUBTITLE_DIETPLAN: 'Diet Plan',
	APP_SUBTITLE_FOODMENU: 'Allowed Foods',

	CHALLENGEDAY_DURING: 'Day {{day}}',
	CHALLENGEDAY_BEFORE: 'Starting in {{day}} days',
	CHALLENGEDAY_AFTER: 'Challenge Completed',
	CHALLENGEDAY_STARTEDON: 'Started the challenge on {{startdate}}',

	PHASE_CLEANSE_DAYONE: 'Day One',
	PHASE_CLEANSE: 'Cleanse',
	PHASE_BURN: 'Burn',
	PHASE_REFUEL: 'Refuel',
	PHASE_CUT: 'Cut',

	PLAN_GOTOTODAY: 'Go back to today\'s plan',

	ADVOCARE: 'AdvoCare',
	MEAL: 'Meal',

	EVENT_WAKEUP: 'Wake up',
	EVENT_BREAKFAST: 'Breakfast',
	EVENT_AMSNACK: 'AM Snack',
	EVENT_BEFORELUNCH: 'Prior to Lunch',
	EVENT_LUNCH: 'Lunch',
	EVENT_PMSNACK: 'PM Snack',
	EVENT_DINNER: 'Dinner',
	EVENT_SIXTHMEAL: '6th Meal',
	EVENT_BEDTIME: 'Prior to Bed',
	EVENT_ANYTIME: 'Anytime',

	ADVO_MNSBEFOREBREAKFAST: 'MNS BEFORE Breakfast Color Packet',
	ADVO_MNSBEFORELUNCH: 'MNS BEFORE Lunch Color Packet',
	ADVO_MNSWHITEPACKETS: 'MNS White Packets (both)',
	ADVO_PROBIOTIC: '{{quantity}} Probiotic',
	ADVO_CATALYST: '{{quantity}} Catalyst',
	ADVO_BIOTUNE: '{{quantity}} Bio Tune',
	ADVO_CRAVECHECK: '{{quantity}} Crave Check',
	ADVO_THERMOPLUS: '{{quantity}} Thermo Plus',
	ADVO_OMEGAPLEX: '{{quantity}} Omega Plex',
	ADVO_HERBALCLEANSE: '{{quantity}} Herbal Cleanse',
	ADVO_FIBERDRINK: 'Fiber',
	ADVO_SPARK: 'Spark',
	ADVO_REHYDRATE: 'Rehydrate',

	MEAL_PROTEIN: '{{quantity}} Protein',
	MEAL_FAT: '{{quantity}} Fat',
	MEAL_VEGETABLES: '{{quantity}} Vegetables',
	MEAL_CARB: '{{quantity}} Carb',
	MEAL_SHAKE: 'Meal Replacement Shake',
	MEAL_FRUIT: '{{quantity}} Fruit',
	MEAL_GREENTEA: 'Green Tea'
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
