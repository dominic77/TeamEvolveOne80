const phaseCleanseOne = 'PHASE_CLEANSE_DAYONE';
const phaseCleanse = 'PHASE_CLEANSE';
const phaseBurn = 'PHASE_BURN';
const phaseRefuel = 'PHASE_REFUEL';
const phaseCut = 'PHASE_CUT';

const plan = {};

plan[phaseCleanseOne] = {
	WAKEUP: {
		ADVOCARE: {
			FIBERDRINK: {},
			SPARK: {},
			PROBIOTIC: {}
		},
		TIPS: ['TIPS_UNFLAVOREDFIBER']
	},
	BREAKFAST: {
		ADVOCARE: {
			OMEGAPLEX: { quantity: 3 },
			BIOTUNE: { optional: true }
		},
		MEAL: {
			SHAKE: {}
		},
		TIPS: ['TIP_MUSTHAVEWITHINONEHOUR']
	},
	AMSNACK: {
		MEAL: {
			FRUIT: {},
			VEGETABLES: {},
			GREENTEA: {}
		},
		TIPS: ['TIP_EATSERVINGEVERYTHREEHOUR']
	},
	LUNCH: {
		MEAL: {
			FRUIT: {},
			VEGETABLES: {},
		},
		TIPS: ['TIP_YOUMAYEATEXTRAVEGIS']
	},
	PMSNACK: {
		MEAL: {
			FRUIT: {},
			VEGETABLES: {},
			GREENTEA: {}
		},
		TIPS: ['TIP_MAKESUREDRINGHALFGALLON']
	},
	DINNER: {
		ADVOCARE: {
			OMEGAPLEX: { quantity: 3 },
			BIOTUNE: { optional: true }
		},
		MEAL: {
			FRUIT: {},
			VEGETABLES: {},
		},
	},
	BEDTIME: {
		ADVOCARE: {
			HERBALCLEANSE: { quantity: 2 },
			PROBIOTIC: {}
		},
		TIPS: ['TIP_DONTUSEHERBALCLEANSEWITHINNINETYDAYS']
	},
	ANYTIME: {
		ADVOCARE: {
			REHYDRATE: {}
		},
		TIPS: ['TIP_REHYDRATEMANDATORYONCEPERDAY']
	}
};
plan[phaseCleanse] = {
	WAKEUP: {
		ADVOCARE: {
			FIBERDRINK: {},
			SPARK: {},
			PROBIOTIC: {}
		},
		TIPS: ['TIPS_UNFLAVOREDFIBER']
	},
	BREAKFAST: {
		ADVOCARE: {
			OMEGAPLEX: { quantity: 3 },
			BIOTUNE: { optional: true }
		},
		MEAL: {
			SHAKE: {}
		},
	},
	AMSNACK: {
		MEAL: {
			FRUIT: {},
			FAT: {}
		},
	},
	LUNCH: {
		MEAL: {
			PROTEIN: {},
			CARB: {},
			VEGETABLES: {},
		},
	},
	PMSNACK: {
		MEAL: {
			FRUIT: {},
			FAT: {}
		},
		TIPS: ['TIP_MAKESUREDRINGHALFGALLON']
	},
	DINNER: {
		ADVOCARE: {
			OMEGAPLEX: { quantity: 3 },
			BIOTUNE: { optional: true }
		},
		MEAL: {
			PROTEIN: {},
			VEGETABLES: {},
		},
	},
	SIXTHMEAL: {
		MEAL: {
			PROTEIN: { quantity: 0.5 },
			VEGETABLES: {},
		},
		TIPS: ['TIP_FINISHGALLONWATER']
	},
	BEDTIME: {
		ADVOCARE: {
			HERBALCLEANSE: { quantity: 2 },
			PROBIOTIC: {}
		},
		TIPS: ['TIP_DONTUSEHERBALCLEANSEWITHINNINETYDAYS']
	},
	ANYTIME: {
		ADVOCARE: {
			REHYDRATE: {},
			SPARK: {}
		},
		TIPS: ['TIP_REHYDRATEMANDATORYONCEPERDAY', 'TIP_SPARKONEORTWOPERDAYFORFOCUS']
	}
};

const processChallengPlan = (plan) => {
	for (var phaseKey in plan) {
		const phaseObj = plan[phaseKey];

		for (var eventKey in phaseObj) {
			const eventObj = phaseObj[eventKey];
			if (!eventObj.ADVOCARE) {
				eventObj.ADVOCARE = {};
			} else {
				for (var itemKey in eventObj.ADVOCARE) {
					const itemObj = eventObj.ADVOCARE[itemKey];

					if (!itemObj.quantity) {
						itemObj.quantity = 1;
					}
					if (!itemObj.optional) {
						itemObj.optional = false;
					}
				}
			}

			if (!eventObj.MEAL) {
				eventObj.MEAL = {};
			} else {
				for (var itemKey in eventObj.MEAL) {
					const itemObj = eventObj.MEAL[itemKey];

					if (!itemObj.quantity) {
						itemObj.quantity = 1;
					}
				}
			}

			if (!eventObj.TIPS) {
				eventObj.TIPS = [];
			}
		}
	}
	
	// console.log(plan);
	return plan;
};

export const challengePlan = processChallengPlan(plan);
export const phaseDays = [
	{ phase: phaseCleanseOne },
	{ phase: phaseCleanse },
	{ phase: phaseCleanse },
	{ phase: phaseCleanse },
	{ phase: phaseCleanse },
	{ phase: phaseCleanse },
	{ phase: phaseCleanse },
	{ phase: phaseCleanse },
	{ phase: phaseCleanse },
	{ phase: phaseCleanse },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseRefuel },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseRefuel },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseRefuel },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseRefuel },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseRefuel },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseRefuel },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseRefuel },
	{ phase: phaseCut },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseRefuel },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseCut },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseRefuel },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseCut },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseRefuel },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseCut },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseRefuel },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseCut },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseRefuel },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseCut },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseRefuel },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseCut },
	{ phase: phaseBurn },
	{ phase: phaseBurn },
	{ phase: phaseRefuel },
	{ phase: phaseBurn },
	{ phase: phaseBurn }
];

