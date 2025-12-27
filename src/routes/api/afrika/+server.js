import { json } from '@sveltejs/kit';
import { groupsListAfrika } from '$sharedData';

export async function GET(event) {
	return json(groupsListAfrika);
}
