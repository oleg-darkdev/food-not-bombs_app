import { groupsByRegion, groupsListEurope } from '$sharedData';

// console.log(groupsListEurope);

export function load() {
	return {
		groupsByRegion,
		groupsListEurope
	};
}
