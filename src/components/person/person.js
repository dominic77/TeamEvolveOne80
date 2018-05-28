import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Content } from 'native-base';

import ChallengDay from './challengeday';
import Event from '../plan/event';

import { getChallengeEvents } from '../../utils/challenge';
import { getMinutesInDay } from '../../utils/dates';

const PersonBare = (props) => {
	const events = getChallengeEvents(props.startDate);
	const minutes = getMinutesInDay();

	const renderEvent = (event) => {

		if (props.eventTimes[event.EVENT]) {
			const { start, end } = props.eventTimes[event.EVENT];
			console.log(event.EVENT, minutes, start, end, start > end, minutes > start, minutes < end);
			if (start < end && (minutes < start || minutes > end)) { // Time range withing 24 hour day
				return '';
			}
			if (start > end && !(minutes > start || minutes < end)) { // Time range wraps across midnight
				return '';
			}
		}
		return (<Event key={event.EVENT} event={event}/>);
	};
	return (
		<Content>
			{events.map(renderEvent)}
		</Content>
	);
};
PersonBare.propTypes = {
	startDate: PropTypes.string,
	eventTimes: PropTypes.object
};

const mapStateToProps = state => {
	return {
		startDate: state.settings.challengStart,
		eventTimes: state.eventtimes
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
	};
};

export { PersonBare };
export default connect(mapStateToProps, mapDispatchToProps)(PersonBare);
