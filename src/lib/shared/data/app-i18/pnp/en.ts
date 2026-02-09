const en = {
	meta: {
		title: 'We are delighted that you are interested in the project: Soup4All: Food Not Bombs',
		type: 'Print & Play',
		license: 'The boardgame is distributed under license: CC BY-NC-SA 4.0',
		repo: 'https://github.com/oleg-darkdev/food-not-bombs_app',
		webDocs: 'https://food-not-bombs.vercel.app/docs'
	},

	general: {
		totalTimeMin: '150–280',
		materials: [
			{ name: 'A4 cardboard 3mm', amount: 17 },
			{ name: 'Paper', density: '150–350 g/m²' },
			{ name: 'Lamination', optional: true },
			{ name: 'Double-sided tape or glue' }
		]
	},

	steps: {
		download: {
			id: 'download',
			title: 'Download files',
			video: 'https://www.youtube.com/embed/eYxlz2NH_E4?si=YPVo9nohuHHUXmhp',
			time: 5,
			description: 'Download the latest version of the game',
			downloadLink:
				'https://github.com/oleg-darkdev/food-not-bombs_app/tree/main/static/print-and-play'
		},

		boxWrap: {
			id: 'box-wrap',
			video: 'https://www.youtube.com/embed/eYxlz2NH_E4?si=YPVo9nohuHHUXmhp',
			title: 'Box wrapping kit',
			time: 15,
			recommendations: 'Plastic box with internal dividers',
			materials: ['Tape or glue', 'Paper 250 g/m² or higher', 'Box sized 30×15×10 cm'],
			print: {
				copies: 1,
				paperDensity: '250 g/m²+',
				directory: '/promo'
			}
		},

		map: {
			id: 'map-pnp',
			video: 'https://www.youtube.com/embed/eYxlz2NH_E4?si=YPVo9nohuHHUXmhp',
			title: 'Map',
			time: 30,
			recommendations: '',
			materials: [
				// { name: 'A4 cardboard 3mm', amount: 3 },
				'A4 cardboard 3mm',
				'Tape or glue',
				'Laminator (optional)',
				'Laminating stretch (optional)'
			],
			print: {
				files: ['/map_center.pdf', '/map_left.pdf', '/map_right.pdf'],
				// files: ['/map/map_center.pdf', '/map/map_left.pdf', '/map/map_right.pdf'],
				copies: 1,
				paperDensity: '250 g/m²+',
				directory: '/map'
			},
			postProcessing: ['Round the corners']
		},
		foodTokens: {
			id: 'food-tokens-pnp',
			video: 'https://www.youtube.com/embed/eYxlz2NH_E4?si=YPVo9nohuHHUXmhp',
			title: 'Food token',
			time: 60,
			recommendations: '',
			materials: [
				// { name: 'A4 cardboard 3mm', amount: 4 },
				'A4 cardboard 3mm',
				'Tape or glue'
			],
			print: {
				files: [
					// '/tokens/tokens_bread_1.pdf',
					// '/tokens/tokens_fruits_1.pdf',
					// '/tokens/tokens_vegs_1.pdf',
					// '/tokens/tokens_canned_1.pdf'
					'/tokens_bread_1.pdf',
					'/tokens_fruits_1.pdf',
					'/tokens_vegs_1.pdf',
					'/tokens_canned_1.pdf'
				],
				copies: 1,
				paperDensity: '250 g/m²+',
				directory: '/tokens'
			},
			postProcessing: ['Glue onto cardboard', 'Cut along the borders']
		},

		canningTokens: {
			id: 'canning-tokens-pnp',
			video: 'https://www.youtube.com/embed/eYxlz2NH_E4?si=YPVo9nohuHHUXmhp',
			title: 'Canned tokens',
			time: 15,
			recommendations: '',
			materials: [
				// { name: 'A4 cardboard 3mm', amount: 1 },
				'A4 cardboard 3mm',
				'Tape or glue'
			],
			print: {
				files: ['tokens_canning_bank.pdf'],
				copies: 1,
				paperDensity: '250 g/m²+',
				directory: '/tokens'
			},
			postProcessing: ['Glue onto cardboard', 'Cut along the borders']
		},

		awardTokens: {
			id: 'award-tokens-pnp',
			video: 'https://www.youtube.com/embed/eYxlz2NH_E4?si=YPVo9nohuHHUXmhp',
			title: 'Award tokens',
			time: 70,
			recommendations: '',
			materials: [
				// { name: 'A4 cardboard 3mm', amount: 6 },
				'A4 cardboard 3mm',
				'Tape or glue'
			],
			print: {
				files: ['/award tokens.pdf'],
				copies: 1,
				paperDensity: '250 g/m²+',
				directory: '/tokens'
			},
			postProcessing: ['Glue onto cardboard', 'Cut along the borders']
		},
		playerTokens: {
			id: 'player-tokens-pnp',
			video: 'https://www.youtube.com/embed/eYxlz2NH_E4?si=YPVo9nohuHHUXmhp',
			title: 'Player tokens',
			time: 20,
			recommendations: '',
			materials: [
				// { name: 'A4 cardboard 3mm', amount: 1 },
				'A4 cardboard 3mm',
				'Tape or glue'
			],
			print: {
				files: ['/players_tokens_1.pdf', '/players_tokens_2.pdf'],
				copies: 1,
				paperDensity: '250 g/m²+',
				directory: '/tokens/players/'
			},
			postProcessing: ['Glue onto cardboard', 'Cut along the borders']
		},
		
		blockTokens: {
			id: 'block-tokens-pnp',
			video: 'https://www.youtube.com/embed/eYxlz2NH_E4?si=YPVo9nohuHHUXmhp',
			title: 'Block tokens',
			time: 20,
			recommendations: '',
			materials: [
				// { name: 'A4 cardboard 3mm', amount: 1 },
				'A4 cardboard 3mm',
				'Tape or glue'
			],
			print: {
				files: ['/block_tokens.pdf'],
				copies: 1,
				paperDensity: '250 g/m²+',
				directory: '/tokens/other/'
			},
			postProcessing: ['Glue onto cardboard', 'Cut along the borders']
		},
		сlothingTokens: {
			id: 'сlothing-tokens-pnp',
			video: 'https://www.youtube.com/embed/eYxlz2NH_E4?si=YPVo9nohuHHUXmhp',
			title: 'Clothing tokens',
			time: 20,
			recommendations: '',
			materials: [
				// { name: 'A4 cardboard 3mm', amount: 1 },
				'A4 cardboard 3mm',
				'Tape or glue'
			],
			print: {
				files: ['/сlothing_tokens.pdf'],
				copies: 1,
				paperDensity: '250 g/m²+',
				directory: '/tokens/other/'
			},
			postProcessing: ['Glue onto cardboard', 'Cut along the borders']
		},
		eventTokens: {
			id: 'event-tokens-pnp',
			video: 'https://www.youtube.com/embed/eYxlz2NH_E4?si=YPVo9nohuHHUXmhp',
			title: 'Event tokens',
			time: 20,
			recommendations: '',
			materials: [
				// { name: 'A4 cardboard 3mm', amount: 1 },
				'A4 cardboard 3mm',
				'Tape or glue'
			],
			print: {
				files: ['/event_tokens.pdf'],
				copies: 1,
				paperDensity: '250 g/m²+',
				directory: '/tokens/others/'
			},
			postProcessing: ['Glue onto cardboard', 'Cut along the borders']
		},
		fnbGroupsTokens: {
			id: 'fnb-groups-tokens-pnp',
			video: 'https://www.youtube.com/embed/eYxlz2NH_E4?si=YPVo9nohuHHUXmhp',
			title: 'Groups tokens',
			time: 20,
			recommendations: '',
			materials: [
				// { name: 'A4 cardboard 3mm', amount: 1 },
				'A4 cardboard 3mm',
				'Tape or glue'
			],
			print: {
				files: ['/fnb_groups.pdf'],
				copies: 1,
				paperDensity: '250 g/m²+',
				directory: '/tokens/others/'
			},
			postProcessing: ['Glue onto cardboard', 'Cut along the borders']
		},
		playerTablets: {
			id: 'player-tablets-pnp',
			video: 'https://www.youtube.com/embed/eYxlz2NH_E4?si=YPVo9nohuHHUXmhp',
			title: 'Player tablets',
			time: 40,
			recommendations: '',
			materials: [
				// { name: 'A4 cardboard 3mm', amount: 4 },
				'A4 cardboard 3mm',
				'Tape or glue'
			],
			print: {
				files: ['/players_tablets.pdf'],
				copies: 1,
				paperDensity: '250 g/m²+',
				directory: '/players_stuff'
			},
			postProcessing: ['Cut out the white areas']
		}
	}
};

export default en;
