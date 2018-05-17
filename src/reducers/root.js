import settings from './settings';
import navigation from './navigation';

const rootReducer = (state = {}, action) => {
	return {
		settings: settings(state.settings, action, state),
		navigation: navigation(state.navigation, action, state)
	};
};

export default rootReducer;
