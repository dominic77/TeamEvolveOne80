import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import localize from '../utils/i18n';

import { Container, Header, Body, Title, Subtitle, Content, Footer, FooterTab, Button, Icon } from 'native-base';

import { navigateToSettings, navigateToMyStats, navigateToDietPlan, navigateToFoodMenu } from '../actions/navigation';
import { MAIN_LOCATION_SETTINGS, MAIN_LOCATION_MYSTATS, MAIN_LOCATION_DIETPLAN, MAIN_LOCATION_FOODMENU } from '../constants/constants';

const MainBare = (props) => {
	const { startDate, location, title, subtitle } = props;
	const { onSettingsClick, onMyStatsClick, onDietPlanClick, onFoodMenuClick } = props;
	return (
		<Container>
			<Header>
				<Body>
					<Title>{localize(title)}</Title>
					<Subtitle>{localize(subtitle)}</Subtitle>
				</Body>
			</Header>
			<Content>
			</Content>
			<Footer>
				<FooterTab>
					<Button onPress={onSettingsClick}>
						<Icon name="settings" active={location === MAIN_LOCATION_SETTINGS} />
					</Button>
					<Button onPress={onMyStatsClick}>
						<Icon name="person" active={location === MAIN_LOCATION_MYSTATS} />
					</Button>
					<Button onPress={onDietPlanClick}>
						<Icon name="paper" active={location === MAIN_LOCATION_DIETPLAN} />
					</Button>
					<Button onPress={onFoodMenuClick}>
						<Icon name="restaurant" active={location === MAIN_LOCATION_FOODMENU} />
					</Button>
				</FooterTab>
			</Footer>
		</Container>
	);
};
MainBare.propTypes = {
	startDate: PropTypes.instanceOf(Date),
	location: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	onSettingsClick: PropTypes.func,
	onMyStatsClick: PropTypes.func,
	onDietPlanClick: PropTypes.func,
	onFoodMenuClick: PropTypes.func
};

const mapStateToProps = state => {
	return {
		startDate: state.settings.challengStart,
		location: state.navigation.mainLocation,
		title: state.navigation.title,
		subtitle: state.navigation.subtitle
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onSettingsClick: () => {
			dispatch(navigateToSettings());
		},
		onMyStatsClick: () => {
			dispatch(navigateToMyStats());
		},
		onDietPlanClick: () => {
			dispatch(navigateToDietPlan());
		},
		onFoodMenuClick: () => {
			dispatch(navigateToFoodMenu());
		}
	};
};

export { MainBare };
export default connect(mapStateToProps, mapDispatchToProps)(MainBare);
