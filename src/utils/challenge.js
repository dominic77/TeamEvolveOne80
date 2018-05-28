import * as dates from './dates';
import { phaseDays, challengePlan } from '../constants/challenge';

const validateDay = (day) => (day > 0 && day <= phaseDays.length);

export const getChallengeLength = () => {
	return phaseDays.length;
};

export const getChallengePhase = (startDate) => getChallengePhaseByDay(dates.challengeDay(startDate));
export const getChallengePhaseByDay = (day = 1) => {
	if (!validateDay(day)) {
		day = 1;
	}

	return phaseDays[day-1].phase;
};

export const getChallengeEvents = (startDate) => getChallengeEventsByDay(dates.challengeDay(startDate));
export const getChallengeEventsByDay = (day) => {
	const phase = getChallengePhaseByDay(day);
	return challengePlan[phase];
};
