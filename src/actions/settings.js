import { CHANGE_START_DATE } from './action-types';

export const changeStartDate = (date) => {
	return {
		type: CHANGE_START_DATE,
		date
	};
};
