const en = {
	package: {
		category: 'Package Contents',
		anchor: 'package',

		items: [
			{ img: '/images/kit/package/.svg', title: 'Free web application (optional)', quantity: 1 },
			{
				img: '/images/kit/package/.svg',
				title: 'Optional dice (if you don’t want to use the web application)',
				quantity: 8
			},
			{
				img: '/images/kit/package/.svg',
				title: 'Sand offline clock (if you don’t want to use the web application)',
				quantity: 8
			},
			{
				img: '/images/kit/package/.svg',
				title: 'Mini cargo bike figurines (eco-plastic made from corn)',
				quantity: 8
			}
		]
	},
	playersStuff: {
		category: 'Players roles tokens',
		anchor: 'players-tokens',
		desc: [
			'Before the start of the game, players must choose roles from the available envelopes.',
			'Each role has unique abilities that reflect real skills and tasks encountered in Food Not Bombs activities. Players can choose from 9 roles, named after the founders of the movement: Jo Swanson, Mira Brown, Susan Eaton, Brian Feigenbaum, CT, Jessie Constable, Amy Rothstien, and Keith McHenry.',
			'Each role has its own envelope color, which corresponds to the color of its tokens and the player pawn.'
		],
		items: [
			{
				anchor: 'cargo-courier',
				title: 'Cargo',
				name: 'Mira Brown',
				ability: 'When collecting food, can take 2 additional food tokens.',
				token: {
					quantity: 12,
					img: '/images/kit/tokens/players/cargo_token_promo.svg'
				},
				pointer: {
					quantity: 1,
					img: '/images/kit/tokens/players/cargo_token_pointer_promo.svg'
				},
				tablet: {
					quantity: 1,
					img: '/images/kit/tablets/roles/cargo_promo.svg'
				},
				capacity: 3,
				color: 'yellow',
				startingTokens: 12
			},
			{
				token: {
					quantity: 12,
					img: '/images/kit/tokens/players/preserver_token_promo.svg'
				},
				pointer: {
					quantity: 1,
					img: '/images/kit/tokens/players/preserver_token_pointer_promo.svg'
				},
				tablet: {
					quantity: 1,
					img: '/images/kit/tablets/roles/preserver_promo.svg'
				},
				anchor: 'preserver',
				title: 'Preserver',
				name: 'Susan Eaton',
				ability: 'Canned food for 1 action token.',
				capacity: 2,
				color: 'pink',
				startingTokens: 12
			},
			{
				// img: '/images/kit/tokens/players/counteer_token_promo.svg',
				token: {
					quantity: 20,
					img: '/images/kit/tokens/players/counteer_token_promo.svg'
				},
				pointer: {
					quantity: 1,
					img: '/images/kit/tokens/players/counteer_token_pointer_promo.svg'
				},
				tablet: {
					quantity: 1,
					img: '/images/kit/tablets/roles/counteer_promo.svg'
				},
				anchor: 'counter',
				title: 'Counter',
				name: 'Jessie Constable',
				ability:
					'Keeps track of waste from the city map and kitchen. The main calculator of the team — all calculation tasks should be assigned to him.',
				capacity: 4,
				color: 'blue',
				startingTokens: 20
			},
			{
				token: {
					quantity: 12,
					img: '/images/kit/tokens/players/scout_token_promo.svg'
				},
				pointer: {
					quantity: 1,
					img: '/images/kit/tokens/players/scout_token_pointer_promo.svg'
				},
				tablet: {
					quantity: 1,
					img: '/images/kit/tablets/roles/scout_promo.svg'
				},
				anchor: 'scout',
				title: 'Scout',
				name: 'CT',
				ability:
					'His mere participation in the game opens up 2 tokens in each location for players at the beginning of the round.',
				capacity: 3,
				color: 'orange',
				startingTokens: 12
			},
			{
				token: {
					quantity: 14,
					img: '/images/kit/tokens/players/coach_token_promo.svg'
				},
				pointer: {
					quantity: 1,
					img: '/images/kit/tokens/players/coach_token_pointer_promo.svg'
				},
				tablet: {
					quantity: 1,
					img: '/images/kit/tablets/roles/coach_promo.svg'
				},
				anchor: 'coach',
				title: 'Coach',
				name: 'Brian Feigenbaum',
				color: 'red',

				ability:
					'Regularly conducts team training sessions. Each round provides +10 universal tokens available to all players.',
				capacity: 3,
				startingTokens: 14
			},
			{
				token: {
					quantity: 12,
					img: '/images/kit/tokens/players/cook_token_promo.svg'
				},
				pointer: {
					quantity: 1,
					img: '/images/kit/tokens/players/cook_token_pointer_promo.svg'
				},
				tablet: {
					quantity: 1,
					img: '/images/kit/tablets/roles/cook_promo.svg'
				},
				anchor: 'cook',
				title: 'Cook',
				name: 'Jo Swanson',
				ability:
					'Can cook delicious soup by mixing vegetables and fruits. Only the Cook can pay with tokens to use the vegetable and fruit mixer (smoothies).',
				capacity: 4,
				color: 'gray',
				startingTokens: 10
			}

			// {
			// 	token: {
			// 		quantity: 12,
			// 		img: '/images/kit/tokens/players/_token_promo.svg'
			// 	},
			// 	pointer: {
			// 		quantity: 1,
			// 		img: '/images/kit/tokens/players/_token_pointer_promo.svg'
			// 	},
			// 	tablet: {
			// 		quantity: 1,
			// 		img: '/images/kit/tablets/roles/_promo.svg'
			// 	},
			// 	anchor: '',
			// 	name: 'Amy Rothstien',
			// 	title: 'In preparation',
			// 	ability:
			// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			// 	capacity: 0,
			// 	color: '',
			// 	startingTokens: 0
			// },
		]
	},
	tokens: {
		category: 'Tokens',
		anchor: 'tokens',

		negative: {
			category: 'Negative tokens:',
			anchor: 'negative-tokens',

			items: [
				{
					img: '/images/kit/tokens/negative/dirty_kitchen_token.png',
					anchor: '',
					// dirty-kitchen
					title: 'Dirty kitchen',
					quantity: 4
				},
				{
					img: '/images/kit/tokens/negative/dangerous_zone_token.png',
					anchor: '',
					title: 'Dangerous zone',
					quantity: 4
				},
				{
					img: '/images/kit/tokens/negative/skip_turn_token.png',
					anchor: '',
					title: 'Skip turn',
					quantity: 6
				}
			]
		},
		food: {
			category: 'Food tokens:',
			anchor: 'food-tokens',

			items: [
				{
					img: '/images/kit/tokens/food/fruits_promo_token.svg',
					anchor: '',
					title: 'Fruits',
					quantity: 30
				},
				{
					img: '/images/kit/tokens/food/vegs_promo_token.svg',
					anchor: '',
					title: 'Vegetables',
					quantity: 30
				},
				{
					img: '/images/kit/tokens/food/canned_promo_token.svg',
					anchor: '',
					title: 'Canned',
					quantity: 30
				},
				{
					img: '/images/kit/tokens/food/bread_promo_token.svg',
					anchor: '',
					title: 'Bread',
					quantity: 30
				},
				{
					img: '/images/kit/tokens/food/canned_bootle_promo_token.svg',
					anchor: '',
					title: 'Canned bank',
					quantity: 15
				}
			]
		},
		clothing: {
			category: 'Clothing tokens:',
			anchor: 'clothing-tokens',

			items: [
				{
					img: '/images/kit/tokens/clothing/shoes_сlothing_token.svg',
					anchor: '',
					title: 'Shoes token',
					quantity: 3
				},
				{
					img: '/images/kit/tokens/clothing/jacket_сlothing_token.svg',
					anchor: '',
					title: 'Jacket token',
					quantity: 3
				},
				{
					img: '/images/kit/tokens/clothing/mittens_сlothing_token.svg',
					anchor: '',
					title: 'Mittens token',
					quantity: 3
				},
				{
					img: '/images/kit/tokens/clothing/socks_сlothing_token.svg',
					anchor: '',
					title: 'Socks token',
					quantity: 3
				},
				{
					img: '/images/kit/tokens/clothing/scarf_сlothing_token.svg',
					anchor: '',
					title: 'Scarf token',
					quantity: 3
				},
				{
					img: '/images/kit/tokens/clothing/poncho_сlothing_token.svg',
					anchor: '',
					title: 'Poncho token',
					quantity: 3
				},
				{
					img: '/images/kit/tokens/clothing/hat_сlothing_token.svg',
					anchor: '',
					title: 'Hat token',
					quantity: 3
				}
			]
		},

		event: {
			category: 'FNB Event tokens',
			anchor: 'event-tokens',

			items: [
				{
					img: '/images/kit/tokens/other/event_token_promo.svg',
					anchor: '',
					title: 'FNB Event preparation',
					quantity: 4
				}
			]
		},
		groups: {
			category: 'FNB groups tokens',
			anchor: 'fnb-groups-tokens',

			items: [
				{
					img: '/images/kit/tokens/groups/group_1_promo.png',
					anchor: '',
					title: 'FNB group ....',
					quantity: 1
				},
				{
					img: '/images/kit/tokens/groups/group_2_promo.png',
					anchor: '',
					title: 'FNB group ....',
					quantity: 1
				},
				{
					img: '/images/kit/tokens/groups/group_3_promo.png',
					anchor: '',
					title: 'FNB group ....',
					quantity: 1
				},
				{
					img: '/images/kit/tokens/groups/group_4_promo.png',
					anchor: '',
					title: 'FNB group ....',
					quantity: 1
				}
			]
		},

		reward: {
			category: 'Reward tokens:',
			anchor: 'reward-tokens',

			items: [
				{
					img: '/images/kit/tokens/reward/map_token_promo.svg',
					anchor: '',
					title: 'Reward: “Gratitude from those in need”',
					quantity: 10
				},
				{
					img: '/images/kit/tokens/reward/kitchen_token_promo.svg',
					anchor: '',
					title: 'Reward: “Zero-Waste Cooking”',
					quantity: 8
				},
				{
					img: '/images/kit/tokens/reward/society_token_promo.svg',
					anchor: '',
					title: 'Reward: “Food Rescuers”',
					quantity: 10
				}
			]
		},
		lose: {
			category: 'Lose token:',
			anchor: 'lose-tokens',

			items: [
				{
					img: '/images/kit/tokens/reward/lose_token_promo.svg',
					anchor: '',
					title: 'Lose token',
					quantity: 2
				}
			]
		},
		other: {
			category: 'Other tokens',
			anchor: 'other-tokens',

			items: [
				{
					img: '/images/kit/tokens/other/uni_token_promo.svg',
					anchor: '',
					title: 'Universal for team',
					quantity: 8
				}
			]
		}
	},

	tablets: {
		category: 'Tablets',
		anchor: 'tablets',

		players: {
			category: 'Players tablets',
			anchor: 'players-tablets',

			items: [
				// inside roles info
			]
		},
		map: {
			category: 'Map tablets',
			anchor: 'map-tablets',

			items: [
				// {
				// 	img: '/images/kit/tablets/roles/counter.svg',
				// 	anchor: '', title: '“Counter”',
				// 	quantity: 1
				// },
				// {
				// 	img: '/images/kit/tablets/roles/counter.svg',
				// 	anchor: '', title: '“Counter”',
				// 	quantity: 1
				// },
				{
					img: '/images/kit/tablets/map/map_left.svg',
					anchor: '',
					title: 'City map: left side',
					quantity: 1
				},
				{
					img: '/images/kit/tablets/map/map_center.svg',
					anchor: '',
					title: 'Kitchen',
					quantity: 1
				},

				{
					img: '/images/kit/tablets/map/map_right.svg',
					anchor: '',
					title: 'City map: right side',
					quantity: 1
				}
			]
		}
	}
};
export default en;
