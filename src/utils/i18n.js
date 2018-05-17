const defaults = {
	APP_TITLE: 'Team Evolve One80 Challenge',
	APP_SUBTITLE_SETTINGS: 'Settings',
	APP_SUBTITLE_MYSTATS: 'Personal Info',
	APP_SUBTITLE_DIETPLAN: 'Diet Plan',
	APP_SUBTITLE_FOODMENU: 'Allowed Foods'
};

const localize = (key) => {
	if (defaults[key]) {
		return defaults[key];
	}
	return key;
};

export default localize;
