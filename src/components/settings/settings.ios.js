import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Content, Card, Label, Input } from 'native-base';
import { DatePickerIOS, View } from 'react-native';

import localize from '../../utils/i18n';
import { jsDateObject, internalDateString } from '../../utils/dates';
import { changeName, changeStartDate } from '../../actions/settings';

class SettingsBare extends React.Component {
	constructor (props) {
		super(props);
	}

	onChangeName = (val) => {
		this.props.handleChangeName(val);
	}

	onStartDateChange = (newDate) => {
		this.props.handleChangeStartDate(internalDateString(newDate));
	}

	render () {
		return (
			<Content>
				<Card>
					<Label>Name</Label>
					<Input onChangeText={this.onChangeName} value={this.props.name} />
				</Card>
				<Card>
					<Label>Challenge Start Date</Label>
					<DatePickerIOS
						date={jsDateObject(this.props.startDate)}
						onDateChange={this.onStartDateChange}
						mode="date"
					/>
				</Card>
			</Content>
		);
	}
};
SettingsBare.propTypes = {
	handleChangeName: PropTypes.func,
	handleChangeStartDate: PropTypes.func,
	name: PropTypes.string,
	startDate: PropTypes.string
};

const mapStateToProps = state => {
	return {
		startDate: state.settings.challengStart,
		name: state.settings.name
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		handleChangeName: (name) => {
			dispatch(changeName(name));
		},
		handleChangeStartDate: (date) => {
			dispatch(changeStartDate(date));
		}
	};
};

export { SettingsBare };
export default connect(mapStateToProps, mapDispatchToProps)(SettingsBare);
