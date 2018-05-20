import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardItem, Body, Text, H1 } from 'native-base';
import { formatDate, challengeDay } from '../../utils/dates';
import { getChallengeLength, getChallengePhase } from '../../utils/challenge';

import localize from '../../utils/i18n';
import styles from '../../constants/styles';


const ChallengeDay = (props) => {
	const getDayMessage = () => {
		let day = challengeDay(props.startDate);
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
		return localize(getChallengePhase(props.startDate));
	};

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
ChallengeDay.propTypes = {
	startDate: PropTypes.string
};

export default ChallengeDay;