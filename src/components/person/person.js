import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import localize from '../../utils/i18n';

import { Content } from 'native-base';
import ChallengDay from './challengeday';

const PersonBare = (props) => {
	return (
		<Content>
			<ChallengDay startDate={props.startDate} />
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
