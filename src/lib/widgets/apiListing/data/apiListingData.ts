import { groupsByRegion } from '$sharedData';

const apiListing = groupsByRegion.map(({ title, shortDesc, api }) => ({
	title,
	shortDesc,
	api
}));



export default apiListing