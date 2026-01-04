import { json } from '@sveltejs/kit';
import { groupsListAsia } from '$sharedData';

export async function GET(event) {
	return json(groupsListAsia);
}
