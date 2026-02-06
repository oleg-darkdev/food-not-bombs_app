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

	steps: [
		{
			id: 'download',
			title: 'Download files',
			time: 5,
			description: 'Download the latest version of the game',
			downloadLink:
				'https://github.com/oleg-darkdev/food-not-bombs_app/tree/main/static/print-and-play'
		},

		{
			id: 'box-wrap',
			title: 'Box wrapping kit',
			time: 15,
			recommendations: 'Plastic box with internal dividers',
			materials: ['Tape or glue', 'Paper 250 g/m² or higher', 'Box sized 30×15×10 cm'],
			print: {
				filesPath: '/promo',
				copies: 1,
				paperDensity: '250 g/m²+'
			}
		},

		{
			id: 'map',
			title: 'Map creation',
			time: 30,
			recommendations: '',
			materials: [
				{ name: 'A4 cardboard 3mm', amount: 3 },
				'Tape or glue',
				'Laminator (optional)',
				'Laminating film (optional)'
			],
			print: {
				files: ['/map/map_center.pdf', '/map/map_left.pdf', '/map/map_right.pdf'],
				copies: 1,
				paperDensity: '250 g/m²+'
			},
			postProcessing: ['Round the corners']
		},

		{
			id: 'food-tokens',
			title: 'Food token creation',
			time: 60,
			recommendations: '',
			materials: [{ name: 'A4 cardboard 3mm', amount: 4 }, 'Tape or glue'],
			print: {
				files: [
					'/tokens/tokens_bread_1.pdf',
					'/tokens/tokens_fruits_1.pdf',
					'/tokens/tokens_vegs_1.pdf',
					'/tokens/tokens_canned_1.pdf'
				],
				copies: 1,
				paperDensity: '250 g/m²+'
			},
			postProcessing: ['Glue onto cardboard', 'Cut along the borders']
		},

		{
			id: 'canning-tokens',
			title: 'Canned food tokens creation',
			time: 15,
			recommendations: '',
			materials: [{ name: 'A4 cardboard 3mm', amount: 1 }, 'Tape or glue'],
			print: {
				files: ['/tokens/tokens_canning_bank.pdf'],
				copies: 1,
				paperDensity: '250 g/m²+'
			},
			postProcessing: ['Glue onto cardboard', 'Cut along the borders']
		},

		{
			id: 'award-tokens',
			title: 'Award tokens creation',
			time: 70,
			recommendations: '',
			materials: [{ name: 'A4 cardboard 3mm', amount: 6 }, 'Tape or glue'],
			print: {
				files: ['/tokens/award tokens.pdf'],
				copies: 1,
				paperDensity: '250 g/m²+'
			},
			postProcessing: ['Glue onto cardboard', 'Cut along the borders']
		},

		{
			id: 'player-tokens',
			title: 'Player token creation',
			time: 20,
			recommendations: '',
			materials: [{ name: 'A4 cardboard 3mm', amount: 1 }, 'Tape or glue'],
			print: {
				files: ['/players_stuff/players_tokens.pdf'],
				copies: 1,
				paperDensity: '250 g/m²+'
			},
			postProcessing: ['Glue onto cardboard', 'Cut along the borders']
		},

		{
			id: 'player-tablets',
			title: 'Player board creation',
			time: 40,
			recommendations: '',
			materials: [{ name: 'A4 cardboard 3mm', amount: 4 }, 'Tape or glue'],
			print: {
				files: ['/players_stuff/players_tablets.pdf'],
				copies: 1,
				paperDensity: '250 g/m²+'
			},
			postProcessing: ['Cut out the white areas']
		}
	]
};




export default en;
