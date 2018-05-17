import { CHANGE_START_DATE } from '../constants/actions';

export const changeStartDate = (date) => {
	return {
		type: CHANGE_START_DATE,
		date
	};
};
