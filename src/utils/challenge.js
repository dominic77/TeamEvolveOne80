import * as dates from './dates';
import { phaseDays } from '../constants/challenge';

const validateDay = (day) => (day > 0 && day <= phaseDays.length);

export const getChallengeLength = () => {
	return phaseDays.length;
};

export const getChallengePhase = (startDate) => {
	const day = dates.challengeDay(startDate);

	if (!validateDay(day)) {
		return '';
	}

	return phaseDays[day-1].phase;
};