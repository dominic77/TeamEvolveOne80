import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Content } from 'native-base';

import ChallengDay from './challengeday';
import Event from '../plan/event';

import { getChallengeEvents } from '../../utils/challenge';

const PersonBare = (props) => {
	const events = getChallengeEvents(props.startDate);
	return (
		<Content>
			<ChallengDay startDate={props.startDate} />
			{events.map( (event) => (<Event key={event.EVENT} event={event}/>))}
		</Content>
	);
};
PersonBare.propTypes = {
	startDate: PropTypes.string
};

const mapStateToProps = state => {
	return {
		startDate: state.settings.challengStart
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
	};
};

export { PersonBare };
export default connect(mapStateToProps, mapDispatchToProps)(PersonBare);
