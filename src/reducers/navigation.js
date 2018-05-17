import { NAV_SETTINGS, NAV_MYSTATS, NAV_DIETPLAN, NAV_FOODMENU } from '../constants/actions';
import { MAIN_LOCATION_SETTINGS, MAIN_LOCATION_MYSTATS, MAIN_LOCATION_DIETPLAN, MAIN_LOCATION_FOODMENU } from '../constants/constants';
const handlers = {};
const initialState = {
	mainLocation: MAIN_LOCATION_MYSTATS,
	title: 'APP_TITLE',
	subtitle: 'APP_SUBTITLE_MYSTATS'
};

handlers[NAV_SETTINGS] = function(state, action) {
	return { ...state, ...{
		mainLocation: MAIN_LOCATION_SETTINGS,
		title: 'APP_TITLE',
		subtitle: 'APP_SUBTITLE_SETTINGS'
	} };
};
handlers[NAV_MYSTATS] = function(state, action) {
	return { ...state, ...{
		mainLocation: MAIN_LOCATION_MYSTATS,
		title: 'APP_TITLE',
		subtitle: 'APP_SUBTITLE_MYSTATS'
	} };
};
handlers[NAV_DIETPLAN] = function(state, action) {
	return { ...state, ...{
		mainLocation: MAIN_LOCATION_DIETPLAN,
		title: 'APP_TITLE',
		subtitle: 'APP_SUBTITLE_DIETPLAN'
	} };
};
handlers[NAV_FOODMENU] = function(state, action) {
	return { ...state, ...{
		mainLocation: MAIN_LOCATION_FOODMENU,
		title: 'APP_TITLE',
		subtitle: 'APP_SUBTITLE_FOODMENU'
	} };
};

const reducer = (state = initialState, action, rootstate) => {
	if(handlers[action.type]) {
		return handlers[action.type](state, action, rootstate);
	}
	return state;
};

export default reducer;
