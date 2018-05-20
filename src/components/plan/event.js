import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardItem, Body, Text, H1 } from 'native-base';
import { formatDate, challengeDay } from '../../utils/dates';
import { getChallengeLength, getChallengePhase } from '../../utils/challenge';

import localize from '../../utils/i18n';

const localizePrefix = 'EVENT_';

const Event = (props) => {
	const { EVENT: eventName, ADVOCARE: advoCare } = props.event;

	return (
		<Card>
			<CardItem header>
				<Text>{localize(localizePrefix + eventName)}</Text>
			</CardItem>
			<CardItem>
				{Object.keys(advoCare).map( (key) => (<Text key={key}>{localize(localizePrefix+key)}</Text>))}
			</CardItem>
		</Card>
	);
};
Event.propTypes = {
	event: PropTypes.shape({
		EVENT: PropTypes.string,
		ADVOCARE: PropTypes.object,
		MEAL: PropTypes.array,
		TIPS: PropTypes.array
	})
};

export default Event;