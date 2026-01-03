import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { allGroups } from '$sharedData';

// console.log(allGroups)

export const load: PageLoad = ({ params }) => {
	// console.log(allGroups)

	const group = allGroups.find((g) => g.id === params.id);


	console.log(group)
	if (!group) {
		throw error(404, 'Group not found');
	}

	return { group };
};
