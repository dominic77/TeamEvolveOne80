import settings from './settings';

const rootReducer = (state = {}, action) => {
	return {
		settings: settings(state.settings, action, state)
	};
};

export default rootReducer;
