const faq = {
	anchor: 'app-faq',
	title: 'Application FAQ',
	btnTitle: 'Show full application faq',

	data: [
		{
			q: `Where can I see the list of Food Not Bombs groups?`,
			a: [
				`The list of Food Not Bombs groups is available at: https://food-not-bombs.vercel.app/groups — where you can find groups in different regions.`,
				`The information is presented in several formats:`,
				`- as cards`,
				`- as a list`,
				`- on an interactive map`
			]
		},
		{
			q: `Is there a public API for accessing the list of groups?`,
			a: [
				`Yes, the project provides a public API available for third-party applications and developers.`,
				`The full list of APIs and detailed documentation are available at: https://food-not-bombs.vercel.app/docs#api`
			]
		},
		{
			q: `Is the board game dependent on the application?`,
			a: [
				`The main educational product of the project is a board game dedicated to the ideas of Food Not Bombs.`,
				`The web application and this website serve a supporting role, expanding the educational possibilities of the board game and making interaction with the materials more interactive.`
			]
		},
		{
			q: `What functions does the web application perform?`,
			a: [
				`Displaying information from the database through the user interface.`,
				`Providing a public API for data access.`,
				`Interactive instructions for the rules of the board game.`,
				`Assistant for preparing the board game.`,
				`Assistant during gameplay.`,
				`Interactive assistant “How to Become a Volunteer.”`
			]
		},
		{
			q: `Is access to the website and application paid?`,
			a: [`Access to the web application and website is completely free.`]
		},
		{
			q: `Is the project source code open?`,
			a: [
				`Yes, the project is open source. The source code is available on GitHub at: https://github.com/oleg-darkdev/food-not-bombs_app`
			]
		}
	]
};

export default faq;
