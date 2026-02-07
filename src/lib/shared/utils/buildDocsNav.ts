function buildDocsNav(groupsListEurope) {
	return groupsListEurope.map((country) => ({
		title: country.id.charAt(0).toUpperCase() + country.id.slice(1),
		anchor: country.id,
		showFull: false,

		subNav: country.data.map((city) => ({
			anchor: city.id,
			title: city.city,
			subSubNav: []
		}))
	}));
}

export default buildDocsNav;
