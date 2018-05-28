const phaseCleanseOne = 'PHASE_CLEANSE_DAYONE';
const phaseCleanse = 'PHASE_CLEANSE';
const phaseBurn = 'PHASE_BURN';
const phaseRefuel = 'PHASE_REFUEL';
const phaseCut = 'PHASE_CUT';

const plan = {};

plan[phaseCleanseOne] = [
	{
		EVENT: 'WAKEUP',
		ADVOCARE: {
			FIBERDRINK: {},
			SPARK: {},
			PROBIOTIC: {}
		},
		TIPS: ['TIPS_UNFLAVOREDFIBER']
	},
	{
		EVENT: 'BREAKFAST',
		ADVOCARE: {
			OMEGAPLEX: { quantity: 3 },
			BIOTUNE: { optional: true }
		},
		MEAL: [{
			SHAKE: {}
		}],
		TIPS: ['TIP_MUSTHAVEWITHINONEHOUR']
	},
	{
		EVENT: 'AMSNACK',
		MEAL: [{
			FRUIT: {},
			VEGETABLES: {},
			GREENTEA: {}
		}],
		TIPS: ['TIP_EATSERVINGEVERYTHREEHOUR']
	},
	{
		EVENT: 'LUNCH',
		MEAL: [{
			FRUIT: {},
			VEGETABLES: {}
		}],
		TIPS: ['TIP_YOUMAYEATEXTRAVEGIS']
	},
	{
		EVENT: 'PMSNACK',
		MEAL: [{
			FRUIT: {},
			VEGETABLES: {},
			GREENTEA: {}
		}],
		TIPS: ['TIP_MAKESUREDRINGHALFGALLON']
	},
	{
		EVENT: 'DINNER',
		ADVOCARE: {
			OMEGAPLEX: { quantity: 3 },
			BIOTUNE: { optional: true }
		},
		MEAL: [{
			FRUIT: {},
			VEGETABLES: {}
		}]
	},
	{
		EVENT: 'BEDTIME',
		ADVOCARE: {
			HERBALCLEANSE: { quantity: 2 },
			PROBIOTIC: {}
		},
		TIPS: ['TIP_DONTUSEHERBALCLEANSEWITHINNINETYDAYS']
	},
	{
		EVENT: 'ANYTIME',
		ADVOCARE: {
			REHYDRATE: {}
		},
		TIPS: ['TIP_REHYDRATEMANDATORYONCEPERDAY']
	}
];
plan[phaseCleanse] = [
	{
		EVENT: 'WAKEUP',
		ADVOCARE: {
			FIBERDRINK: {},
			SPARK: {},
			PROBIOTIC: {}
		},
		TIPS: ['TIPS_UNFLAVOREDFIBER']
	},
	{
		EVENT: 'BREAKFAST',
		ADVOCARE: {
			OMEGAPLEX: { quantity: 3 },
			BIOTUNE: { optional: true }
		},
		MEAL: [{
			SHAKE: {}
		}]
	},
	{
		EVENT: 'AMSNACK',
		MEAL: [{
			FRUIT: {},
			FAT: {}
		}]
	},
	{
		EVENT: 'LUNCH',
		MEAL: [{
			PROTEIN: {},
			CARB: {},
			VEGETABLES: {}
		}]
	},
	{
		EVENT: 'PMSNACK',
		MEAL: [{
			FRUIT: {},
			FAT: {}
		}],
		TIPS: ['TIP_MAKESUREDRINGHALFGALLON']
	},
	{
		EVENT: 'DINNER',
		ADVOCARE: {
			OMEGAPLEX: { quantity: 3 },
			BIOTUNE: { optional: true }
		},
		MEAL: [{
			PROTEIN: {},
			VEGETABLES: {}
		}]
	},
	{
		EVENT: 'SIXTHMEAL',
		MEAL: [{
			PROTEIN: { quantity: 0.5 },
			VEGETABLES: {}
		}],
		TIPS: ['TIP_FINISHGALLONWATER']
	},
	{
		EVENT: 'BEDTIME',
		ADVOCARE: {
			HERBALCLEANSE: { quantity: 2 },
			PROBIOTIC: {}
		},
		TIPS: ['TIP_DONTUSEHERBALCLEANSEWITHINNINETYDAYS']
	},
	{
		EVENT: 'ANYTIME',
		ADVOCARE: {
			REHYDRATE: {},
			SPARK: {}
		},
		TIPS: ['TIP_REHYDRATEMANDATORYONCEPERDAY', 'TIP_SPARKONEORTWOPERDAYFORFOCUS']
	}
];
plan[phaseBurn] = [
	{
		EVENT: 'WAKEUP',
		ADVOCARE: {
			MNSBEFOREBREAKFAST: {},
			PROBIOTIC: {},
			CATALYST: { quantity: 3, optional: true },
			BIOTUNE: { optional: true },
			CRAVECHECK: { notes: 'DAY25ON' }
		},
		TIPS: ['TIPS_IFSTOMACHISSENSITIVE']
	},
	{
		EVENT: 'BREAKFAST',
		MEAL: [{
			PROTEIN: {},
			FAT: {}
		}]
	},
	{
		EVENT: 'AMSNACK',
		ADVOCARE: {
			THERMOPLUS: { optional: true }
		},
		MEAL: [{
			FAT: {}
		}, {
			FAT: { quantity: 0.5 },
			PROTEIN: { quantity: 0.5 }
		}],
		TIPS: ['TIP_TAKETHERMOPLUSPRIOR']
	},
	{
		EVENT: 'BEFORELUNCH',
		ADVOCARE: {
			MNSBEFORELUNCH: {},
			CRAVECHECK: { notes: 'DAY25ON' }
		}
	},
	{
		EVENT: 'LUNCH',
		ADVOCARE: {
			MNSWHITEPACKETS: {}
		},
		MEAL: [{
			PROTEIN: {},
			VEGETABLES: {},
			FAT: { quantity: 0.5 }
		}],
		TIPS: ['TIP_MNSWITHMEALAREMULTIVITAMINANDOMEGA']
	},
	{
		EVENT: 'PMSNACK',
		ADVOCARE: {
			THERMOPLUS: { optional: true }
		},
		MEAL: [{
			PROTEIN: {}
		}, {
			MUSCLEGAINSHAKE: {}
		}],
		TIPS: ['TIP_SLIMCANBETAKENFORAPPETITE']
	},
	{
		EVENT: 'DINNER',
		MEAL: [{
			PROTEIN: {},
			VEGETABLES: {},
			FAT: { quantity: 0.5 }
		}]
	},
	{
		EVENT: 'SIXTHMEAL',
		MEAL: [{
			PROTEIN: { quantity: 0.5 },
			VEGETABLES: {}
		}],
		TIPS: ['TIP_TRYRECIPESONFACEBOOK']
	},
	{
		EVENT: 'BEDTIME',
		ADVOCARE: {
			OMEGAPLEX: { quantity: 2 },
			PROBIOTIC: { optional: true },
			BIOTUNE: { optional: true }
		}
	},
	{
		EVENT: 'ANYTIME',
		ADVOCARE: {
			SPARK: {}
		},
		TIPS: ['TIP_SPARKONEORTWOPERDAYFORFOCUS']
	}
];
plan[phaseRefuel] = [
	{
		EVENT: 'WAKEUP',
		ADVOCARE: {
			MNSBEFOREBREAKFAST: {},
			PROBIOTIC: {},
			CATALYST: { quantity: 3, optional: true },
			BIOTUNE: { optional: true },
			CRAVECHECK: { notes: 'DAY25ON' }
		},
		TIPS: ['TIPS_IFSTOMACHISSENSITIVE']
	},
	{
		EVENT: 'BREAKFAST',
		MEAL: [{
			SHAKE: {}
		}]
	},
	{
		EVENT: 'AMSNACK',
		ADVOCARE: {
			THERMOPLUS: { optional: true }
		},
		MEAL: [{
			FRUIT: {},
			PROTEIN: { quantity: 0.5 }
		}],
		TIPS: ['TIP_TAKETHERMOPLUSPRIOR']
	},
	{
		EVENT: 'BEFORELUNCH',
		ADVOCARE: {
			MNSBEFORELUNCH: {},
			CRAVECHECK: { notes: 'DAY25ON' }
		}
	},
	{
		EVENT: 'LUNCH',
		ADVOCARE: {
			MNSWHITEPACKETS: {}
		},
		MEAL: [{
			PROTEIN: {},
			VEGETABLES: {},
			CARB: {}
		}]
	},
	{
		EVENT: 'PMSNACK',
		ADVOCARE: {
			THERMOPLUS: { optional: true }
		},
		MEAL: [{
			PROTEIN: {},
			CARB: { quantity: 0.5 }
		}],
		TIPS: ['TIP_SLIMCANBETAKENFORAPPETITE']
	},
	{
		EVENT: 'DINNER',
		MEAL: [{
			PROTEIN: {},
			VEGETABLES: {}
		}]
	},
	{
		EVENT: 'BEDTIME',
		ADVOCARE: {
			OMEGAPLEX: { quantity: 2 },
			PROBIOTIC: { optional: true },
			BIOTUNE: { optional: true }
		},
		MEAL: [{
			PROTEIN: { quantity: 0.5 }
		}],
		TIPS: ['TIP_TRYRECIPESONFACEBOOK']
	},
	{
		EVENT: 'ANYTIME',
		ADVOCARE: {
			SPARK: {}
		},
		TIPS: ['TIP_SPARKONEORTWOPERDAYFORFOCUS']
	}
];

const processChallengPlan = (plan) => {
	for (var phaseKey in plan) {
		const phaseArr = plan[phaseKey];

		phaseArr.forEach( (eventObj) => {
			if (!eventObj.ADVOCARE) {
				// eventObj.ADVOCARE = {};
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
				// eventObj.MEAL = [];
			} else {
				eventObj.MEAL.forEach( (mealObj) => {
					for (var itemKey in mealObj) {
						const itemObj = mealObj[itemKey];

						if (!itemObj.quantity) {
							itemObj.quantity = 1;
						}
					}
				});
			}

			if (!eventObj.TIPS) {
				eventObj.TIPS = [];
			}
		});
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

