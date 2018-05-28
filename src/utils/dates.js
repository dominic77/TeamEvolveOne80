import moment from 'moment';

const internalDateFormat = 'YYYYMMDD';

export const todaysDate = () =>  moment().format(internalDateFormat);

export const formatDate = (date) => moment(date, internalDateFormat).format('ll');

export const jsDateObject = (date) => moment(date, internalDateFormat).toDate();

export const internalDateString = (jsDate) => moment(jsDate).format(internalDateFormat);

export const challengeDay = (startDate) => {
	const today = moment(todaysDate(), internalDateFormat);
	const start = moment(startDate, internalDateFormat);

	return today.diff(start, 'days') + 1;
};

export const getMinutesInDay = () => {
	const m = moment();
	return m.minutes() + (60 * m.hours());
};
