import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

const MainBare = ({ startDate }) => (
	<View>
		<Text>Main</Text>
		<Text>{startDate.toDateString()}</Text>
	</View>
);
MainBare.propTypes = {
	startDate: PropTypes.instanceOf(Date)
};

const mapStateToProps = state => {
	return {
		startDate: state.settings.challengStart
	};
};
const mapDispatchToProps = () => {
	return {};
};

export { MainBare };
export default connect(mapStateToProps, mapDispatchToProps)(MainBare);
