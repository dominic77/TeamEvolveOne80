
const handlers = {};
const initialState = {
	WAKEUP: { start: 180, end: 630 }, // 3am - 10:30am
	BREAKFAST: { start: 180, end: 660 }, // 3am - 11am
	AMSNACK: { start: 540, end: 720 }, // 9am - 12pm
	BEFORELUNCH: { start: 600, end: 900}, // 10am - 3pm
	LUNCH: { start: 630, end: 900 }, // 10:30am - 3pm
	PMSNACK: { start: 720, end: 1080 }, // 12pm - 6pm
	DINNER: { start: 960, end: 1260 }, // 4pm - 9pm
	SIXTHMEAL: {start: 1080, end: 60 }, // 6pm - 1am
	BEDTIME: { start: 1200, end: 180 } // 8pm - 3am
};

const reducer = (settings = initialState, action, state) => {
	if(handlers[action.type]) {
		return handlers[action.type](settings, action, state);
	}
	return settings;
};

export default reducer;
