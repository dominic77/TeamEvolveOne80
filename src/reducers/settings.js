import { SETTINGS_CHANGE_START_DATE, SETTINGS_CHANGE_NAME } from '../constants/actions';
import { todaysDate } from '../utils/dates';

const handlers = {};
const initialState = {
	challengStart: todaysDate(),
	name: ''
};

handlers[SETTINGS_CHANGE_START_DATE] = function(settings, action) {
	return { ...settings, ...{ challengStart: action.date } };
};

handlers[SETTINGS_CHANGE_NAME] = function(settings, action) {
	return { ...settings, ...{ name: action.name } };
};

const reducer = (settings = initialState, action, state) => {
	if(handlers[action.type]) {
		return handlers[action.type](settings, action, state);
	}
	return settings;
};

export default reducer;
