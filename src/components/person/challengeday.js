import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardItem, Text, H1 } from 'native-base';
import { challengeDay } from '../../utils/dates';
import { getChallengeLength, getChallengePhaseByDay } from '../../utils/challenge';

import localize from '../../utils/i18n';


const ChallengeDay = (props) => {
	const getDay = () => {
		if (props.challengeDay) {
			return props.challengeDay;
		}
		return challengeDay(props.startDate);
	};

	const getDayMessage = () => {
		let day = getDay();
		let message = '';

		if (day < 1) {
			day = day * -1;
			message = localize('CHALLENGEDAY_BEFORE', { day });
		}
		else if (day > getChallengeLength()) {
			message = localize('CHALLENGEDAY_AFTER');
		}
		else {
			message = localize('CHALLENGEDAY_DURING', { day });
		}
		return message;
	};
	const getDayPhase = () => {
		return localize(getChallengePhaseByDay(getDay()));
	};

	if (props.displayStyle === 'text') {
		const day = getDayMessage();
		const phase = getDayPhase();
		return localize('APP_SUBTITLE', { day, phase });
	}
	return (
		<Card>
			<CardItem>
				<H1>{getDayMessage()}</H1>
			</CardItem>
			<CardItem>
				<Text>{getDayPhase()}</Text>
			</CardItem>
		</Card>
	);
};
ChallengeDay.defaultProps = {
	displayStyle: 'default'
};
ChallengeDay.propTypes = {
	startDate: PropTypes.string,
	challengeDay: PropTypes.number,
	displayStyle: PropTypes.oneOf(['default', 'text'])
};

export default ChallengeDay;