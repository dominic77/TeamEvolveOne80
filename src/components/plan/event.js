import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardItem, List, ListItem } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import { formatDate, challengeDay } from '../../utils/dates';
import { getChallengeLength, getChallengePhase } from '../../utils/challenge';

import localize from '../../utils/i18n';

const localizeEventPrefix = 'EVENT_';
const localizeAdvoPrefix = 'ADVO_';
const localizeMealPrefix = 'MEAL_';

const Event = (props) => {
	const { EVENT: eventName, ADVOCARE: advoCare, MEAL: meals = [] } = props.event;

	const renderAdvocare = (key) => {
		const textStyles = [];
		if (advoCare[key].optional) {
			textStyles.push(styles.optionalText);
		}
		return (<Text style={textStyles} key={key}>{localize(localizeAdvoPrefix+key, { quantity: advoCare[key].quantity })}</Text>);
	};

	return (
		<Card style={ styles.cardBorder }>
			<CardItem header style={styles.headerBox}>
				<Text style={styles.headerText}>{localize(localizeEventPrefix + eventName)}</Text>
			</CardItem>
			{advoCare && (
				<View style={ [styles.mainBox, styles.advocare] }>
					<View style={styles.leftBox}>
						<Text style={styles.lightText}>{localize('ADVOCARE')}</Text>
					</View>
					<View>
						{ Object.keys(advoCare).map(renderAdvocare) }
					</View>
				</View>
			)}
			{meals[0] && (
				<View style={ [styles.mainBox, styles.meals] }>
					<View style={styles.leftBox}>
						<Text>{localize('MEAL')}</Text>
					</View>
					<View>
						{Object.keys(meals[0]).map( (key) => (<Text key={key}>{localize(localizeMealPrefix+key, { quantity: meals[0][key].quantity })}</Text>))}
					</View>
				</View>
			)}
			<View>
				<View>
					<Text>This is a tip</Text>
				</View>
			</View>
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

const styles = StyleSheet.create({
	cardBorder: {
		borderColor: 'rgba(28, 52, 114, 1)',
		borderWidth: 2
	},
	headerBox: {
		backgroundColor: 'rgba(28, 52, 114, 1)',
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold'
	},
	mainBox: {
		flex: 1,
		flexDirection: 'row',
		padding: 10,
		borderColor: 'rgba(28, 52, 114, 1)',
		borderBottomWidth: 1
	},
	leftBox: {
		width: 100,
		alignItems: 'center',
		justifyContent: 'center'
	},
	advocare: {
	},
	meals: {
	},
	optionalText: {
		color: 'rgba(45, 83, 181, 1)'
	}

});

export default Event;