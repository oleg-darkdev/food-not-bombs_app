import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { allGroups } from '$sharedData';

export const load: PageLoad = ({ params }) => {
	const group = allGroups.find((g) => g.id === params.id);

	if (!group) {
		throw error(404, 'Group not found');
	}

	return { group };
};
