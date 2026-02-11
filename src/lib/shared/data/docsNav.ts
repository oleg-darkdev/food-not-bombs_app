import { groupsByRegion } from './groupsList';
import kit from './app-i18/components/kit/en';

const docsNav = [
	// {
	// 	title: 'Print&Play',
	// 	anchor: '#print-and-play',
	// 	showFull: false,
	// 	subNav: [
	// 		{
	// 			title: 'Preparation',
	// 			anchor: '#print-and-play',
	// 			subSubNav: [
	// 				{
	// 					title: 'Download files',
	// 					anchor: '#download'
	// 				},
	// 				{
	// 					title: 'Box wrapping kit',
	// 					anchor: '#box-wrap'
	// 				}
	// 			]
	// 		},
	// 		{
	// 			title: 'Game components',
	// 			anchor: '#game-components',
	// 			subSubNav: [
	// 				{
	// 					title: 'Map',
	// 					anchor: '#map-pnp'
	// 				},
	// 				{
	// 					title: 'Food tokens',
	// 					anchor: '#food-tokens-pnp'
	// 				},
	// 				{
	// 					title: 'Canned tokens',
	// 					anchor: '#canning-tokens-pnp'
	// 				},
	// 				{
	// 					title: 'Award tokens',
	// 					anchor: '#award-tokens-pnp'
	// 				},
	// 				{
	// 					title: 'Block tokens',
	// 					anchor: '#block-tokens-pnp'
	// 				},
	// 				{
	// 					title: 'Clothing tokens',
	// 					anchor: '#сlothing-tokens-pnp'
	// 				},
	// 				{
	// 					title: 'Event tokens',
	// 					anchor: '#event-tokens-pnp'
	// 				},
	// 				{
	// 					title: 'Groups tokens',
	// 					anchor: '#fnb-groups-tokens-pnp'
	// 				},
	// 				{
	// 					title: 'Player tokens',
	// 					anchor: '#player-tokens-pnp'
	// 				},
	// 				{
	// 					title: 'Player tablets',
	// 					anchor: '#player-tablets-pnp'
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	{
		title: 'Boardgame rules',
		anchor: '#game-rules',
		showFull: false,
		subNav: [
			{
				title: 'Preparation',
				anchor: '#preparation',
				subSubNav: [
					// {
					// 	title: 'Download files',
					// 	anchor: '#download'
					// },
					// {
					// 	title: 'Box wrapping kit',
					// 	anchor: '#box-wrap'
					// }
				]
			},
			{
				title: 'Game components',
				anchor: '#game-components',
				subSubNav: [
					{
						title: 'Map',
						anchor: '#map'
					},
					{
						title: 'Food tokens',
						anchor: '#food-tokens'
					},
					{
						title: 'Canned tokens',
						anchor: '#canning-tokens'
					},
					{
						title: 'Award tokens',
						anchor: '#award-tokens'
					},
					{
						title: 'Player tokens',
						anchor: '#player-tokens'
					}
				]
			}
		]
	},
	{
		title: 'Game components',
		anchor: '#components',
		showFull: false,

		subNav: [
			{
				anchor: '#tokens',
				title: 'Tokens',
				subSubNav: [
					{
						anchor: '#players-tokens',
						title: 'Players tokens'
					},
					{
						anchor: '#food-tokens',
						title: 'Food tokens'
					},

					{
						anchor: '#other-tokens',
						title: 'Other-tokens'
					},
					{
						anchor: '#reward-tokens',
						title: 'Reward tokens'
					},
					{
						title: 'Block tokens',
						anchor: '#block-tokens'
					},
					{
						title: 'Clothing tokens',
						anchor: '#сlothing-tokens'
					},
					{
						title: 'Event tokens',
						anchor: '#event-tokens'
					},
					{
						title: 'Groups tokens',
						anchor: '#fnb-groups-tokens'
					},
					{
						title: 'Lose tokens',
						anchor: '#lose-tokens'
					}
				]
			},
			{
				anchor: '#tablets',
				title: 'Tablets',
				subSubNav: [
					{
						anchor: '#map-tablets',
						title: 'Map tablets'
					},
					{
						anchor: '#players-tablets',
						title: 'Players tablets'
					}
				]
			}
		]
	},
	// {
	// 	title: '',
	// 	anchor: '#',
	// 	subNav: [
	// 		{
	// 			anchor: '#',
	// 			title: '',
	// 			subSubNav: [
	// 				{
	// 					anchor: '#',
	// 					title: ''
	// 				},
	// 				{
	// 					anchor: '#',
	// 					title: ''
	// 				},
	// 				{
	// 					anchor: '#',
	// 					title: ''
	// 				},
	// 				{
	// 					anchor: '#',
	// 					title: ''
	// 				}
	// 			]
	// 		},
	// 		{
	// 			anchor: '#',
	// 			title: '',
	// 			subSubNav: [
	// 				{
	// 					anchor: '#',
	// 					title: ''
	// 				},
	// 				{
	// 					anchor: '#',
	// 					title: ''
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	title: '',
	// 	anchor: '#',
	// 	subNav: [
	// 		{
	// 			anchor: '#',
	// 			title: '',
	// 			subSubNav: [
	// 				{
	// 					anchor: '#',
	// 					title: ''
	// 				},
	// 				{
	// 					anchor: '#',
	// 					title: ''
	// 				},
	// 				{
	// 					anchor: '#',
	// 					title: ''
	// 				},
	// 				{
	// 					anchor: '#',
	// 					title: ''
	// 				}
	// 			]
	// 		},
	// 		{
	// 			anchor: '#',
	// 			title: '',
	// 			subSubNav: [
	// 				{
	// 					anchor: '#',
	// 					title: ''
	// 				},
	// 				{
	// 					anchor: '#',
	// 					title: ''
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	{
		title: 'Roles',
		anchor: '#roles',
		showFull: false,

		subNav: [
			{
				anchor: kit.playersStuff.items[0].anchor,
				title: `${kit.playersStuff.items[0].name} - ${kit.playersStuff.items[0].title}`,
				subSubNav: []
			},
			{
				anchor: kit.playersStuff.items[1].anchor,
				title: `${kit.playersStuff.items[1].name} - ${kit.playersStuff.items[1].title}`,
				subSubNav: []
			},
			{
				anchor: kit.playersStuff.items[2].anchor,
				title: `${kit.playersStuff.items[2].name} - ${kit.playersStuff.items[2].title}`,
				subSubNav: []
			},
			{
				anchor: kit.playersStuff.items[3].anchor,
				title: `${kit.playersStuff.items[3].name} - ${kit.playersStuff.items[3].title}`,
				subSubNav: []
			},
			{
				anchor: kit.playersStuff.items[4].anchor,
				title: `${kit.playersStuff.items[4].name} - ${kit.playersStuff.items[4].title}`,
				subSubNav: []
			},
			{
				anchor: kit.playersStuff.items[5].anchor,
				title: `${kit.playersStuff.items[5].name} - ${kit.playersStuff.items[5].title}`,
				subSubNav: []
			},
			{
				anchor: kit.playersStuff.items[6].anchor,
				title: `${kit.playersStuff.items[6].name} - ${kit.playersStuff.items[6].title}`,
				subSubNav: []
			},
			{
				anchor: kit.playersStuff.items[7].anchor,
				title: `${kit.playersStuff.items[7].name} - ${kit.playersStuff.items[7].title}`,
				subSubNav: []
			}
			// {
			// 	anchor: kit.playersStuff.items[8].anchor,
			// 	title: `${kit.playersStuff.items[8].name} - ${kit.playersStuff.items[8].title}`,
			// 	subSubNav: []
			// },
			// {
			// 	anchor: kit.playersStuff.items[9].anchor,
			// 	title: `${kit.playersStuff.items[9].name} - ${kit.playersStuff.items[9].title}`,
			// 	subSubNav: []
			// },
		]
	},
	{
		title: 'Food Not Bombs groups',
		anchor: '#groups',
		showFull: false,

		subNav: [
			{
				anchor: '#api',
				title: 'Api',
				subSubNav: [
					// {
					// 	anchor: '#',
					// 	title: ''
					// },
				]
			},
			{
				anchor: groupsByRegion[0].anchor,
				title: groupsByRegion[0].title,
				subSubNav: [
					// {
					// 	anchor: '#',
					// 	title: ''
					// },
				]
			},
			{
				anchor: groupsByRegion[1].anchor,
				title: groupsByRegion[1].title,
				subSubNav: [
					// {
					// 	anchor: '#',
					// 	title: ''
					// },
				]
			},
			{
				anchor: groupsByRegion[2].anchor,
				title: groupsByRegion[2].title,
				subSubNav: [
					// {
					// 	anchor: '#',
					// 	title: ''
					// },
				]
			},
			{
				anchor: groupsByRegion[3].anchor,
				title: groupsByRegion[3].title,
				subSubNav: [
					// {
					// 	anchor: '#',
					// 	title: ''
					// },
				]
			},
			{
				anchor: groupsByRegion[4].anchor,
				title: groupsByRegion[4].title,
				subSubNav: [
					// {
					// 	anchor: '#',
					// 	title: ''
					// },
				]
			},
			{
				anchor: groupsByRegion[5].anchor,
				title: groupsByRegion[5].title,
				subSubNav: [
					// {
					// 	anchor: '#',
					// 	title: ''
					// },
				]
			},
			{
				anchor: groupsByRegion[6].anchor,
				title: groupsByRegion[6].title,
				subSubNav: [
					// {
					// 	anchor: '#',
					// 	title: ''
					// },
				]
			},
			{
				anchor: groupsByRegion[7].anchor,
				title: groupsByRegion[7].title,
				subSubNav: [
					// {
					// 	anchor: '#',
					// 	title: ''
					// },
				]
			},
			{
				anchor: groupsByRegion[8].anchor,
				title: groupsByRegion[8].title,
				subSubNav: [
					// {
					// 	anchor: '#',
					// 	title: ''
					// },
				]
			},
			{
				anchor: groupsByRegion[9].anchor,
				title: groupsByRegion[9].title,
				subSubNav: [
					// {
					// 	anchor: '#',
					// 	title: ''
					// },
				]
			}
		]
	},

	{
		title: 'Questions and answers',
		anchor: '#faq',
		showFull: false,

		subNav: [
			{
				anchor: '#boardgame-faq',
				title: 'Boardgame FAQ',
				subSubNav: [
					// {
					// 	anchor: '#',
					// 	title: ''
					// },
					// {
					// 	anchor: '#',
					// 	title: ''
					// }
				]
			},
			{
				anchor: '#app-faq',
				title: 'Application FAQ',
				subSubNav: [
					// {
					// 	anchor: '#',
					// 	title: ''
					// },
					// {
					// 	anchor: '#',
					// 	title: ''
					// }
				]
			},
			{
				anchor: '#fnb-faq',
				title: 'Food Not Bombs FAQ',
				subSubNav: [
					// {
					// 	anchor: '#',
					// 	title: ''
					// },
					// {
					// 	anchor: '#',
					// 	title: ''
					// }
				]
			}
		]
	}
];

export default docsNav;
