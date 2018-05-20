import { SETTINGS_CHANGE_START_DATE, SETTINGS_CHANGE_NAME } from '../constants/actions';

export const changeStartDate = (date) => {
	return {
		type: SETTINGS_CHANGE_START_DATE,
		date
	};
};

export const changeName = (name) => {
	return {
		type: SETTINGS_CHANGE_NAME,
		name
	};
};
