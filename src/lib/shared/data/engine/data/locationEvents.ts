// const locationEvents = [
// {
// 	id: 'localBoom',
// 	type: 'positive',
// 	baseChance: 0.02,
// 	effect: (locationResult) => {
// 		locationResult.resources += 2;
// 	}
// },
// {
// 	id: 'supplyFailure',
// 	type: 'negative',
// 	baseChance: 0.015,
// 	effect: (locationResult) => {
// 		locationResult.resources = Math.max(0, locationResult.resources - 2);
// 	}
// },
const locationEvents = [
	{
		id: 1,
		img: '/images/app/events/arrest_negative.svg',
		type: 'negative',
		baseChance: 0.015,
		title: 'Mass Arrest',
		description: 'All players who traveled to this location are arrested.',
		effects: ['All players in this location skip the current round']
	},
	{
		id: 2,
		img: '/images/app/events/arrest_negative_1.svg',
		type: 'negative',
		baseChance: 0.03,
		title: 'Police Raid',
		description: 'All players who traveled to this location are arrested.',
		effects: ['All players in this location skip the current round']
	},
	{
		id: 3,
		img: '/images/app/events/arrest_negative_2.svg',
		type: 'negative',
		baseChance: 0.03,
		title: 'Activist Detention',
		description: 'All players who traveled to this location are arrested.',
		effects: ['All players in this location skip the current round']
	},
	{
		id: 4,
		img: '/images/app/events/bike_negative.svg',
		type: 'negative',
		baseChance: 0.015,
		title: 'Bicycle Breakdown',
		description: 'All players in this location have their bicycles broken.',
		effects: ['Players cannot perform deliveries this round']
	},
	{
		id: 5,
		img: '/images/app/events/food_negative.svg',
		type: 'negative',
		baseChance: 0.015,
		title: 'Spoiled Food',
		description: 'Food collected in this location spoiled during transportation.',
		effects: ['Players return without any food tokens']
	},
	{
		id: 6,
		img: '/images/app/events/volunteer_positive.svg',
		type: 'positive',
		baseChance: 0.012,
		title: 'New Volunteer',
		description: 'A new volunteer joins the team.',
		effects: ['Each player recovers 1 action token spent this round']
	},
	{
		id: 7,
		img: '/images/app/events/experience_positive.svg',
		type: 'positive',
		baseChance: 0.01,
		title: 'Shared Experience',
		description: 'Activists from another group share their experience.',
		effects: ['Each player recovers 2 action tokens spent this round']
	},
	{
		id: 8,
		img: '/images/app/events/media_positive.svg',
		type: 'positive',
		baseChance: 0.012,
		title: 'Positive Media Coverage',
		description: 'A journalist publishes a positive report.',
		effects: ['Gain a "Zero Waste Kitchen" token']
	},
	{
		id: 9,
		img: '/images/app/events/flood_negative.svg',
		type: 'negative',
		baseChance: 0.01,
		title: 'Storage Flooded',
		description: 'The storage facility has been flooded.',
		effects: ['All food stored in the storage is spoiled']
	},
	{
		id: 10,
		img: '/images/app/events/shortage_bread_negative.svg',
		type: 'negative',
		baseChance: 0.01,
		title: 'Bread Shortage',
		description: 'Bread supplies across the city have collapsed.',
		effects: ['Remove all bread tokens from the city map']
	},
	{
		id: 11,
		img: '/images/app/events/shortage_fruit_negative.svg',
		type: 'negative',
		baseChance: 0.015,
		title: 'Fruit Shortage',
		description: 'Fruit has become unavailable in this location.',
		effects: ['Remove all fruit tokens from this location']
	},
	{
		id: 12,
		img: '/images/app/events/shortage_food_negative.svg',
		type: 'negative',
		baseChance: 0.012,
		title: 'Food Shortage',
		description: 'A serious food shortage has occurred in this location.',
		effects: [
			'Remove all fruit tokens from this location',
			'Remove all bread tokens from this location'
		]
	},
	{
		id: 13,
		img: '/images/app/events/canning_positive.svg',
		type: 'positive',
		baseChance: 0.008,
		title: 'Successful Preservation',
		description: 'The Preserver carried out additional successful canning.',
		effects: ['Preserve 10 cans']
	},
	{
		id: 14,
		img: '/images/app/events/bike_negative_1.svg',
		type: 'negative',
		baseChance: 0.015,
		title: 'Bicycle Breakdown',
		description: 'The Courier’s bicycle is broken.',
		effects: ['Courier cannot perform deliveries this and next round']
	},
	{
		id: 15,
		img: '/images/app/events/bike_negative_2.svg',
		type: 'negative',
		baseChance: 0.015,
		title: 'Bicycle Breakdown',
		description: 'The Trainer’s bicycle is broken.',
		effects: ['Trainer cannot perform deliveries this round']
	},
	{
		id: 16,
		img: '/images/app/events/training_negative.svg',
		type: 'negative',
		baseChance: 0.015,
		title: 'Team Burnout',
		description: 'The team is exhausted from overload.',
		effects: ['Training provides no bonus tokens this round']
	},
	{
		id: 17,
		img: '/images/app/events/training_positive.svg',
		type: 'positive',
		baseChance: 0.012,
		title: 'Productive Training',
		description: 'The training session was exceptionally effective.',
		effects: ['Gain +4 universal tokens from the Trainer']
	},
	{
		id: 18,
		img: '/images/app/events/scout_positive.svg',
		type: 'positive',
		baseChance: 0.008,
		title: 'Secret Route',
		description: 'The Scout discovered a safe route.',
		effects: ['No player will be detained in locations this round']
	},
	{
		id: 19,
		img: '/images/app/events/scout_positive_1.svg',
		type: 'positive',
		baseChance: 0.008,
		title: 'Secret Route',
		description: 'The Scout discovered a safe route.',
		effects: ['No player will be detained in locations this round']
	},
	{
		id: 20,
		img: '/images/app/events/scout_positive_2.svg',
		type: 'positive',
		baseChance: 0.008,
		title: 'Secret Route',
		description: 'The Scout discovered a safe route.',
		effects: ['No player will be detained in locations this round']
	},
	{
		id: 21,
		img: '/images/app/events/accounting_positive.svg',
		type: 'positive',
		baseChance: 0.012,
		title: 'Precise Accounting',
		description: 'The Accountant optimized city resources.',
		effects: ['Remove 10 unnecessary tokens from the city map']
	},
	{
		id: 22,
		img: '/images/app/events/accounting_negative.svg',
		type: 'negative',
		baseChance: 0.015,
		title: 'Data Overload',
		description: 'A calculation error caused chaos.',
		effects: ['Add 10 random tokens to the city map']
	}
];

export default locationEvents;
