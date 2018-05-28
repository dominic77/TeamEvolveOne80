import settings from './settings';
import navigation from './navigation';
import eventtimes from './eventtimes';

const rootReducer = (state = {}, action) => {
	const newState = {
		settings: settings(state.settings, action, state),
		navigation: navigation(state.navigation, action, state),
		eventtimes: eventtimes(state.eventtimes, action, state)
	};
	// console.log(newState);
	return newState;
};

export default rootReducer;
