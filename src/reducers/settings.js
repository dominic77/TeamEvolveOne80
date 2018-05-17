import { CHANGE_START_DATE } from '../constants/actions';

const handlers = {};
const initialState = {
	challengStart: new Date()
};

handlers[CHANGE_START_DATE] = function(settings, action) {
	return { ...settings, ...{ date: action.date } };
};

const reducer = (settings = initialState, action, state) => {
	if(handlers[action.type]) {
		return handlers[action.type](settings, action, state);
	}
	return settings;
};

export default reducer;
