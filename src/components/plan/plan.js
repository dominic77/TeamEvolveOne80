import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Header, Footer, Left, Right, Body, Title, Button, Icon, Content } from 'native-base';
import { Text } from 'react-native';

import Event from './event';
import ChallengeDay from '../person/challengeday';


import localize from '../../utils/i18n';
import { challengeDay } from '../../utils/dates';
import { getChallengeEventsByDay, getChallengeLength } from '../../utils/challenge';

class PlanBare extends React.Component {
	constructor (props) {
		super(props);
		const day = challengeDay(props.startDate);
		this.state = {
			day,
			planDay: day
		};
	}

	onPressLeft = () => {
		if (this.state.planDay > 1) {
			this.setState({planDay: this.state.planDay-1});
		}
	}

	onPressRight = () => {
		if (this.state.planDay < getChallengeLength())
		{
			this.setState({planDay: this.state.planDay+1});
		}
	}

	onGoToToday = () => {
		this.setState({planDay: this.state.day});
	}

	disablePressLeft = () => this.state.planDay <= 1

	disablePressRight = () => this.state.planDay >= getChallengeLength()

	render = () => {
		const showToday = this.state.planDay != this.state.day;
		const renderPlanDay = () => {
			const events = getChallengeEventsByDay(this.state.planDay);
			return events.map( (event) => (<Event key={event.EVENT} event={event}/>));
		};
		const renderTop = () => {
			
			return (
				<Body>
					<Title>
						<ChallengeDay
							displayStyle="text"
							challengeDay={this.state.planDay}
						/>
					</Title>
				</Body>
			);
		};
		return (
			<Container>
				<Header>
					<Left>
						<Button onPress={this.onPressLeft} disabled={this.disablePressLeft()} transparent >
							<Icon name='arrow-back' />
						</Button>
					</Left>
					{renderTop()}
					<Right>
						<Button onPress={this.onPressRight} disabled={this.disablePressRight()} transparent>
							<Icon name='arrow-forward' />
						</Button>
					</Right>
				</Header>
				<Content>{renderPlanDay()}</Content>
				{ showToday &&
					<Footer>
						<Body>
							<Button onPress={this.onGoToToday} full info>
								<Text>{localize('PLAN_GOTOTODAY')}</Text>
							</Button>
						</Body>
					</Footer>
				}
			</Container>
		);
	}
};
PlanBare.propTypes = {
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

export { PlanBare };
export default connect(mapStateToProps, mapDispatchToProps)(PlanBare);
