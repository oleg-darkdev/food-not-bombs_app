import { json } from '@sveltejs/kit';
import { allGroups } from '$sharedData';

export async function GET(event) {
	return json(allGroups);
}
