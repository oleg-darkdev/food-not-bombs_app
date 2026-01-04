import { json } from '@sveltejs/kit';
import { groupsListUsa } from '$sharedData';

export async function GET(event) {
	return json(groupsListUsa);
}
