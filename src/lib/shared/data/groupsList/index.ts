import groupsListAfrika from './groupsListAfrika';
import groupsListAsia from './groupsListAsia';
import groupsListAustralia from './groupsListAustralia';
import groupsListCanada from './groupsListCanada';
import groupsListCentralSouthAmerica from './groupsListCentralSouthAmerica';
import groupsListMexico from './groupsListMexico';
import groupsListUsa from './groupsListUsa';
import { groupsListEurope, poland, czechRepublic, ukraine } from './groupsListEurope';
import groupsListRussia from './groupsListRussia';
import promoFnbGroups from './promo';

// import groupsListAfrika from './groupsListAfrika';

// const allGroups = [
	// ...groupsListAfrika,
	// ...groupsListAustralia,
	// ...groupsListAsia,
	// ...groupsListCanada,
	// ...groupsListCentralSouthAmerica,
	// ...groupsListMexico,
	// ...groupsListUsa,
	// ...groupsListRussia,
	// ...groupsListEurope


// 	...poland, ...czechRepublic
// ];

const allGroups = [].concat(poland, ukraine, czechRepublic)


let groupsByRegion = [
	{
		title: 'Afrika',
		link: '/groups#afrika',
		anchor: 'afrika',
		countries: [
			'Australia',
			'Philippine',
			'South Africa',
			'Malawi',
			'Burundi',
			'Kenya',
			'Somalia',
			'Ethiopia',
			'Italy',
			'Tunisia',
			'England',
			'UK',
			'Liberia',
			'Togo',
			'Nigeria'
		],
		data: groupsListAfrika,
		api: { route: '/api/afrika', title: 'All regions' },
		shortDesc: ''
	},
	{
		title: 'All regions',
		link: '/groups#all',
		anchor: '',
		countries: [
			'Australia',
			'Philippine',
			'South Africa',
			'Malawi',
			'Burundi',
			'Kenya',
			'Somalia',
			'Ethiopia',
			'Italy',
			'Tunisia',
			'England',
			'UK',
			'Liberia',
			'Togo',
			'Nigeria',
			'New Zealand',
			'Thailand',
			'Myanmar',
			'Malaysia',
			'Indonesia',
			'Singapore',
			'Philippines',
			'Japan',
			'South Korea',
			'China',
			'Canada',
			'Brazil',
			'Chile',
			'Guatemala',
			'Columbia',
			'Peru',
			'Argentina',
			'Mexico',
			'USA',
			'US',
			'Russia',
			'Turkey',
			'Israel',
			'Georgia',
			'Norway',
			'Finland',
			'Estonia',
			'Sweden',
			'Denmark',
			'Iceland',
			'Scotland',
			'Ireland',
			'Wales',
			'Netherlands',
			'Belgium',
			'France',
			'Spain',
			'Portugal',
			'Corotna',
			'Greece',
			'Macedonia',
			'Bulgaria',
			'Romania',
			'Serbia',
			'Bosnia & Herzegovina',
			'Croatia',
			'Hungary',
			'Slovakia',
			'Austria',
			'Switzerland',
			'Ukraine',
			'Poland',
			'Czech Republic',
			'Germany'
		],
		data: allGroups,
		api: { route: '/api/', title: 'All regions' },
		shortDesc: ''
	},
	{
		title: 'Asia',
		link: '/groups#asia',
		anchor: 'asia',
		countries: [
			'Thailand',
			'Myanmar',
			'Malaysia',
			'Indonesia',
			'Singapore',
			'Philippines',
			'Japan',
			'South Korea',
			'China'
		],
		data: groupsListAsia,
		api: { route: '/api/asia', title: 'Asia' },
		shortDesc: ''
	},
	{
		title: 'Canada',
		link: '/groups#canada',
		anchor: 'canada',
		countries: ['Canada'],
		data: groupsListCanada,
		api: { route: '/api/canada', title: 'Canada' },
		shortDesc: ''
	},
	{
		title: 'Mexico',
		link: '/groups#mexico',
		anchor: 'mexico',
		countries: ['Mexico'],
		data: groupsListMexico,
		api: { route: '/api/mexico', title: 'Mexico' },
		shortDesc: ''
	},
	{
		title: 'USA',
		link: '/groups#usa',
		anchor: 'usa',
		countries: ['USA'],
		data: groupsListUsa,
		api: { route: '/api/usa', title: 'USA' },
		shortDesc: ''
	},
	{
		title: 'Australia',
		link: '/groups#australia',
		anchor: 'australia',
		countries: ['Australia', 'New Zealand'],
		data: groupsListAustralia,
		api: { route: '/api/australia', title: 'Australia' },
		shortDesc: ''
	},
	{
		title: 'Russia',
		link: '/groups#russia',
		anchor: 'russia',
		countries: ['Russia'],
		data: groupsListRussia,
		api: { route: '/api/russia', title: 'Russia' },
		shortDesc: ''
	},
	{
		title: 'Europe',
		link: '/groups#europe',
		anchor: 'europe',
		countries: [
			'Turkey',
			'Israel',
			'Georgia',
			'Norway',
			'Finland',
			'Estonia',
			'Sweden',
			'Denmark',
			'Iceland',
			'Scotland',
			'England',
			'Ireland',
			'Wales',
			'Netherlands',
			'Belgium',
			'France',
			'Spain',
			'Portugal',
			'Corotna',
			'Italy',
			'Greece',
			'Macedonia',
			'Bulgaria',
			'Romania',
			'Serbia',
			'Bosnia & Herzegovina',
			'Croatia',
			'Hungary',
			'Slovakia',
			'Austria',
			'Switzerland',
			'Ukraine',
			'Poland',
			'Czech Republic',
			'Germany'
		],
		data: groupsListEurope,
		api: { route: '/api/europe', title: 'Europe' },
		shortDesc: ''
	},
	{
		title: 'C. & S. America',
		link: '/groups#c-s-america',
		anchor: 'c-s-america',
		countries: ['Brazil', 'Chile', 'Guatemala', 'Columbia', 'Peru', 'Argentina'],
		data: groupsListCentralSouthAmerica,
		api: { route: '/api/c-s-america', title: 'Central South America' },
		shortDesc: ''
	}
];


// function getUniqueCountries(items) {
// 	return [...new Set(items.map((item) => item.country).filter(Boolean))];
// }

// const countriesList = getUniqueCountries(allGroups);

export {
	poland,
	ukraine,
	czechRepublic,
	promoFnbGroups,
	// countriesList,
	groupsListAfrika,
	groupsByRegion,
	allGroups,
	groupsListRussia,
	groupsListAustralia,
	groupsListAsia,
	groupsListCanada,
	groupsListCentralSouthAmerica,
	groupsListMexico,
	groupsListUsa,
	groupsListEurope
};
