import * as dates from './dates';
import { phaseDays, challengePlan } from '../constants/challenge';

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

export const getChallengeEvents = (startDate) => {
	const phase = getChallengePhase(startDate);

	return challengePlan[phase];
};
