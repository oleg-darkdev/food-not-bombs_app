const locationEvents = [
	{
		id: 'localBoom',
		type: 'positive',
		baseChance: 0.02,
		effect: (locationResult) => {
			locationResult.resources += 2;
		}
	},
	{
		id: 'supplyFailure',
		type: 'negative',
		baseChance: 0.015,
		effect: (locationResult) => {
			locationResult.resources = Math.max(0, locationResult.resources - 2);
		}
	}
];

export default locationEvents;
