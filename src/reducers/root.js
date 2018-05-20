import settings from './settings';
import navigation from './navigation';

const rootReducer = (state = {}, action) => {
	const newState = {
		settings: settings(state.settings, action, state),
		navigation: navigation(state.navigation, action, state)
	};
	console.log(newState);
	return newState;
};

export default rootReducer;
