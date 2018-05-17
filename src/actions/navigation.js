import { NAV_SETTINGS, NAV_MYSTATS, NAV_DIETPLAN, NAV_FOODMENU } from '../constants/actions';

export const navigateToSettings = () => {
	return {
		type: NAV_SETTINGS
	};
};

export const navigateToMyStats = () => {
	return {
		type: NAV_MYSTATS
	};
};

export const navigateToDietPlan = () => {
	return {
		type: NAV_DIETPLAN
	};
};

export const navigateToFoodMenu = () => {
	return {
		type: NAV_FOODMENU
	};
};
