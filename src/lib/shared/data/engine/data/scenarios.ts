 const scenarios = {
	tutorial: {
		id: 'tutorial',
		rounds: 5,
		global: { minTotal: 26, maxTotal: 44 },
		antiStreaks: { badBoost: 0.25, goodPenalty: 0.05 },
		rareEventsMultiplier: 1.5,
		cooperativeAid: 0.3
	},
	easy: {
		id: 'easy',
		rounds: 10,
		global: { minTotal: 24, maxTotal: 42 },
		antiStreaks: { badBoost: 0.2, goodPenalty: 0.1 },
		rareEventsMultiplier: 1.2,
		cooperativeAid: 0.2
	},
	medium: {
		id: 'medium',
		rounds: 10,
		global: { minTotal: 20, maxTotal: 40 },
		antiStreaks: { badBoost: 0.15, goodPenalty: 0.1 },
		rareEventsMultiplier: 1.0,
		cooperativeAid: 0.1
	},
	hard: {
		id: 'hard',
		rounds: 10,
		global: { minTotal: 17, maxTotal: 36 },
		antiStreaks: { badBoost: 0.1, goodPenalty: 0.15 },
		rareEventsMultiplier: 0.8,
		cooperativeAid: 0.0
	}
};

export default scenarios;
